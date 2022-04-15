import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink';
import './Menu.css'

const Menu = () => {
    return (
        <div className="container" id="menu-container">
            <div className="w-50 d-flex justify-content-between mx-auto">
                <CustomLink to='/breakfast'>BreakFast</CustomLink>
                <CustomLink to='/lunch'>Lunch</CustomLink>
                <CustomLink to='/dinner'>Dinner</CustomLink>
            </div>
            <div className="my-3">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Menu;