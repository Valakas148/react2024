import React, {FC} from 'react';
import {ICarsModel} from "../models/ICarsModel";
import {ICarsWithAuthModel} from "../models/ICarsWithAuthModel";


type IProps ={
    car: ICarsWithAuthModel
}
const CarComponent:FC<IProps> = ({car}) => {
    return (
        <div>
            <ul > {car.brand} - id: {car.id}
                <li>Year - {car.year}</li>
                <li>Price - {car.price}</li>
            </ul>
        </div>
    );
};

export default CarComponent;