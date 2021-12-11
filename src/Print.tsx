import React, {ChangeEvent, useState} from "react";
import css from './print.module.css'



export const ComponentToPrint = React.forwardRef((props, ref:any) => {
    const [unp, setUnp] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [editMode, setEditMode] = useState<boolean>(false)
    const addUnpInput = (e:ChangeEvent<HTMLInputElement>) => {
        setEditMode(true)
        setUnp(e.target.value)
    }
    const addNameInput = (e:ChangeEvent<HTMLInputElement>) => {
        setEditMode(true)
        setName(e.target.value)
    }
    //margin: 200mm !important
    return (<div >
            <style type="text/css" media="print">{'@media print { body { -webkit-print-color-adjust: exact; } @page { size: A4;  }}'}</style>
                <label >введите УНП </label>
            <input type={"text"} value={unp} onChange={addUnpInput} onBlur={()=>{setEditMode(false)}}/>

            <div>
                <label >введите наименование организации </label>
            <input type={"text"} value={name} onChange={addNameInput} onBlur={()=>{setEditMode(false)}}/>
            </div>


        <div ref={ref} className={css.grid}>
            <div className={css.cell_1}>АКТ выполненных работ</div>
            <div className={css.cell_3}>№123</div>
            <div className={css.cell}> Заказчик: {!editMode && unp} {!editMode && name} </div>
            <div className={css.cell}></div>
            <div className={css.cell}></div>
            <div className={css.cell}></div>
            <div className={css.cell}></div>
            <div className={css.cell}></div>
            <div className={css.cell}></div>
            <div className={css.cell}></div>
            <div className={css.cell}> Исполнитель: {!editMode && unp}</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div className={css.cell}></div>
            <div className={css.cell}></div>
            <div className={css.table}> Наименование услуги (работы) </div>
            <div className={css.table_2}> Ед. изм. </div>
            <div className={css.table_2}> Количество </div>
            <div className={css.table_2}> Цена за ед, бел.руб </div>
            <div className={css.table_2}> Стоимость без НДС, бел.руб </div>
            <div className={css.table_2}> НДС, % </div>
            <div className={css.table_3}> Стоимость с НДС, бел.руб</div>
        </div>
            <div className={css.cell}>YYY</div>

    </div>
    );
});