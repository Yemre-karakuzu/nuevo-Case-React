import React from 'react'
import style from './Card.module.css'
function CardItem({ data }) {
    return (
        <div key={data.id} className={style.CardItem}>
            <div  >
                <img className={style.CardItem_img} src={data.image} onError={(e) => { e.target.onerror = null; e.target.src = "https://freefrontend.com/assets/img/403-forbidden-html-templates/403-Access-Forbidden-HTML-Template.gif" }} alt="" />
            </div>
            <div className={style.CardItem_description}>
                <span>{data.name}</span>
                <span>{data.company}</span>
                <span>{data.jobdescription}</span>
            </div>
        </div>
    )
}

export default CardItem
