import React, {useState} from 'react';
import './App.css';
import {usePrevious, useStorage, useToggle} from "./custom_hooks/CustomHooks";
import ToggleComp from "./components/ToggleComp";
import PreviousComp from "./components/PreviousComp";


const App = () => {



    // Task 3
    const task3 = useStorage<string>('value', 'TASk3')


    return (
        <div>

            <ToggleComp />

            <PreviousComp />


        </div>
    );
};

export default App;