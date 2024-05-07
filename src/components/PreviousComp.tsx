import React, {useState} from 'react';
import {usePrevious} from "../custom_hooks/CustomHooks";

const PreviousComp = () => {

    // task 2
    const [number, setNumber] = useState<number>(0)
    console.log('Num ' + number)


    const previous = usePrevious<number>(number)
    console.log('previous ' + number)

    return (
        <div>

            <p>Current Count: {number}</p>
            <p>Previous Count: {previous}</p>
            <button onClick={() => setNumber(number + 1)}>
                Increment
            </button>
        </div>
    );
};

export default PreviousComp;