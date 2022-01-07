import React, {Dispatch} from "react";
import "./modal.css"

type ModalPropsType = {
    active:boolean
    setActive:Dispatch<boolean>
    children:React.ReactChild | React.ReactNode
}


export const Modal = ({active, setActive, children}:ModalPropsType) =>{

    return (
        <div className={active?'modal active':'modal'} onClick={()=>setActive(false)}>
        <div className={active?'modal_content active':'modal_content'} onClick={(e)=>e.stopPropagation()}>
            {children}

        </div>
        </div>
    )
}