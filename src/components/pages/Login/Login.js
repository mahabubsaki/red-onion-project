import React from 'react';
import logo from '../../../assets/logo2.png'
import { FcGoogle } from 'react-icons/fc'
import { IoLogoFacebook } from 'react-icons/io'
import { FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div style={{ marginTop: "80px", height: "600px" }} className="d-flex justify-content-center align-items-center">
            <div className="w-50 mx-auto">
                <img src={logo} alt="" className="w-50 d-block mx-auto" style={{ height: "100px" }} />
                <form>
                    <h1 className="text-center my-3">Login</h1>
                    <input type="email" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Email" style={{ backgroundColor: '#F5F5F5' }} required />
                    <input type="password" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Password" style={{ backgroundColor: '#F5F5F5' }} required />
                    <button className="d-block mx-auto btn btn-primary">Login</button>
                </form>
                <div className="d-flex align-items-center justify-content-center">
                    <hr style={{ width: '35%', border: '3px solid black' }} />
                    <h5 className="mx-2" style={{ position: 'relative', top: '2.5px' }}>or</h5>
                    <hr style={{ width: '35%', border: '3px solid black' }} />
                </div>
                <p className="text-center">New User ? <Link to="/signup" className='text-decoration-none text-info'>Sign Up</Link> Now!</p>
                <button className="d-block w-50 mx-auto btn btn-light border border-primary mb-2">
                    <FcGoogle></FcGoogle>
                    <span className='ms-2'>Continue With Google</span>
                </button>
                <button className="d-block w-50 mx-auto btn btn-primary border border-success mb-2">
                    <IoLogoFacebook></IoLogoFacebook>
                    <span className='ms-2'>Continue With Facebook</span>
                </button>
                <button className="d-block w-50 mx-auto btn btn-dark border border-warning mb-2">
                    <FiGithub></FiGithub>
                    <span className='ms-2'>Continue With Github</span>
                </button>
            </div>
        </div>
    );
};

export default Login;