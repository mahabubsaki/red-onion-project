import React, { useEffect, useState } from 'react';
import logo from '../../../assets/logo2.png'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const SignUp = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [initUser, initLoading] = useAuthState(auth);
    useEffect(() => {
        if (initUser) {
            navigate('/')
        }
    }, [initUser, navigate])
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
    const [name, setName] = useState('')
    const [confirm, setConfirm] = useState('')
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const handleSubmit = (e) => {
        e.preventDefault()
        const fullUser = { name, email, password }
        fetch('localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fullUser)
        })
            .then(res => console.log(res))
            .catch(err => {
                console.log(err)
                return
            })
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
    useEffect(() => {
        if (error) {
            setMyError(error.message)
        }
        if (error1) {
            setMyError(error1.message)
        }
        else {
            setMyError('')
        }
    }, [error, error1])
    useEffect(() => {
        if (user || user1) {
            navigate('/');
        }
    }, [user, user1, navigate])
    useEffect(() => {
        if (error) {
            setMyError(error.message)
        }
        else {
            setMyError('')
        }
    }, [error])
    if (loading || loading1) {
        return <div style={{ marginTop: "80px", height: "700px" }} className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>;
    }
    if (initLoading) {
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
                    <input type="text" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Name" style={{ backgroundColor: '#F5F5F5' }} required onChange={(e) => setName(e.target.value)} />
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
                <button className="d-block w-75 mx-auto btn btn-light border border-primary mb-2" onClick={() => signInWithGoogle()}>
                    <FcGoogle></FcGoogle>
                    <span className='ms-2'>Sign Up With Google</span>
                </button>
            </div>
        </div>
    );
};

export default SignUp;