import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ComponentToPrint } from '../Print';
import css from './form.module.css'

type TypeFormProps = {
    form: string
}

export const Form = ({form}:TypeFormProps) => {
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className={css.form}>
             <button style={{margin: "20px 20px", width:'150px', height: '70px', backgroundColor:'yellow'}}
                                          onClick={handlePrint}>Распечатать или сохранить в файл</button>
           <div>
            {form === 'act_form' && <ComponentToPrint ref={componentRef} val={'act_form'}/>}
            {form === 'invoice_form' && <ComponentToPrint ref={componentRef} val={'invoice_form'}/>}</div>


        </div>
    );
};