import React from 'react';
import { Outlet } from 'react-router-dom';
import Allmeal from '../Allmeal/Allmeal';
import CustomLink from '../CustomLink';
import './Menu.css'

const Menu = () => {
    return (
        <div className="container" id="menu-container">
            <div className="w-75 d-flex justify-content-between mx-auto">
                <CustomLink to='/breakfast' className="mx-2">BreakFast</CustomLink>
                <CustomLink to='/lunch' className="mx-2">Lunch</CustomLink>
                <CustomLink to='/dinner' className="mx-2">Dinner</CustomLink>
            </div>
            <Allmeal></Allmeal>
            <div className="my-3">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Menu;