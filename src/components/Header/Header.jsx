import React, { useState } from "react";
import headerS from "./header.module.css"
import s from "../../App.module.css"
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toFilter } from "../../redux/filterSlice";

const Header = () => {
    const dispatch = useDispatch()

    const [filter, setFilter] = useState("")

    const addFilter = (value) => {
        dispatch(toFilter(value))
        setFilter("")
    }


    return (
        <header className={headerS.header}>
            <div className={s.container}>
                <div className={headerS.headerRow}>
                    <nav className={headerS.navigation}>
                        <div className={headerS.logo}></div>
                        <NavLink to={"/"} className={({isActive}) => isActive ? headerS.linkActive : headerS.link }
                            reloadDocument>Каталог</NavLink>
                        <NavLink to={"/basket"} className={({isActive}) => isActive ? headerS.linkActive : headerS.link }
                            reloadDocument>Корзина</NavLink>
                        <NavLink to={"/add"} className={({isActive}) => isActive ? headerS.linkActive : headerS.link}>
                            Предложить картину</NavLink>
                        <NavLink className={headerS.link}>Контакты</NavLink>
                        <NavLink className={headerS.link}>О галерее</NavLink>     
                    </nav>
                    <div className={headerS.search}>
                        <input value={filter} onChange={e => setFilter(e.target.value)} className={headerS.searchInput} placeholder="Поиск по названию картины" type="text" />
                        <button onClick={() => addFilter(filter)} className={headerS.button}>Найти</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header