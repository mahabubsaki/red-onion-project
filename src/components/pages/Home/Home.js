import React from 'react';
import { useNavigate } from 'react-router-dom';
import Feedback from '../../part-components/Feedback/Feedback';
import Menu from '../../part-components/Menu/Menu';
import './Home.css'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>

            </div>
            <div className="banner d-flex justify-content-center align-items-center">
                <div>
                    <h1>Best Food Waiting For Your Belly</h1>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" id="banner-search" placeholder="Search Food" aria-label="Search Food" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
            </div>
            <Menu></Menu>
            <div className="d-flex justify-content-center my-4" onClick={() => navigate('/checkout')}>
                <button className="btn btn-success">Checkout Your Foods</button>
            </div>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;