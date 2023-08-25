import React from "react";
import s from "../../App.module.css"
import footerS from "./footer.module.css"
import { NavLink } from "react-router-dom";


const Footer = () => {


    return (
        <footer className={footerS.footer}>
            <div className={s.container}>
                <div className={footerS.footerRow}>
                    <nav className={footerS.navigation}>
                        <div className={footerS.logo}></div>
                        <NavLink to={"/"} className={({isActive}) => isActive ? footerS.linkActive : footerS.link }
                            reloadDocument>Каталог</NavLink>
                        <NavLink to={"/basket"} className={({isActive}) => isActive ? footerS.linkActive : footerS.link }
                            reloadDocument>Корзина</NavLink>
                        <NavLink className={footerS.link}>Оплата</NavLink>
                        <NavLink className={footerS.link}>Контакты</NavLink>
                        <NavLink className={footerS.link}>О галерее</NavLink>     
                    </nav>
                    <div className={footerS.contacts}>
                        <div className={footerS.phoneNumber}>{"+7 (495) 555-55-55"}</div>
                        <div className={footerS.address}>{"г. Москва, ул. Расплетина, 24"}</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer