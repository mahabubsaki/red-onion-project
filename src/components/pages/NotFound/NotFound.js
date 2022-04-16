import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    document.title = '404 Not Found - Red Onion'
    const navigate = useNavigate()
    return (
        <div style={{ height: '700px', backgroundImage: 'url(https://i.ibb.co/LdBCtJV/not-found.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="d-flex w-100 align-items-center justify-content-end">
            <div className="text-center">
                <h1>404 Not Found</h1>
                <h2>Lost your way?</h2>
                <h3 className="text-danger">Sorry we can't find that page you were looking for</h3>
                <button className="btn btn-info d-block mx-auto mb-3" onClick={() => navigate('/')}>
                    Go to Home
                </button>
                <button className="btn btn-warning d-block mx-auto" onClick={() => navigate(-1)}>
                    Back
                </button>
            </div>
        </div>
    );
};

export default NotFound;