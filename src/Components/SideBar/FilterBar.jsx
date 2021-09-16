import style from './FilterBar.module.css'
import { useEffect, useState } from 'react'
import { setCompanyData } from '../../redux/company/CompanyDetails'
import { useDispatch, useSelector } from 'react-redux'
function FilterBar() {
    const dispatch = useDispatch()
    const getTempCompanyValue = useSelector((state) => state.company.tempValue)

    const [areaList, setAreaList] = useState([]);
    const [jobTitle, setJobTitle] = useState();
    const [area, setArea] = useState(null);
    const FilterFunc = () => {
        var filterList = []
        jobTitle && area ? filterList = getTempCompanyValue.filter((item) => {
            return item.job.toLowerCase().includes(jobTitle.toLowerCase()) && item.area === area;
        }) : area ? filterList = getTempCompanyValue.filter((item) => {
            return item.area === area
        }) : jobTitle ? filterList = getTempCompanyValue.filter((item) => {
            return item.job.toLowerCase().includes(jobTitle.toLowerCase())
        }) : filterList = getTempCompanyValue
        dispatch(setCompanyData(filterList))
        setArea()
        setJobTitle("")
    }
    useEffect(() => {
        setTimeout(() => {
            var item = getTempCompanyValue.map((item) => item.area)
            //! aynı olan arealar çıkartılması için
            if (item) {
                var array = item.filter((item, index, self) =>
                    index === self.findIndex((t) => (
                        t === item
                    ))
                )
                setAreaList(array)
            }
        }, 100);
    }, [getTempCompanyValue])
    return (
        <div className={style.sidebar} >
            <input className={style.mt5} value={jobTitle} onChange={(e) => { setJobTitle(e.target.value) }} placeholder="Job Title" type="text" />
            <select className={style.mt5} name="area" id="area" value={area} onChange={(e) => { setArea(e.target.value) }} >
                <option value="Select">Please Select Area</option>
                {
                    areaList.map((item, key) => <option key={key} value={item}>{item}</option>)
                }
            </select>
            <button className={style.mt5} onClick={FilterFunc} >Filter</button>
        </div>
    )
}

export default FilterBar
