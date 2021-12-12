import React, {ChangeEvent, useMemo, useState} from "react";
import css from './print.module.css'



export const ComponentToPrint = React.forwardRef((props, ref: any) => {
    let initialRaw: Array<string|number|null> = []
    const [unp, setUnp] = useState<string>('')
    const [nameFirm, setNameFirm] = useState<string>('')
    const [editMode, setEditMode] = useState<boolean>(false)
    const [raw, setRaw] = useState<Array<string|number|null>>(initialRaw)
    const [service, setService] = useState<string>('')
    const [unit, setUnit] = useState<string>('')
    const [quantity, setQuantity] = useState<number>(0)
    const [price, setPrice] = useState<number>(0)
    const [vat, setVat] = useState<number>(20)

    const changeInputElement =  (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.id)
        switch (e.target.id) {
            case 'price':
                return setPrice(+e.target.value)
            case 'quantity':
                return setQuantity(+e.target.value)
            case 'unit':
                return setUnit(e.target.value)
            case 'service':
                return setService(e.target.value)
            case 'nameFirm':
                setEditMode(true)
                return setNameFirm(e.target.value)
            case 'unp':
                setEditMode(true)
                return setUnp(e.target.value)
            case 'vat':
                return setVat(+e.target.value)
            default:
                return null
        }
    }

    const ok = useMemo(() => () => {
        let cost = +(quantity * price).toFixed(2)
        let costVat = +(cost * vat/100).toFixed(2)
            setRaw([...raw,service,unit,quantity,price,cost,vat,+costVat+ +cost,null])
            setEditMode(false)
            setUnit('')
            setPrice(0)
            setQuantity(0)
            setService('')

        }, [raw,quantity, service, unit, price,vat]
    )
    const deleteRaw = () => {
        //[...raw].splice()
        setRaw([...raw].filter((t,i)=> i < raw.length-8))
    }

        let arrDiv = []
        for (let i=0; i<=6;i++) {
            arrDiv[i] = <div className={css.cell}> </div>
    }
    //margin: 200mm !important
    console.log(raw, unp, price)
    return (<div>
            <style type="text/css"
                   media="print">{'@media print { body { -webkit-print-color-adjust: exact; } @page { size: A4}}'}</style>
            <label>введите УНП: </label>
            <input type={"text"} id={'unp'} onChange={changeInputElement} maxLength={9}/>

            <div>
                <label>введите наименование организации: </label>
                <input type={"text"} id={'nameFirm'} value={nameFirm} onChange={changeInputElement}/>
            </div>


            <label>введите наименование услуги: </label>
            <input type={"text"} id={'service'} value={service} onChange={changeInputElement}/>
            <label>введите ед изм: </label>
            <input type={"text"} id={'unit'} value={unit} onChange={changeInputElement} maxLength={3}/>
            <label>введите кол-во: </label>
            <input type={"text"} id={'quantity'} value={quantity} onChange={changeInputElement}/>
            <label>введите цену: </label>
            <input type={"text"} id={'price'} value={price} onChange={changeInputElement}/>
            <label>введите НДС %: </label>
            <input type={"text"} id={'vat'} value={vat} onChange={changeInputElement}/>

            <button onClick={ok}> OK </button>
            <button onClick={deleteRaw}> Удалить строку </button>


            <div ref={ref} className={css.grid}>
                <div className={css.cell_1}>АКТ выполненных работ</div>
                <div className={css.cell_3}>№123 от 11 декабря 2021 года</div>
                <div className={css.cell}> Заказчик: {!editMode && unp} {!editMode && nameFirm} </div>
                { arrDiv.map(t=>t)}
                <div className={css.cell}> Исполнитель: OOO "Kopyta"</div>
                { arrDiv.map(t=>t)}
                <div className={css.table}> Наименование услуги (работы)</div>
                <div className={css.table_2}> Ед. изм.</div>
                <div className={css.table_2}> Количество</div>
                <div className={css.table_2}> Цена за ед, бел.руб</div>
                <div className={css.table_2}> Стоимость без НДС, бел.руб</div>
                <div className={css.table_2}> НДС, %</div>
                <div className={css.table_2}> Стоимость с НДС, бел.руб</div>
                <div className={css.table_5}> </div>
                {raw.map((t,index) => {
                   return (
                        <div key={index} className={t!==null ? css.table_4 : css.table_5}> {t} </div>

                      )
                 })
                }
                {/*{raw.length === 7 && <div className={css.table_5}>333 </div>}*/}
            </div>


        </div>
    );
});