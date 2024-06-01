import React, {useEffect, useState} from 'react';
import {carsService} from "../services/api.services";
import CarsComponent from "../components/CarsComponent";
import {ICarsWithAuthModel} from "../models/ICarsWithAuthModel";

const CarsPage = () => {

    const [cars, setCars] = useState<ICarsWithAuthModel[]>([])

    useEffect(() => {
        console.log('11')
        carsService.getCars()
            .then(value =>
            {if(value){
                setCars([...value.items])}
            })
        }, []);

    return (
        <div>
            <CarsComponent cars={cars}/>
        </div>
    );
};

export default CarsPage;