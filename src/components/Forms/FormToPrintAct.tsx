import React from 'react';
import css from "../../print.module.css";

type TypeFormToPrintAct={
    docNumber: string | number
    docDate: string | number
    dateStr: string
    bankAccount: string
    nameFirm: string
    address: string
    unp: string|number
    totalOfString: string
    raw:Array<string | number | null>
    endRaw :Array<string | number | null>
    arrDiv: Array<any>
}

export const FormToPrintAct = React.memo(({ docNumber, docDate, raw, endRaw,
                                   dateStr,nameFirm,address, arrDiv,
                                   unp,bankAccount, totalOfString}:TypeFormToPrintAct) => {
    console.log("render FormToPrintAct")
    return (
        <div className={css.grid}>

                <div className={css.cell_1}>АКТ выполненных работ</div>
                <div className={css.cell_3}>№{docNumber} от {docDate && dateStr}</div>
                <div className={css.cell_5}>г.Минск</div>
                <div
                    className={css.customer}> Заказчик: <span>{nameFirm}
                    <div>юр. адрес: {address}</div>
                    <div>УНП: {unp}</div>
                    <div> р/с: {bankAccount}</div>
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
                <div className={css.cell_4}>
                    <div className={css.total_of_string}>ИТОГО К ОПЛАТЕ: {totalOfString}</div>
                    Заказчик ________________
                </div>
                <div> </div>
                <div className={css.cell_6}>

                    Исполнитель_______________
                </div>
            </div>

    )
})

