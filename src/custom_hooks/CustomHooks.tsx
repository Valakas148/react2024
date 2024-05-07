import {useEffect, useRef, useState} from "react";



export const useToggle = <T, >(inputval:boolean) => {

    const [value,setValue] = useState<boolean>(inputval)

    const changeVal = () =>{
        if(value){
            setValue(false)
        }else {setValue(true)}
    }

    return {value, changeVal}
}


export const usePrevious = <T, >(value:T) =>{
    const previousValue = useRef<T | undefined>()


    useEffect(() => {
        previousValue.current = value;
    }, [value]);


    return previousValue.current
}


export const useStorage = <T,>(key:any, init:T) =>{

    const [valueToLS, setValueToLS] = useState([init])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(valueToLS))
    }, [key,valueToLS]);

    return valueToLS
}