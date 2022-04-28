import React, { useEffect, useState } from 'react';
import EachFood from '../EachFood/EachFood';

const Dinner = () => {
    const [currentCategory, setCurrentCategory] = useState([])
    useEffect(() => {
        fetch('https://quiet-tor-13369.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setCurrentCategory(data.filter(c => c.category === 'Dinner')))
    }, [])
    return (
        <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1">
            {currentCategory.map(food => <EachFood key={food._id} food={food}></EachFood>)}
        </div>
    );
};

export default Dinner;