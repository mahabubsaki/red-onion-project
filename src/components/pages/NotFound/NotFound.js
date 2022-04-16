import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div style={{ height: '700px', backgroundImage: 'url(https://i.ibb.co/LdBCtJV/not-found.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="d-flex w-100 align-items-center justify-content-end">
            <div className="text-center">
                <h1>404 Not Found</h1>
                <h2>Lost your way?</h2>
                <h3 className="text-danger">Sorry we can't find that page you were looking for</h3>
                <button className="btn btn-info d-block mx-auto" onClick={() => navigate('/')}>
                    Back to Homepage
                </button>
            </div>
        </div>
    );
};

export default NotFound;