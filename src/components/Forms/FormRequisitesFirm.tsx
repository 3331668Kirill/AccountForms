import React, {ChangeEvent, useState} from "react";
import {Modal} from "../../Modal";

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
        <button style={{margin: "10px 20px", padding: "20px", fontSize: "1rem", backgroundColor: 'lightgreen'}}
                onClick={() => setModalActive(true)}
        > РЕКВИЗИТЫ ЗАКАЗЧИКА
        </button>}
        {val === 'executor' && <div>
            <button style={{margin: "10px 20px", padding: "20px", fontSize: "1rem", backgroundColor: 'lightgreen'}}
                    onClick={() => setModalActive(true)}
            > РЕКВИЗИТЫ ИСПОЛНИТЕЛЯ
            </button>
        </div>}
        <Modal active={modalActive} setActive={setModalActive}>
            <label>введите УНП: </label>
            <input type={"text"} id={val === 'customer' ? 'unp' : 'unpOwn'} value={unp} onChange={changeUnp}
                   maxLength={9}/>
            <div>
                <label>введите наименование организации: </label>
                <input type={"text"} id={val === 'customer' ?'nameFirm': 'nameFirmOwn'} value={nameFirm} onChange={changeNameFirm} maxLength={30}/>
            </div>
            <div>
                <label>введите адрес организации: </label>
                <input type={"text"} id={val === 'customer' ?'address':'addressOwn'} style={{width: '250px'}}
                       value={address} onChange={changeAddress} maxLength={40}/>
            </div>
            <div>
                <label>введите расчетный счет организации: </label>
                <input type={"text"} id={val === 'customer' ? 'bankAccount' : 'bankAccountOwn'} style={{width: '250px'}}
                       value={bankAccount} onChange={changeBankAccount} maxLength={28}/>
            </div>
        </Modal>
    </div>)
})