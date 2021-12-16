import React, {useCallback, useEffect, useMemo, useState} from "react";
import css from './print.module.css'
import {FormRequisitesFirm} from "./FormRequisitesFirm";
import {useInput, useInputNum} from "./utils/useInput";
import {FormRequisitesAct} from "./FormRequisitesAct";

export const ComponentToPrint = React.forwardRef((props, ref: any) => {
    let initialRaw: Array<string | number | null> = []
    const [active, setActive] = useState<boolean>(false)
    const [raw, setRaw] = useState<Array<string | number | null>>(initialRaw)
    const [endRaw, setEndRaw] = useState<Array<string | number | null>>([])
    const [total, setTotal] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    const docNumber = useInput('')
    const docDate = useInput('')
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
        setError(true)
            if (service.value !== '' && price.value !== '' && quantity.value !== '') {
                let copyRaw = [...raw]
                setRaw([...copyRaw, service.value, unit.value,
                    quantity.value, price.value, cost, vat.value, +(+costVat + +cost).toFixed(2), null])
                setTotal(t => +t.toFixed(2) + +costVat.toFixed(2) + +cost.toFixed(2))
                unit.reset('')
                price.reset('')
                quantity.reset('')
                service.reset('')
                setError(false)
            }

            setActive(false)

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
    const fillFormAct = () => {
        setActive(true)
    }

    let arrDiv = []
    for (let i = 0; i <= 6; i++) {
        arrDiv[i] = <div key={i} className={css.cell}></div>
    }

    let date = docDate.value.toString()
    let dateStr = `${date[8]}${date[9]}.${date[5]}${date[6]}.${date[0]}${date[1]}${date[2]}${date[3]}`

    return (<div>
            <style type="text/css"
                   media="print">{'@media print { body { -webkit-print-color-adjust: exact; } ' +
            '@page { size: A4; margin-left: 15mm !important }}'}</style>

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
                               active={active}
                               changeDocNumber={docNumber.onChange}
                               changeService={service.onChange}
                               changeUnit={unit.onChange}
                               changeQuantity={quantity.onChange}
                               changePrice={price.onChange}
                               changeVat={vat.onChange}
                               changeDocDate={docDate.onChange}
                               ok={ok}
                               service={service.value}
                               docDate={docDate.value}
                               vat={vat.value}
                               price={price.value}
                               quantity={quantity.value}
                               unit={unit.value}

            />
            {!active && <div>
                <button onClick={fillFormAct} style={{margin: "10px 20px", padding: "20px", fontSize: "1rem"}}> АКТ
                </button>
                <button onClick={deleteRaw}> Удалить строку</button>
            </div>}
            { error && <h3 style={{color:'red'}}>"Поля выделенные красным обязательны для заполнения!!!"</h3>}
            <div ref={ref} className={css.grid}>
                <div className={css.cell_1}>АКТ выполненных работ</div>
                {!active &&<div className={css.cell_3}>№{docNumber.value} от {docDate.value && dateStr}</div>}
                <div className={css.cell_5}>г.Минск</div>
                <div
                    className={css.customer}> Заказчик: <span>{!active && nameFirm.value}
                    <div>юр. адрес: {!active && address.value}</div>
                    <div>УНП: {!active && unp.value}</div>

                    <div> р/с: {!active && bankAccount.value}</div>
                    </span> </div>
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
                <div className={css.cell_4}> Заказчик ________________</div>
                <div></div>
                <div className={css.cell_4}> Исполнитель_______________</div>
            </div>


        </div>
    );
});