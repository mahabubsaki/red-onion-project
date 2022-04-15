import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="banner d-flex justify-content-center align-items-center">
                <div>
                    <h1>Best Food Waiting For Your Belly</h1>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" id="banner-search" placeholder="Search Food" aria-label="Search Food" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;