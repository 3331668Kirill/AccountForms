import css from "./print.module.css";
import React, {ChangeEvent} from "react";

interface TypePropsFormRequisitesAct {
    docNumber: string | number
    docDate: string | number
    service: string | number
    quantity: string | number
    unit: string | number
    price: string | number
    vat: string | number
    active: boolean
    changeDocNumber: (e: ChangeEvent<HTMLInputElement>) => void
    changeDocDate: (e: ChangeEvent<HTMLInputElement>) => void
    changeUnit: (e: ChangeEvent<HTMLInputElement>) => void
    changeService: (e: ChangeEvent<HTMLInputElement>) => void
    changeQuantity: (e: ChangeEvent<HTMLInputElement>) => void
    changePrice: (e: ChangeEvent<HTMLInputElement>) => void
    changeVat: (e: ChangeEvent<HTMLInputElement>) => void
    ok: () => void
}

export const FormRequisitesAct = ({
                                      docNumber, changeDocNumber, service, vat, changeVat, docDate,
                                      changeQuantity, quantity, changePrice, price, ok, active,
                                      changeService, unit, changeUnit, changeDocDate,
                                  }: TypePropsFormRequisitesAct) => {


    return (<div>
            {active && <div>
                <div>
                    <label>введите дату документа: </label>
                    <input type={"date"} id={'docDate'}
                           value={docDate}
                           onChange={changeDocDate}
                           />
                </div>
                <div>
                    <label>введите номер документа: </label>
                    <input type={"text"} id={'docNumber'}
                           value={docNumber}
                           onChange={changeDocNumber}
                           maxLength={9}/>
                </div>
                <div>
                    <label>введите наименование услуги: </label>
                    <input type={"text"} className={service === '' ? css.service : ''}
                           id={'service'} value={service} onChange={changeService}/>
                </div>
                <div>
                    <label>введите ед изм: </label>
                    <input type={"text"} id={'unit'} value={unit} onChange={changeUnit} maxLength={3}/>
                </div>
                <div>
                    <label>введите кол-во: </label>
                    <input type={"text"} id={'quantity'} className={service === '' ? css.service : ''}
                           value={quantity} onChange={changeQuantity}/>
                </div>
                <div>
                    <label>введите цену: </label>
                    <input type={"text"} id={'price'} className={service === '' ? css.service : ''}
                           value={price} onChange={changePrice}/>
                </div>
                <div>
                    <label>введите НДС %: </label>
                    <input type={"text"} id={'vat'} value={vat} onChange={changeVat}/>
                </div>
                <button onClick={ok}> Добавить в таблицу </button>

            </div>
            }
        </div>

    )
}