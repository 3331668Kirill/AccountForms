import React from 'react';
import css from "../../printTTN.module.css";
import {chunkArray} from "../../utils/chunkArray";

type TypeFormToPrintTTN = {

    rawTTN:Array<string | number | null >
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
    totalOfString: string
    raw: Array<string | number | null>
    endRaw: Array<string | number | null>
    arrDiv: Array<any>
}

export const FormToPrintTTN = React.memo(({
                                              docDate, raw, endRaw, rawTTN,
                                              dateStr, nameFirm, nameFirmOwn, address, addressOwn, arrDiv, vat,
                                              unp, unpOwn, bankAccount, bankAccountOwn, totalOfString
                                          }: TypeFormToPrintTTN) => {
    console.log("render FormToPrintTTN")


    let newRawTTN = chunkArray(rawTTN, 11);
    console.log(newRawTTN);


    return (
        <div>

            <div className={css.unp_string}>
                 <span className={css.unp_1}>
                 {unp}
                 </span>
                <span className={css.unp_1}>
                      {unpOwn}
                    </span>
                <span className={css.unp_2}> </span>


            </div>
            <div className={css.date}>{docDate && dateStr}</div>
            <div className={css.auto}>
                <span>Автомобиль</span>
                <span>______________</span>
                <span>Прицеп</span>
                <span>_______________</span>
                <span>К путевому листу</span>
                <span>_______________</span>
            </div>


            <table>
                <tr className={css.up}>
                    <th>Наименование товара</th>
                    <th>Еденица измерения</th>
                    <th>Количество</th>
                    <th>Цена, руб.</th>
                    <th>Стоиомость, руб.</th>
                    <th>НДС, %</th>
                    <th>Сумма НДС, руб</th>
                    <th>Стоимость с НДС, руб.</th>
                    <th>Количество грузовых мест</th>
                    <th>Масса груза</th>
                    <th>Примечание</th>

                </tr>
                <tr className={css.up}>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>

                </tr>

                {newRawTTN.map((ts)=>{
                    return ( <tr> {ts.map((t, index) => {

                    return (
                            <td key={index} > {t} </td>
                    )
                })
                }

                </tr>)})}
                <tr>
                    {endRaw.map((t, index) => {
                        return (
                            <td key={index} className={t !== null ? css.table_4 : css.table_5}> {t} </td>
                        )
                    })
                    }
                </tr>


            </table>


            {/* <div className={css.cell}> 1111 </div>*/}
            {/* <div className={css.cell}> 2222 </div>*/}
            {/* <div>{unp}</div>*/}
            {/* <div>{unpOwn}</div>*/}
            {/* <div>   </div>*/}
            {/* <div className={css.cell}>{docDate && dateStr}</div>*/}
            {/* <div className={css.cell}> </div>*/}
            {/* <div*/}
            {/*     className={css.customer}> Заказчик: <span>{nameFirm}*/}
            {/*     <div>юр. адрес: {address}</div>*/}

            {/*         <div> р/с: {bankAccount}</div>*/}
            {/*         </span></div>*/}
            {/*{arrDiv.map(t => t)}*/}
            {/* <div className={css.cell}> Исполнитель: <span>{nameFirmOwn}*/}
            {/*     <div>юр. адрес: {addressOwn}</div>*/}

            {/*         <div> р/с: {bankAccountOwn}</div>*/}
            {/*         </span>*/}
            {/* </div>*/}
            {/* {arrDiv.map(t => t)}*/}
            {/* <div className={css.table}> Наименование услуги (работы)</div>*/}
            {/* <div className={css.table_2}> Ед. изм.</div>*/}
            {/* <div className={css.table_2}> Количество</div>*/}
            {/* <div className={css.table_2}> Цена за ед, бел.руб</div>*/}
            {/* <div className={css.table_2}> Стоимость без НДС, бел.руб</div>*/}
            {/* <div className={css.table_2}> НДС, %</div>*/}
            {/* <div className={css.table_2}> Стоимость с НДС, бел.руб</div>*/}
            {/* <div className={css.table_5}> </div>*/}
            {/* {raw.map((t, index) => {*/}
            {/*     return (*/}
            {/*         <div key={index} className={t !== null ? css.table_4 : css.table_5}> {t} </div>*/}
            {/*     )*/}
            {/* })*/}
            {/* }*/}
            {/* {endRaw.map((t, index) => {*/}
            {/*     return (*/}
            {/*         <div key={index} className={t !== null ? css.table_4 : css.table_5}> {t} </div>*/}
            {/*     )*/}
            {/* })*/}
            {/* }*/}
            {/* <div className={css.cell_4}>*/}

            {/*     <div className={css.total_of_string}>*/}
            {/*         ИТОГО К ОПЛАТЕ: {totalOfString}, в т.ч. НДС: {vat}% - {// @ts-ignore*/}
            {/*         endRaw[6] !== null && vat !== 'Без НДС' ? (endRaw[6] * (+vat) / (100 + +vat)).toFixed(2) : '0'} руб.*/}
            {/*         {nameOfForm === 'act_form' &&  <div className={css.cell_7}> Настоящий акт составлен в том, что Исполнитель выполнил в срок и сдал*/}
            {/*             Заказчику, указанные выше работы (услуги).*/}
            {/*             <div>Заказчик и исполнитель друг к другу претензий не имеют.*/}
            {/*             </div>*/}
            {/*         </div>}*/}
            {/*     </div>*/}
            {/*     {nameOfForm === 'act_form' && <span>Заказчик ________________</span>}*/}
            {/* </div>*/}
            {/* {arrDiv.map(t => t)}*/}
            {/* <div className={css.cell_6}>Исполнитель____________________*/}
            {/* </div>*/}

        </div>

    )
})

