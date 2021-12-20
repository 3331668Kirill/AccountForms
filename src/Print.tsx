import React, {useCallback, useEffect, useState} from "react";
import css from './print.module.css'
import {FormRequisitesFirm} from "./FormRequisitesFirm";
import {useInput, useInputNum} from "./utils/useInput";
import {FormRequisitesAct} from "./FormRequisitesAct";
import {numOfString} from "./utils/numOfStr";

export const ComponentToPrint = React.forwardRef((props, ref: any) => {
    let initialRaw: Array<string | number | null> = []
    const [raw, setRaw] = useState<Array<string | number | null>>(initialRaw)
    const [endRaw, setEndRaw] = useState<Array<string | number | null>>([])
    const [total, setTotal] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    const docNumber = useInput('')
    const docDate = useInput('')
    const service = useInput('')
    const unit = useInput('')
    // @ts-ignore
    const nameFirm = useInput(localStorage.getItem('nameFirm'))
    // @ts-ignore
    const address = useInput(localStorage.getItem('address'))
    // @ts-ignore
    const bankAccount = useInput(localStorage.getItem('bankAccount'))
    const price = useInputNum('')
    const quantity = useInputNum('')
    // @ts-ignore
    const unp = useInputNum(localStorage.getItem('unp'))
    const vat = useInput('')

    let cost = +(+quantity.value * +price.value).toFixed(2)

    let costVat = vat.value === "Без НДС"
        ? 0
        : +(cost * +vat.value / 100).toFixed(2)


    useEffect(() => {
        setEndRaw(['', '', '', '', '', 'Итого:', total < 0 ? 0 : +total.toFixed(2), null])
    }, [raw, total])

    const addStrInTable = () => {
        setError(true)
        if (service.value !== '' && price.value !== '' && quantity.value !== '') {
            let copyRaw = [...raw]
            setRaw([...copyRaw, service.value, unit.value,
                quantity.value, price.value, cost, vat.value, +(+costVat + +cost).toFixed(2), null])
            setTotal(t => +t.toFixed(2) + +costVat.toFixed(2) + +cost.toFixed(2))
            setError(false)
        }
    }

    const clearButton = useCallback(() => {
        unit.reset('')
        price.reset('')
        quantity.reset('')
        service.reset('')
        vat.reset('')
        setError(false)
    }, [unit.value, price.value, quantity.value, service.value])

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
        arrDiv[i] = <div key={i} className={css.cell}></div>
    }

    let date = docDate.value.toString()
    let dateStr = `${date[8]}${date[9]}.${date[5]}${date[6]}.${date[0]}${date[1]}${date[2]}${date[3]}`
    // @ts-ignore
    let totalOfString = numOfString(endRaw[6]).toUpperCase()
    return (<div>


            <FormRequisitesFirm bankAccount={bankAccount.value}
                                changeBankAccount={useCallback((e) => bankAccount.onChange(e), [bankAccount.value])}
                                nameFirm={nameFirm.value}
                                address={address.value}
                                changeAddress={useCallback((e) => address.onChange(e), [address.value])}
                                changeUnp={useCallback((e) => unp.onChange(e), [unp.value])}
                                changeNameFirm={useCallback((e) => nameFirm.onChange(e), [nameFirm.value])}
                                unp={unp.value}
            />
            <FormRequisitesAct docNumber={docNumber.value}
                               changeDocNumber={useCallback((e) => docNumber.onChange(e), [docNumber.value])}
                               changeService={useCallback((e) => service.onChange(e), [service.value])}
                               changeUnit={useCallback((e) => unit.onChange(e), [unit.value])}
                               changeQuantity={useCallback((e) => quantity.onChange(e), [quantity.value])}
                               changePrice={useCallback((e) => price.onChange(e), [price.value])}
                               changeVat={useCallback((e) => vat.onChange(e), [vat.value])}
                               changeDocDate={useCallback((e) => docDate.onChange(e), [docDate.value])}
                               clearButton={clearButton}
                               service={service.value}
                               docDate={docDate.value}
                               vat={vat.value}
                               price={price.value}
                               quantity={quantity.value}
                               unit={unit.value}

            />
            {<div>
                <button onClick={addStrInTable}> Добавить в таблицу</button>
                <button onClick={deleteRaw}> Удалить строку</button>
            </div>}
            {error && <p style={{color: 'red'}}>"Поля выделенные красным обязательны для заполнения!!!"</p>}
            <style type="text/css"
                   media="print">{'@media print { body { -webkit-print-color-adjust: exact; } ' +
            '@page { size: A4; margin-left: 15mm !important }}'}</style>
            <div ref={ref} className={css.grid}>
                <div className={css.cell_1}>АКТ выполненных работ</div>
                <div className={css.cell_3}>№{docNumber.value} от {docDate.value && dateStr}</div>
                <div className={css.cell_5}>г.Минск</div>
                <div
                    className={css.customer}> Заказчик: <span>{nameFirm.value}
                    <div>юр. адрес: {address.value}</div>
                    <div>УНП: {unp.value}</div>
                    <div> р/с: {bankAccount.value}</div>
                    </span></div>
                {arrDiv.map(t => t)}
                <div className={css.cell}> Исполнитель: OOO "РОГА И КОПЫТА"</div>
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
                <div className={css.cell_4}>
                    <div className={css.total_of_string}>ИТОГО К ОПЛАТЕ: {totalOfString}</div>
                    Заказчик ________________
                </div>
                <div></div>
                <div className={css.cell_6}>

                    Исполнитель_______________
                </div>
            </div>


        </div>
    );
});