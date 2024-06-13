import React from 'react';
import './App.css';
import HeaderComponent from "./component/HeaderComponent";
import {Outlet} from "react-router-dom";

const App = () => {


  return (
      <div>
          <HeaderComponent/>
          <Outlet/>

      </div>
  );
};

export default App;