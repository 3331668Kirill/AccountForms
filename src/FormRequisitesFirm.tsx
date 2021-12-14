import React, {ChangeEvent, useState} from "react";
import {Modal} from "./Modal";

interface TypePropsFormRequisitesFirm {
    unp: string
    changeInputElement: (e: ChangeEvent<HTMLInputElement>) => void
    bankAccount: string
    nameFirm:string
    address:string
}


export const FormRequisitesFirm =React.memo( ({unp, changeInputElement, nameFirm, bankAccount,address}: TypePropsFormRequisitesFirm) => {
    const [modalActive, setModalActive] = useState<boolean>(false)
    console.log("render Form")
    return (<div>
        <button style={{margin:"10px 20px", padding:"20px", fontSize:"1rem"}}
                onClick={()=>setModalActive(true)}
        > РЕКВИЗИТЫ ФИРМЫ </button>
        <Modal active={modalActive} setActive={setModalActive}>
            <label>введите УНП: </label>
            <input type={"text"} id={'unp'} value={unp} onChange={changeInputElement} maxLength={9}/>
            <div>
                <label>введите наименование организации: </label>
                <input type={"text"} id={'nameFirm'} value={nameFirm} onChange={changeInputElement} maxLength={20}/>
            </div>
            <div>
                <label>введите расчетный счет организации: </label>
                <input type={"text"} id={'address'} style={{width:'250px'}}
                       value={address} onChange={changeInputElement} maxLength={28}/>
            </div>
            <div>
                <label>введите расчетный счет организации: </label>
                <input type={"text"} id={'bankAccount'} style={{width:'250px'}}
                       value={bankAccount} onChange={changeInputElement} maxLength={28}/>
            </div>
        </Modal>

    </div>)
})