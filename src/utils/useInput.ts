import {ChangeEvent, useState} from "react";


export function useInput(initialValue:string){
    const [value,setValue] = useState(initialValue)

    const onChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setValue(e.currentTarget.value)
        localStorage.setItem(e.currentTarget.id, e.currentTarget.value)
    }
    const reset = (e:string) => {
      setValue(e)
    }

    return {
        value,
        onChange,
        reset
    }
}

export function useInputNum(initialValue:string|number){
    const [value,setValue] = useState(initialValue)

    const onChange = (e:ChangeEvent<HTMLInputElement>) =>{
        localStorage.setItem(e.currentTarget.id, e.currentTarget.value)
        let ev = e.currentTarget.value
        if (isFinite(+ev)) return setValue(ev)
        return null
    }
    const reset = (e:string) => {
        setValue(e)
    }
    return {
        value,
        onChange,
        reset
    }
}