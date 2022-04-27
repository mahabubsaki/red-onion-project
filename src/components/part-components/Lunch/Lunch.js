import React, { useEffect, useState } from 'react';
import EachFood from '../EachFood/EachFood';

const Lunch = () => {
    const [currentCategory, setCurrentCategory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setCurrentCategory(data.filter(c => c.category === 'Lunch')))
    }, [])
    return (
        <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1">
            {currentCategory.map(food => <EachFood key={food._id} food={food}></EachFood>)}
        </div>
    );
};

export default Lunch;