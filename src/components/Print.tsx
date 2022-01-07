import React, {MutableRefObject, useCallback, useEffect, useState} from "react";
import css from './print.module.css'
import {FormRequisitesFirm} from "./Forms/FormRequisitesFirm";
import {useInput, useInputNum} from "../utils/useInput";
import {FormRequisitesAct} from "./Forms/FormRequisitesAct";
import {numOfString} from "../utils/numOfStr";
import {FormToPrintAct} from "./Forms/FormToPrintAct";
import {FormToPrintTTN} from "./Forms/FormToPrintTTN";

type TypeComponentToPrintProps = {
    ref: MutableRefObject<any>
    val: string;
}

export const ComponentToPrint = React.forwardRef((props: TypeComponentToPrintProps, ref: any) => {

    let initialRaw: Array<string | number | null> = []
    const [raw, setRaw] = useState<Array<string | number | null>>(initialRaw)
    const [rawTTN, setRawTTN] = useState<Array<string | number | null>>(initialRaw)
    const [endRaw, setEndRaw] = useState<Array<string | number | null>>([])
    const [endRawTTN, setEndRawTTN] = useState<Array<string | number | null>>([])
    const [total, setTotal] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    const docNumber = useInput('')
    const docDate = useInput('')
    const service = useInput('')
    const unit = useInput('')
    // @ts-ignore
    const nameFirm = useInput(localStorage.getItem('nameFirm'))
    // @ts-ignore
    const nameFirmOwn = useInput(localStorage.getItem('nameFirmOwn'))
    // @ts-ignore
    const address = useInput(localStorage.getItem('address'))
    // @ts-ignore
    const addressOwn = useInput(localStorage.getItem('addressOwn'))
    // @ts-ignore
    const bankAccount = useInput(localStorage.getItem('bankAccount'))
    // @ts-ignore
    const bankAccountOwn = useInput(localStorage.getItem('bankAccountOwn'))
    const price = useInputNum('')
    const quantity = useInputNum('')
    // @ts-ignore
    const unp = useInputNum(localStorage.getItem('unp'))
    // @ts-ignore
    const unpOwn = useInputNum(localStorage.getItem('unpOwn'))
    const vat = useInput('')

    let cost = +(+quantity.value * +price.value).toFixed(2)

    let costVat = vat.value === "Без НДС"
        ? 0
        : +(cost * +vat.value / 100).toFixed(2)


    useEffect(() => {
        setEndRaw(['', '', '', '', '', 'Итого:', total < 0 ? 0 : +total.toFixed(2), null])
        setEndRawTTN(['Итого:', '', '', '', ((total < 0 ? 0 : +total) / 1.2).toFixed(2),
            '', ((total < 0 ? 0 : +total) / 6).toFixed(2), total < 0 ? 0 : +total.toFixed(2), null, null, null])
    }, [raw, total])

    const addStrInTable = () => {
        setError(true)
        if (service.value !== '' && price.value !== '' && quantity.value !== '') {
            let copyRaw = [...raw]
            setRaw([...copyRaw, service.value, unit.value,
                quantity.value, price.value, cost, vat.value, +(+costVat + +cost).toFixed(2), null])

            setRawTTN([...rawTTN, service.value, unit.value, quantity.value,
                price.value, cost, vat.value, costVat, +(+costVat + +cost).toFixed(2), null, null, null])
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
            setRawTTN([...rawTTN].filter((t, i) => i < rawTTN.length - 11))
            let array = raw.filter((t, i) => i >= raw.length - 8)
            // @ts-ignore
            setTotal(t => +t.toFixed(2) - array[6])
        }
    }

    let arrDiv: Array<any> = new Array(7).fill('1').map((t, i) => <div key={i} className={css.cell}></div>)

    let date = docDate.value.toString()
    let dateStr = `${date[8]}${date[9]}.${date[5]}${date[6]}.${date[0]}${date[1]}${date[2]}${date[3]}`

    let totalOfString = endRaw[6] && numOfString(+endRaw[6]).toUpperCase()
    return (<div>

            <div className={css.button_block}>
                <FormRequisitesFirm bankAccount={bankAccount.value}
                                    changeBankAccount={useCallback((e) => bankAccount.onChange(e), [bankAccount.value])}
                                    nameFirm={nameFirm.value}
                                    address={address.value}
                                    changeAddress={useCallback((e) => address.onChange(e), [address.value])}
                                    changeUnp={useCallback((e) => unp.onChange(e), [unp.value])}
                                    changeNameFirm={useCallback((e) => nameFirm.onChange(e), [nameFirm.value])}
                                    unp={unp.value}
                                    val={'customer'}
                />

                <FormRequisitesFirm bankAccount={bankAccountOwn.value}
                                    changeBankAccount={useCallback((e) =>
                                        bankAccountOwn.onChange(e), [bankAccountOwn.value])}
                                    nameFirm={nameFirmOwn.value}
                                    address={addressOwn.value}
                                    changeAddress={useCallback((e) =>
                                        addressOwn.onChange(e), [addressOwn.value])}
                                    changeUnp={useCallback((e) =>
                                        unpOwn.onChange(e), [unpOwn.value])}
                                    changeNameFirm={useCallback((e) =>
                                        nameFirmOwn.onChange(e), [nameFirmOwn.value])}
                                    unp={unpOwn.value}
                                    val={'executor'}
                />
                <div className={css.form_req}>
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
                        <button className={css.button} onClick={addStrInTable}> Добавить в таблицу</button>
                        <button className={css.button} onClick={deleteRaw}> Удалить строку из таблицы</button>
                    </div>
                    {error && <p style={{color: 'red'}}>"Поля выделенные красным обязательны для заполнения!!!"</p>}
                </div>

            </div>

            <style type="text/css"
                   media="print">{'@media print { body { -webkit-print-color-adjust: exact; } ' +
            '@page { size: A4; margin-left: 15mm !important }}'}</style>
            <div ref={ref}>
                {props.val !== 'ttn_form' && <FormToPrintAct
                    nameOfForm={props.val} docNumber={docNumber.value}
                    docDate={docDate.value} dateStr={dateStr}
                    raw={raw} vat={vat.value} endRaw={endRaw}
                    arrDiv={arrDiv} totalOfString={totalOfString}
                    address={address.value} addressOwn={addressOwn.value}
                    bankAccount={bankAccount.value} bankAccountOwn={bankAccountOwn.value}
                    nameFirm={nameFirm.value} nameFirmOwn={nameFirmOwn.value}
                    unp={unp.value} unpOwn={unpOwn.value}
                />}
                {props.val === 'ttn_form' && <FormToPrintTTN
                    rawTTN={rawTTN} endRawTTN={endRawTTN}
                    docDate={docDate.value} dateStr={dateStr}
                    raw={raw} vat={vat.value} endRaw={endRaw}
                    arrDiv={arrDiv} totalOfString={totalOfString}
                    address={address.value} addressOwn={addressOwn.value}
                    bankAccount={bankAccount.value} bankAccountOwn={bankAccountOwn.value}
                    nameFirm={nameFirm.value} nameFirmOwn={nameFirmOwn.value}
                    unp={unp.value} unpOwn={unpOwn.value}
                />}
            </div>
        </div>
    );
});