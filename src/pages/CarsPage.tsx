import React, {useEffect} from 'react';

const CarsPage = () => {

    useEffect(() => {
        carsService.getCars()
    }, []);

    return (
        <div>

        </div>
    );
};

export default CarsPage;