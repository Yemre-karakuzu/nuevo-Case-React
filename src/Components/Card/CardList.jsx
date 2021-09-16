import style from './Card.module.css'
import CardItem from './CardItem'
import NotPage from './NotFoundPage'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux' //erişmek için state

function CardList({ setTotalPage, currentPage, setCurrentPage }) {
    const getTempCompanyValue = useSelector((state) => state.company.tempValue)
    const [data, setData] = useState(getTempCompanyValue);
    const [slice, setSlice] = useState(0)

    useEffect(() => {
        //! Sayfalamayı 3 item göstererek yapıldıgından 3 ten büyük olması gerekiyor ve bu if sayfanın arttıgı zaman işlev görüyor
        if (getTempCompanyValue.length > 3 && (3 * currentPage > slice)) {
            var totalPage = (getTempCompanyValue.length / 3)
            //! tam bölünmesi halinde totalPage'i arttırmaya gerek yok
            getTempCompanyValue.length % 3 === 0 ? totalPage = Math.floor(totalPage) : totalPage = Math.floor(totalPage) + 1
            setTotalPage(totalPage)
            let tempData = getTempCompanyValue.slice(slice, 3 * currentPage);
            setData(tempData)
            setSlice(3 * currentPage)
        }
        //! Sayfalamayı 3 item göstererek yapıldıgından 3 ten büyük olması gerekiyor ve bu if sayfanın azaldığı zaman işlev görüyor
        else if (getTempCompanyValue.length > 3 && (3 * currentPage < slice)) {
            if (currentPage - 1 !== 0) {
                let tepmSlice = 3 * (currentPage - 1)
                let tempData = getTempCompanyValue.slice(tepmSlice, 3 * currentPage);
                setSlice(tepmSlice)
                setData(tempData)
            }
            else {
                let tempData = getTempCompanyValue.slice(0, 3 * currentPage);
                setSlice(3 * currentPage)
                setData(tempData)
            }
        }
        else if (getTempCompanyValue.length > 3 && currentPage === 1) {
            let totalPage = (getTempCompanyValue.length / 3)
            getTempCompanyValue.length % 3 === 0 ? totalPage = Math.floor(totalPage) : totalPage = Math.floor(totalPage) + 1
            setTotalPage(totalPage)
            let tempData = getTempCompanyValue.slice(0, 3 * currentPage);
            setData(tempData)
            setSlice(3 * currentPage)
        }
        //! bu kısım zaten 3 ve daha az item varsa işlem yapmaya gerek olmadığından bu kısma düşüyor burada da restlemelerimi yapıyorum
        else {
            setData(getTempCompanyValue)
            setTotalPage(0)
            setSlice(0)
            setCurrentPage(1)
        }
    }, [setTotalPage, getTempCompanyValue, setCurrentPage, currentPage])
    return (
        <div className={style.container}>
            {
                data.length > 0 ? data.map((item) =>
                    <div key={item.id}>
                        <CardItem data={item} />
                    </div>
                ) : <NotPage />
            }
        </div>
    )
}

export default CardList
