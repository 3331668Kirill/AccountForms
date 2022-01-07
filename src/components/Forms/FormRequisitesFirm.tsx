import React, {ChangeEvent, useState} from "react";
import {Modal} from "../../utils/Modal";
import css from "./requisitesActs.module.css"
import inp from "./../print.module.css"

interface TypePropsFormRequisitesFirm {
    unp: string | number
    changeUnp: (e: ChangeEvent<HTMLInputElement>) => void
    changeNameFirm: (e: ChangeEvent<HTMLInputElement>) => void
    changeAddress: (e: ChangeEvent<HTMLInputElement>) => void
    changeBankAccount: (e: ChangeEvent<HTMLInputElement>) => void
    bankAccount: string
    nameFirm: string
    address: string
    val: string
}

export const FormRequisitesFirm = React.memo(({
                                                  unp,
                                                  changeUnp,
                                                  changeNameFirm,
                                                  changeAddress,
                                                  changeBankAccount,
                                                  nameFirm,
                                                  bankAccount,
                                                  address,
                                                  val,
                                              }: TypePropsFormRequisitesFirm) => {

    const [modalActive, setModalActive] = useState<boolean>(false)
    console.log("render Form")
    return (<div>
        {val === 'customer' &&
        <button className={css.button}
                onClick={() => setModalActive(true)}
        > РЕКВИЗИТЫ ЗАКАЗЧИКА
        </button>}
        {val === 'executor' && <div>
            <button className={css.button}
                    onClick={() => setModalActive(true)}
            > РЕКВИЗИТЫ ИСПОЛНИТЕЛЯ
            </button>
        </div>}
        <Modal active={modalActive} setActive={setModalActive}>
            <div className={inp.input_field}>
                <label >введите УНП: </label>
                <input type={"text"} id={val === 'customer' ? 'unp' : 'unpOwn'} value={unp} onChange={changeUnp}
                        className={inp.input} maxLength={9}/>
            </div>
            <div className={inp.input_field}>
                <label>введите наименование организации: </label>
                <input type={"text"} id={val === 'customer' ? 'nameFirm' : 'nameFirmOwn'} value={nameFirm}
                       className={inp.input} onChange={changeNameFirm} maxLength={30}/>
            </div>
            <div className={inp.input_field}>
                <label>введите адрес организации: </label>
                <input type={"text"} id={val === 'customer' ? 'address' : 'addressOwn'} style={{width: '250px'}}
                       className={inp.input} value={address} onChange={changeAddress} maxLength={40}/>
            </div>
            <div className={inp.input_field}>
                <label>введите расчетный счет организации: </label>
                <input type={"text"} id={val === 'customer' ? 'bankAccount' : 'bankAccountOwn'}
                       className={inp.input} style={{width: '250px'}}
                       value={bankAccount} onChange={changeBankAccount} maxLength={28}/>
            </div>

        </Modal>
    </div>)
})