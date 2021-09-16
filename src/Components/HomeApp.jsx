import { useEffect, useState } from 'react'
import Header from './Header/SearchCompany';
import Card from './Card/CardList'
import SideBar from './SideBar/FilterBar'
import Footer from './Footer/Footer'
import { fetchCompanyData } from '../redux/company/CompanyDetails'
import { useDispatch } from 'react-redux'

function HomeApp() {
    const dispatch = useDispatch()
    const [isSearch, setIsSearch] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState()
    useEffect(() => {
        dispatch(fetchCompanyData())
    }, [dispatch]);

    return (
        <div className="container">
            {isSearch && <SideBar />}
            <div className="home-wrapper">
                <Header setIsSearch={setIsSearch} />
                {isSearch && <Card currentPage={currentPage} setCurrentPage={setCurrentPage} setTotalPage={setTotalPage} />}
                {isSearch && totalPage > 1 && <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} />}
            </div>
        </div>
    )
}

export default HomeApp
