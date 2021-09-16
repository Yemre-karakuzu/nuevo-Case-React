import style from './SearchCompany.module.css'
import { useState } from 'react'
import { setCompanyData } from '../../redux/company/CompanyDetails'
import { useDispatch, useSelector } from 'react-redux'
function SearchCompany({ setIsSearch }) {
    const dispatch = useDispatch()
    const getCompanyValue = useSelector((state) => state.company.value)
    const [searchText, setSerchText] = useState();
    const [searchCompany, setSearchCompany] = useState();
    const searchFunc = async () => {
        var filter = [];
        //! seçili bir aouto company yoksa direk texte göre arar.
        searchCompany ?
            filter = getCompanyValue.filter((item) =>
                item.name.toLowerCase().includes(searchCompany.toLowerCase())
            ) : searchText ? filter = getCompanyValue.filter((item) =>
                item.name.toLowerCase().includes(searchText.toLowerCase())
            ) : filter = getCompanyValue
        setSearchCompany("");
        setSerchText("");
        setIsSearch(true)
        dispatch(setCompanyData(filter));
    }
    return (
        <div className={style.Header}>
            <input placeholder="Name" value={searchText} onChange={(e) => setSerchText(e.target.value)} type="text" />
            <select name="companyName" id="companyName" value={searchCompany} onChange={(e) => setSearchCompany(e.target.value)} >
                <option value="Select">Company-Autocomplete</option>
                {

                    getCompanyValue.map((item, index) =>
                        <option key={index} value={item.name}>{item.name}</option>
                    )
                }
            </select>
            <button onClick={searchFunc} >Search</button>
        </div>
    )
}

export default SearchCompany
