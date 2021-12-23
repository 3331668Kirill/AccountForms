import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ComponentToPrint } from '../Print';
import css from './form.module.css'


export const Form = () => {
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className={css.form}>
            <ComponentToPrint ref={componentRef} val={'act_form'}/>
            {/*<ComponentToPrint ref={componentRef} val={''}/>*/}
            <button style={{width:'150px', height: '125px', backgroundColor:'yellow'}} onClick={handlePrint}>Распечатать или сохранить в файл</button>
        </div>
    );
};