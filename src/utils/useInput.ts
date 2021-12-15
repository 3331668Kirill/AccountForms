import {ChangeEvent, useState} from "react";


export function useInput(initialValue:string|number){
    const [value,setValue] = useState(initialValue)

    const onChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setValue(e.currentTarget.value)
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