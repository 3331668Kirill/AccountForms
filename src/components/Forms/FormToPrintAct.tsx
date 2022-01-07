import React from 'react';
import css from "../print.module.css";

type TypeFormToPrintAct = {
    nameOfForm: string
    docNumber: string | number
    docDate: string | number
    dateStr: string
    vat: string
    bankAccount: string
    bankAccountOwn: string
    nameFirm: string
    nameFirmOwn: string
    address: string
    addressOwn: string
    unp: string | number
    unpOwn: string | number
    totalOfString: string | null | 0
    raw: Array<string | number | null>
    endRaw: Array<string | number | null>
    arrDiv: Array<any>
}

export const FormToPrintAct = React.memo(({
                                              nameOfForm, docNumber, docDate, raw, endRaw,
                                              dateStr, nameFirm, nameFirmOwn, address, addressOwn,arrDiv, vat,
                                              unp, unpOwn, bankAccount, bankAccountOwn, totalOfString
                                          }: TypeFormToPrintAct) => {
    console.log("render FormToPrintAct")

    return (
        <div className={css.grid}>

            {nameOfForm === 'act_form' && <div className={css.cell_1}>АКТ выполненных работ</div>}
            {nameOfForm === 'invoice_form' && <div className={css.cell_1}>Счет-фактура</div>}
            <div className={css.cell_3}>№{docNumber} от {docDate && dateStr}</div>
            <div className={css.cell_5}>г.Минск</div>
            <div
                className={css.customer}> Заказчик: <span>{nameFirm}
                <div>юр. адрес: {address}</div>
                    <div>УНП: {unp}</div>
                    <div> р/с: {bankAccount}</div>
                    </span></div>
           {arrDiv.map(t => t)}
            <div className={css.cell}> Исполнитель: <span>{nameFirmOwn}
                <div>юр. адрес: {addressOwn}</div>
                    <div>УНП: {unpOwn}</div>
                    <div> р/с: {bankAccountOwn}</div>
                    </span>
            </div>
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

                <div className={css.total_of_string}>
                    ИТОГО К ОПЛАТЕ: {totalOfString}, в т.ч. НДС: {vat}% - {// @ts-ignore
                    endRaw[6] !== null && vat !== 'Без НДС' ? (endRaw[6] * (+vat) / (100 + +vat)).toFixed(2) : '0'} руб.
                    {nameOfForm === 'act_form' &&  <div className={css.cell_7}> Настоящий акт составлен в том, что Исполнитель выполнил в срок и сдал
                        Заказчику, указанные выше работы (услуги).
                        <div>Заказчик и исполнитель друг к другу претензий не имеют.
                        </div>
                    </div>}
                </div>
                {nameOfForm === 'act_form' && <span>Заказчик ________________</span>}
            </div>
            {arrDiv.map(t => t)}
            <div className={css.cell_6}>Исполнитель____________________
            </div>

        </div>

    )
})

