import React, { useContext } from 'react';
import { ApiContext } from '../../../App';
import EachFood from '../EachFood/EachFood';

const Lunch = () => {
    const { foods } = useContext(ApiContext)
    const breakFastFoods = foods.filter(food => food.category === 'Lunch')
    return (
        <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1">
            {breakFastFoods.map(food => <EachFood key={food.id} food={food}></EachFood>)}
        </div>
    );
};

export default Lunch;