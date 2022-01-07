import css from "../print.module.css";
import React, {ChangeEvent} from "react";

interface TypePropsFormRequisitesAct {
    docNumber: string | number
    docDate: string | number
    service: string | number
    quantity: string | number
    unit: string | number
    price: string | number
    vat: string | number
    changeDocNumber: (e: ChangeEvent<HTMLInputElement>) => void
    changeDocDate: (e: ChangeEvent<HTMLInputElement>) => void
    changeUnit: (e: ChangeEvent<HTMLInputElement>) => void
    changeService: (e: ChangeEvent<HTMLInputElement>) => void
    changeQuantity: (e: ChangeEvent<HTMLInputElement>) => void
    changePrice: (e: ChangeEvent<HTMLInputElement>) => void
    changeVat: (e: ChangeEvent<HTMLInputElement>) => void
    clearButton: () => void
}

export const FormRequisitesAct = React.memo(({
                                                 docNumber, changeDocNumber, service, vat, changeVat, docDate,
                                                 changeQuantity, quantity, changePrice, price,
                                                 changeService, unit, changeUnit, changeDocDate, clearButton,
                                             }: TypePropsFormRequisitesAct) => {

    console.log("render Act")
    return (<div>
            <div className={css.input_fields}>
                <div className={css.input_field}>
                    <label className={css.label}>введите дату документа: </label>
                    <input type={"date"} id={'docDate'}
                           className={css.input}
                           value={docDate}
                           onChange={changeDocDate}
                    />
                </div>
                <div className={css.input_field}>
                    <label className={css.label}>введите номер документа: </label>
                    <input type={"text"} id={'docNumber'}
                           className={css.input}
                           value={docNumber}
                           onChange={changeDocNumber}
                           maxLength={9}/>
                </div>
                <div className={css.input_field}>
                    <label className={css.label}>введите наименование услуги (товара): </label>
                    <input type={"text"} className={service === '' ? css.service : css.input}
                           id={'service'} value={service} onChange={changeService}/>
                </div>
                <div className={css.input_field}>
                    <label className={css.label}>введите единицу измерения: </label>
                    <input type={"text"} id={'unit'}
                           className={css.input}
                           value={unit} onChange={changeUnit} maxLength={3}/>
                </div>
                <div className={css.input_field}>
                    <label className={css.label}>введите количество: </label>
                    <input type={"text"} id={'quantity'} className={quantity === '' ? css.service : css.input}
                           value={quantity} onChange={changeQuantity}/>
                </div>
                <div className={css.input_field}>
                    <label className={css.label}>введите цену: </label>
                    <input type={"text"} id={'price'} className={price === '' ? css.service : css.input}
                           value={price} onChange={changePrice}/>
                </div>
                <div className={css.input_field}>
                    <label className={css.label}>введите НДС %: </label>
                    <input list={"vat-list"} id={'vat'} value={vat}
                           className={css.input}
                           onChange={changeVat}/>
                </div>
                <datalist id="vat-list">
                    <option value="20"/>
                    <option value="10"/>
                    <option value="0"/>
                    <option value="Без НДС"/>

                </datalist>




            </div>
            <button className={css.button} onClick={clearButton}> Очистить поля ввода</button>
        </div>

    )
})