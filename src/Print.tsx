import React, {useCallback, useEffect, useState} from "react";
import css from './print.module.css'
import {FormRequisitesFirm} from "./components/Forms/FormRequisitesFirm";
import {useInput, useInputNum} from "./utils/useInput";
import {FormRequisitesAct} from "./components/Forms/FormRequisitesAct";
import {numOfString} from "./utils/numOfStr";
import {FormToPrintAct} from "./components/Forms/FormToPrintAct";

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

    let arrDiv: Array<any> = []
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
            <div>
                <button onClick={addStrInTable}> Добавить в таблицу</button>
                <button onClick={deleteRaw}> Удалить строку</button>
            </div>
            {error && <p style={{color: 'red'}}>"Поля выделенные красным обязательны для заполнения!!!"</p>}
            <style type="text/css"
                   media="print">{'@media print { body { -webkit-print-color-adjust: exact; } ' +
            '@page { size: A4; margin-left: 15mm !important }}'}</style>
            <div ref={ref}>
                <FormToPrintAct docNumber={docNumber.value}
                                docDate={docDate.value}
                                dateStr={dateStr}
                                raw={raw}
                                endRaw={endRaw}
                                arrDiv={arrDiv}
                                totalOfString={totalOfString}
                                address={address.value}
                                bankAccount={bankAccount.value}
                                nameFirm={nameFirm.value}
                                unp={unp.value}
                />

            </div>
        </div>
    );
});