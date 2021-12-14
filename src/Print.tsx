import React, {ChangeEvent, useEffect, useMemo, useState} from "react";
import css from './print.module.css'
import {FormRequisitesFirm} from "./FormRequisitesFirm";


export const ComponentToPrint = React.forwardRef((props, ref: any) => {
    let initialRaw: Array<string | number | null> = []
    const [unp, setUnp] = useState<string>('')
    const [bankAccount, setBankAccount] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [docNumber, setDocNumber] = useState<string>('')
    const [nameFirm, setNameFirm] = useState<string>('')
    const [editMode, setEditMode] = useState<boolean>(true)
    const [raw, setRaw] = useState<Array<string | number | null>>(initialRaw)
    const [endRaw, setEndRaw] = useState<Array<string | number | null>>([])
    const [total, setTotal] = useState<number>(0)
    const [service, setService] = useState<string>('')
    const [unit, setUnit] = useState<string>('')
    const [quantity, setQuantity] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [vat, setVat] = useState<number>(20)

    const changeInputElement = (e: ChangeEvent<HTMLInputElement>) => {

        switch (e.currentTarget.id) {
            case 'price':
                let ePrice = e.currentTarget.value
                if (isFinite(+ePrice)) return setPrice(ePrice)
                return null
            case 'quantity':
                let eQ = e.currentTarget.value
                if (isFinite(+eQ)) return setQuantity(eQ)
                return null
            case 'unit':
                return setUnit(e.currentTarget.value)
            case 'service':
                return setService(e.currentTarget.value)
            case 'nameFirm':
                setEditMode(true)
                return setNameFirm(e.currentTarget.value)
            case 'bankAccount':
                setEditMode(true)
                return setBankAccount(e.currentTarget.value)
            case 'address':
                setEditMode(true)
                return setAddress(e.currentTarget.value)
            case 'unp':
                setEditMode(true)
                let eUnp = e.currentTarget.value
                if (isFinite(+eUnp)) return setUnp(eUnp)
                return null
            case 'docNumber':
                setEditMode(true)
                return setDocNumber(e.currentTarget.value)
            case 'vat':
                return setVat(+e.currentTarget.value)
            default:
                return null
        }

}

    let cost = +(+quantity * +price).toFixed(2)
    let costVat = +(cost * vat / 100).toFixed(2)

    useEffect(() => {
        setEndRaw(['', '', '', '', '', 'Итого:', total < 0 ? 0 : +total.toFixed(2), null])

    }, [raw,total])


    const ok = useMemo(() => () => {
            if (service !== '') {
                let copyRaw = [...raw]
                setRaw([...copyRaw, service, unit, quantity, price, cost, vat, +costVat.toFixed(2) + +cost.toFixed(2), null])
                setTotal(t => +t.toFixed(2) + +costVat.toFixed(2) + +cost.toFixed(2))
            }
            setEditMode(false)
            setUnit('')
            setPrice('')
            setQuantity('')
            setService('')


        }, [raw, quantity, service, unit, price, vat, cost, costVat]
    )

    const deleteRaw = () => {
        if (raw.length >= 8) {
            setRaw([...raw].filter((t, i) => i < raw.length - 8))
            let array = raw.filter((t, i) => i >= raw.length - 8)
            // @ts-ignore
            setTotal(t => +t.toFixed(2) - array[6])
        }
    }

    let arrDiv = []
    for (let i = 0; i <= 6; i++) {
        arrDiv[i] = <div className={css.cell}> </div>
    }



    return (<div>
            <style type="text/css"
                   media="print">{'@media print { body { -webkit-print-color-adjust: exact; } ' +
            '@page { size: A4; margin-left: 15mm !important }}'}</style>

            <FormRequisitesFirm bankAccount={bankAccount}
                                nameFirm={nameFirm}
                                address={address}
                                changeInputElement={changeInputElement}
                                unp={unp}/>
            <div>
                <label>введите номер документа: </label>
                <input type={"text"} id={'docNumber'} onChange={changeInputElement} maxLength={9}/>
            </div>
            <label>введите наименование услуги: </label>
            <input type={"text"} className={!editMode && service === '' ? css.service : ''} id={'service'}
                   value={service} onChange={changeInputElement}/>
            <label>введите ед изм: </label>
            <input type={"text"} id={'unit'} value={unit} onChange={changeInputElement} maxLength={3}/>
            <label>введите кол-во: </label>
            <input type={"text"} id={'quantity'} value={quantity} onChange={changeInputElement}/>
            <label>введите цену: </label>
            <input type={"text"} id={'price'} value={price} onChange={changeInputElement}/>
            <label>введите НДС %: </label>
            <input type={"text"} id={'vat'} value={vat} onChange={changeInputElement}/>

            <button onClick={ok}> OK</button>
            <button onClick={deleteRaw}> Удалить строку</button>


            <div ref={ref} className={css.grid}>
                <div className={css.cell_1}>АКТ выполненных работ</div>
                <div className={css.cell_3}>№{!editMode && docNumber} от 11 декабря 2021 года</div>
                <div className={css.cell_5}>г.Минск</div>
                <div
                    className={css.cell}> Заказчик: {!editMode && nameFirm} УНП:{!editMode && unp} р/с:{!editMode && bankAccount} </div>
                {arrDiv.map(t => t)}
                <div className={css.cell}> Исполнитель: OOO "Kopyta"</div>
                {arrDiv.map(t => t)}
                <div className={css.table}> Наименование услуги (работы)</div>
                <div className={css.table_2}> Ед. изм.</div>
                <div className={css.table_2}> Количество</div>
                <div className={css.table_2}> Цена за ед, бел.руб</div>
                <div className={css.table_2}> Стоимость без НДС, бел.руб</div>
                <div className={css.table_2}> НДС, %</div>
                <div className={css.table_2}> Стоимость с НДС, бел.руб</div>
                <div className={css.table_5}></div>
                {raw.map((t, index) => {
                    return (
                        <div key={index} className={t !== null ? css.table_4 : css.table_5}> {t} </div>

                    )
                })
                }
                {endRaw.map((t, index) => {
                    return (
                        <div key={index} className={t !== null ? css.table_4 : css.table_5}> {t} </div>

                    )
                })
                }
                <div className={css.cell_4}>Заказчик ________________</div>
                <div></div>
                <div className={css.cell_4}> Исполнитель_______________</div>

            </div>


        </div>
    );
});