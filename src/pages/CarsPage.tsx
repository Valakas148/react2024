import React, {useEffect, useState} from 'react';
import {carsService} from "../services/api.services";
import CarsComponent from "../components/CarsComponent";
import {ICarsWithAuthModel} from "../models/ICarsWithAuthModel";
import PaginationComponent from "../components/PaginationComponent";
import {IPaginationModel} from "../models/IPaginationModel";
import {ICarsPaginatedModel} from "../models/ICarsPaginatedModel";
import {useSearchParams} from "react-router-dom";

const CarsPage = () => {


    const [query, setQuery] = useSearchParams()

    const [cars, setCars] = useState<ICarsPaginatedModel>({
        total_items: 0,
        total_pages: 0,
        prev: null,
        next: null,
        items: []
    })

    useEffect(() => {
        console.log('11')
        carsService.getCars(query.get('page') || '1')
            .then(value =>
            {if(value){
                setCars(value)}
            })
        }, [query]);


    return (
        <div>
            <CarsComponent cars={cars.items}/>
            <PaginationComponent prev={cars.prev} next={cars.next}/>
        </div>
    );
};

export default CarsPage;