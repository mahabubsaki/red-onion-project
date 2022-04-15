import React from 'react';
import { useParams } from 'react-router-dom';

const SingleFood = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>details of {id}</h1>
        </div>
    );
};

export default SingleFood;