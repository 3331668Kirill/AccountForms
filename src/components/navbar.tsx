import React from "react";
import s from './navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.nav_div}>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to='/home' >Главная</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/act_form' >Акт выполненных работ</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/ttn_form' >ТТН</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/tn_form' >ТН</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/invoice_form' >Счет-фактура</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/contract' >Договор</NavLink>
                </div>
            </nav>
         </div>
    )
}

export default Navbar