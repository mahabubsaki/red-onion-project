import React, { useEffect, useState } from 'react';
import logo from '../../../assets/logo2.png'
import { FcGoogle } from 'react-icons/fc'
import { IoLogoFacebook } from 'react-icons/io'
import { FiGithub } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const SignUp = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [myError, setMyError] = useState('')
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
        }
    }, [myError])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (password.length < 8) {
            toast.error('Password can not be less than 8 characters', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        if (password !== confirm) {
            toast.error('Confirm password did not match', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/')
    }
    useEffect(() => {
        if (error) {
            setMyError(error.message)
        }
        else {
            setMyError('')
        }
    }, [error])
    if (loading) {
        return <div style={{ marginTop: "80px", height: "700px" }} className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>;
    }
    return (
        <div style={{ marginTop: "80px", height: "700px" }} className="d-flex justify-content-center align-items-center">
            <div className="w-50 mx-auto">
                <img src={logo} alt="" className="w-50 d-block mx-auto" style={{ height: "100px" }} />
                <form onSubmit={handleSubmit}>
                    <h1 className="text-center my-3">Sign Up</h1>
                    <input type="text" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Name" style={{ backgroundColor: '#F5F5F5' }} required />
                    <input type="email" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Email" style={{ backgroundColor: '#F5F5F5' }} required onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Password" style={{ backgroundColor: '#F5F5F5' }} required onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Confirm Password" style={{ backgroundColor: '#F5F5F5' }} required onChange={(e) => setConfirm(e.target.value)} />
                    <button className="d-block mx-auto btn btn-primary" type='submit'>Sign Up</button>
                </form>
                <div className="d-flex align-items-center justify-content-center">
                    <hr style={{ width: '35%', border: '3px solid black' }} />
                    <h5 className="mx-2" style={{ position: 'relative', top: '2.5px' }}>or</h5>
                    <hr style={{ width: '35%', border: '3px solid black' }} />
                </div>
                <p className="text-center">Already have an account? <Link to="/login" className='text-decoration-none text-info'>Log in</Link> Now!</p>
                <button className="d-block w-50 mx-auto btn btn-light border border-primary mb-2">
                    <FcGoogle></FcGoogle>
                    <span className='ms-2'>Sign Up With Google</span>
                </button>
                <button className="d-block w-50 mx-auto btn btn-primary border border-success mb-2">
                    <IoLogoFacebook></IoLogoFacebook>
                    <span className='ms-2'>Sign Up With Facebook</span>
                </button>
                <button className="d-block w-50 mx-auto btn btn-dark border border-warning mb-2">
                    <FiGithub></FiGithub>
                    <span className='ms-2'>Sign Up With Github</span>
                </button>
            </div>
        </div>
    );
};

export default SignUp;