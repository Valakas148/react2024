import React from 'react';
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;