import React, {FC} from 'react';
import {IPaginationModel} from "../models/IPaginationModel";
import {useSearchParams} from "react-router-dom";


type IProps={
    prev: IPaginationModel | null;
    next: IPaginationModel | null;
}

const PaginationComponent:FC<IProps> = ({prev,next}) => {

    const [query, setQuery] = useSearchParams({page:'1'})

    const onChange = (page:string)=>{
        switch (page){
            case 'prev':
                setQuery({...prev})
                break;
            case 'next':
                setQuery({...next})
                break
        }
    }


    return (
        <div>
            <button onClick={() =>{
                onChange('prev')
            }}
                    disabled={!prev}
            >
                prev
            </button>
            <button onClick={() =>{
                onChange('next')
            }}
            disabled={!next}>
                next
            </button>
        </div>
    );
};

export default PaginationComponent;