import React, {ChangeEvent, useCallback, useEffect, useMemo, useState} from "react";
import css from './print.module.css'
import {FormRequisitesFirm} from "./FormRequisitesFirm";
import {useInput, useInputNum} from "./utils/useInput";

export const ComponentToPrint = React.forwardRef((props, ref: any) => {
    let initialRaw: Array<string | number | null> = []
    const [editMode, setEditMode] = useState<boolean>(true)
    const [raw, setRaw] = useState<Array<string | number | null>>(initialRaw)
    const [endRaw, setEndRaw] = useState<Array<string | number | null>>([])
    const [total, setTotal] = useState<number>(0)
    const docNumber = useInput('')
    const service = useInput('')
    const unit = useInput('')
    const nameFirm = useInput('')
    const address = useInput('')
    const bankAccount = useInput('')
    const price = useInputNum('')
    const quantity = useInputNum('')
    const unp = useInputNum('')
    const vat = useInputNum('20')

    let cost = +(+quantity.value * +price.value).toFixed(2)
    let costVat = +(cost * +vat.value / 100).toFixed(2)

    useEffect(() => {
        setEndRaw(['', '', '', '', '', 'Итого:', total < 0 ? 0 : +total.toFixed(2), null])
    }, [raw, total])

    const ok = useMemo(() => () => {

            if (service.value !== '' && price.value !== '' && quantity.value !== '') {
                let copyRaw = [...raw]
                setRaw([...copyRaw, service.value, unit.value,
                    quantity.value, price.value, cost, vat.value, +costVat.toFixed(2) + +cost.toFixed(2), null])
                setTotal(t => +t.toFixed(2) + +costVat.toFixed(2) + +cost.toFixed(2))
            }
            setEditMode(false)
            unit.reset('')
            price.reset('')
            quantity.reset('')
            service.reset('')
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

            <FormRequisitesFirm bankAccount={bankAccount.value}
                                changeBankAccount={useCallback(bankAccount.onChange,[bankAccount.value])}
                                nameFirm={nameFirm.value}
                                address={address.value}
                                changeAddress={useMemo(()=>address.onChange,[address.value])}
                                changeUnp={useMemo(()=>unp.onChange,[unp.value])}
                                changeNameFirm={useMemo(()=>nameFirm.onChange,[nameFirm.value])}
                                unp={unp.value}
            />
            <div>
                <label>введите номер документа: </label>
                <input type={"text"} id={'docNumber'}
                       value={docNumber.value}
                       onChange={docNumber.onChange}
                       maxLength={9}/>
            </div>
            <label>введите наименование услуги: </label>
            <input type={"text"} className={!editMode && service.value === '' ? css.service : ''}
                   id={'service'} value={service.value} onChange={service.onChange}/>
            <label>введите ед изм: </label>
            <input type={"text"} id={'unit'} value={unit.value} onChange={unit.onChange} maxLength={3}/>
            <label>введите кол-во: </label>
            <input type={"text"} id={'quantity'} value={quantity.value} onChange={quantity.onChange}/>
            <label>введите цену: </label>
            <input type={"text"} id={'price'} value={price.value} onChange={price.onChange}/>
            <label>введите НДС %: </label>
            <input type={"text"} id={'vat'} value={vat.value} onChange={vat.onChange}/>

            <button onClick={ok}> OK</button>
            <button onClick={deleteRaw}> Удалить строку</button>


            <div ref={ref} className={css.grid}>
                <div className={css.cell_1}>АКТ выполненных работ</div>
                <div className={css.cell_3}>№{!editMode && docNumber.value} от 11 декабря 2021 года</div>
                <div className={css.cell_5}>г.Минск</div>
                <div
                    className={css.cell}> Заказчик: {!editMode && nameFirm.value}
                    УНП:{!editMode && unp.value}
                    р/с:{!editMode && bankAccount.value} </div>
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
                <div className={css.table_5}> </div>
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