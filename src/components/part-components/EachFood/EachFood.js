import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EachFood.css'
const EachFood = ({ food }) => {
    const navigate = useNavigate()
    const { name, description, prices, img, id } = food
    return (
        <div className="col mb-2">
            <div className="card h-100" id="singleCard">
                <img src={img} className="card-img-top" alt="Food" id='card-photo' />
                <div className="card-body text-center">
                    <h4 className="card-title fw-bold">{name}</h4>
                    <p className="card-text">{description.slice(0, 40)}</p>
                    <h3 className="fw-bolder">${prices}</h3>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <button className="btn btn-info" onClick={() => navigate(id)}>Details</button>
                </div>
            </div>
        </div>
    );
};

export default EachFood;