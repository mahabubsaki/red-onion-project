import React, { useEffect, useState } from 'react';
import logo from '../../../assets/logo2.png'
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Login.css'
import { signOut } from 'firebase/auth';
import ForgetPasswordModal from '../../part-components/ForgetPassWord/ForgetPasswordModal';
const Login = () => {
    document.title = 'Login - Red Onion'
    const [modalShow, setModalShow] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();
    let location = useLocation();
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [initUser, initLoading] = useAuthState(auth);
    useEffect(() => {
        if (initUser) {
            navigate('/')
        }
    }, [initUser, navigate])
    const [myError, setMyError] = useState('')
    useEffect(() => {
        if (error || error1) {
            if (error) {
                setMyError(error.message)
            }
            else if (error1) {
                setMyError(error1.message)
            }
            else {
                setMyError('')
            }
        }
    }, [error, error1])
    useEffect(() => {
        if (myError) {
            if (myError.includes('auth/user-not-found')) {
                toast.error('User not found with given email', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
            else if (myError.includes('auth/wrong-password')) {
                toast.error('Wrong password', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
            else {
                toast.error('Something went wrong please try again', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
            setTimeout(() => {
                setMyError('')
            }, 0)
        }
    }, [myError])
    useEffect(() => {
        if (user || user1) {
            if (user) {
                if (!(user?.user?.emailVerified)) {
                    signOut(auth)
                    toast.error('Please verify your email to log in', {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                    setTimeout(() => {
                        navigate('/login')
                    }, 0)
                    return
                }
                const getAccessToken = async () => {
                    const email = user?.user?.email
                    const { data } = await axios.post('https://quiet-tor-13369.herokuapp.com/login', { email })
                    localStorage.setItem('access_token', data.accessToken)
                }
                getAccessToken()
            }
            if (user1) {
                const getAccessToken = async () => {
                    const email = user1?.user?.email
                    const { data } = await axios.post('https://quiet-tor-13369.herokuapp.com/login', { email })
                    localStorage.setItem('access_token', data.accessToken)
                }
                getAccessToken()
                const { displayName, email } = user1?.user
                const fullUser = { name: displayName, email: email, password: null }
                fetch('https://quiet-tor-13369.herokuapp.com/users', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(fullUser)
                }).catch(err => {
                    toast.error(err, {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    return
                })
            }
            navigate(from, { replace: true });
        }
    }, [user, user1, navigate, from])
    const [resetEmail, setResetEmail] = useState('')
    useEffect(() => {
        if (!modalShow) {
            setResetEmail('')
        }
    }, [modalShow])
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
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    const handleGoogleSignIn = async () => {
        await signInWithGoogle()
    }
    return (
        <div style={{ marginTop: "80px", height: "600px" }} className="d-flex justify-content-center align-items-center">
            <div className="control-login-signup mx-auto">
                <img src={logo} alt="" className="w-50 d-block mx-auto" style={{ height: "100px" }} />
                <form onSubmit={handleSubmit}>
                    <h1 className="text-center my-3">Login</h1>
                    <input type="email" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Email" style={{ backgroundColor: '#F5F5F5' }} required onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Password" style={{ backgroundColor: '#F5F5F5' }} required onChange={(e) => setPassword(e.target.value)} />
                    <button className="d-block mx-auto btn btn-primary" type="submit">Login</button>
                </form>
                <button className="btn btn-white d-block mx-auto text-center my-3" onClick={() => setModalShow(true)}>Forget Password?</button>
                <ForgetPasswordModal show={modalShow} reset={[resetEmail, setResetEmail]}
                    onHide={() => setModalShow(false)}></ForgetPasswordModal>
                <div className="d-flex align-items-center justify-content-center">
                    <hr style={{ width: '35%', border: '3px solid black' }} />
                    <h5 className="mx-2" style={{ position: 'relative', top: '2.5px' }}>or</h5>
                    <hr style={{ width: '35%', border: '3px solid black' }} />
                </div>
                <p className="text-center">New User ? <Link to="/signup" className='text-decoration-none text-info'>Sign Up</Link> Now!</p>
                <button className="d-block w-75 mx-auto btn btn-light border border-primary mb-2" onClick={handleGoogleSignIn}>
                    <FcGoogle></FcGoogle>
                    <span className='ms-2'>Continue With Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;