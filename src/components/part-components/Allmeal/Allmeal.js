import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import EachFood from '../EachFood/EachFood';

const Allmeal = () => {
    const { pathname } = useLocation()
    const [allMeal, setAllmeal] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setAllmeal(data))
    }, [])
    return (
        <div className={`${pathname !== '/' ? 'd-none' : 'row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 my-3'} `}>
            {allMeal.map(food => <EachFood key={food.id} food={food}></EachFood>)}
        </div>
    );
};

export default Allmeal;