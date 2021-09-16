import React from 'react'
import style from './Footer.module.css'

function Footer({ currentPage, setCurrentPage, totalPage }) {
    const nextFunc = () => {
        if (currentPage < totalPage)
            setCurrentPage(currentPage + 1)
    }
    const prevFunc = () => {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1)
    }
    return (
        <div className={style.container}>
            <button onClick={prevFunc} >Prev</button>
            <span className={style.text} >{currentPage}/{totalPage}</span>
            <button onClick={nextFunc} >Next</button>
        </div>
    )
}

export default Footer
