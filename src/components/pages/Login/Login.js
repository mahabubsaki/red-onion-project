import React, { useEffect, useState } from 'react';
import logo from '../../../assets/logo2.png'
import { FcGoogle } from 'react-icons/fc'
import { IoLogoFacebook } from 'react-icons/io'
import { FiGithub } from 'react-icons/fi'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [myError, setMyError] = useState('')
    useEffect(() => {
        if (error) {
            setMyError(error.message)
        }
        else {
            setMyError('')
        }
    }, [error])
    useEffect(() => {
        if (myError) {
            toast.error(myError, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            // alert(myError)
        }
    }, [myError])
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <div style={{ marginTop: "80px", height: "700px" }} className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div style={{ marginTop: "80px", height: "600px" }} className="d-flex justify-content-center align-items-center">
            <div className="w-50 mx-auto">
                <img src={logo} alt="" className="w-50 d-block mx-auto" style={{ height: "100px" }} />
                <form onSubmit={handleSubmit}>
                    <h1 className="text-center my-3">Login</h1>
                    <input type="email" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Email" style={{ backgroundColor: '#F5F5F5' }} required onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Password" style={{ backgroundColor: '#F5F5F5' }} required onChange={(e) => setPassword(e.target.value)} />
                    <button className="d-block mx-auto btn btn-primary" type="submit">Login</button>
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