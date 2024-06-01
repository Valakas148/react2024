import React, {FC} from 'react';
import CarComponent from "./CarComponent";
import {ICarsModel} from "../models/ICarsModel";

const CarsComponent:FC<ICarsModel> = ({cars}) => {

    return (
        <div>
            {cars.map(car => <CarComponent key={car.id} car={car}/> )}
        </div>
    );
};

export default CarsComponent;