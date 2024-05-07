import React from 'react';
import {useToggle} from "../custom_hooks/CustomHooks";

const ToggleComp = () => {

    const {value, changeVal} = useToggle(true);
    console.log(value)


    return (
        <div>
            <button onClick={changeVal}>
                Change bool {value}
            </button>
        </div>
    );
};

export default ToggleComp;