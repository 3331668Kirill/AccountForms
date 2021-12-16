import React, {ChangeEvent, useState} from "react";
import {Modal} from "./Modal";

interface TypePropsFormRequisitesFirm {
    unp: string|number
    changeUnp: (e: ChangeEvent<HTMLInputElement>) => void
    changeNameFirm: (e: ChangeEvent<HTMLInputElement>) => void
    changeAddress: (e: ChangeEvent<HTMLInputElement>) => void
    changeBankAccount: (e: ChangeEvent<HTMLInputElement>) => void
    bankAccount: string|number
    nameFirm: string|number
    address: string|number
}

export const FormRequisitesFirm = React.memo(({
                                                  unp,
                                                  changeUnp,
                                                  changeNameFirm,
                                                  changeAddress,
                                                  changeBankAccount,
                                                  nameFirm,
                                                  bankAccount,
                                                  address
                                              }: TypePropsFormRequisitesFirm) => {

    const [modalActive, setModalActive] = useState<boolean>(false)
    console.log("render Form")
    return (<div>
        <button style={{margin: "10px 20px", padding: "20px", fontSize: "1rem"}}
                onClick={() => setModalActive(true)}
        > РЕКВИЗИТЫ ЗАКАЗЧИКА
        </button>
        <Modal active={modalActive} setActive={setModalActive}>
            <label>введите УНП: </label>
            <input type={"text"} id={'unp'} value={unp} onChange={changeUnp} maxLength={9}/>
            <div>
                <label>введите наименование организации: </label>
                <input type={"text"} id={'nameFirm'} value={nameFirm} onChange={changeNameFirm} maxLength={20}/>
            </div>
            <div>
                <label>введите адрес организации: </label>
                <input type={"text"} id={'address'} style={{width: '250px'}}
                       value={address} onChange={changeAddress} maxLength={40}/>
            </div>
            <div>
                <label>введите расчетный счет организации: </label>
                <input type={"text"} id={'bankAccount'} style={{width: '250px'}}
                       value={bankAccount} onChange={changeBankAccount} maxLength={28}/>
            </div>
        </Modal>

    </div>)
})