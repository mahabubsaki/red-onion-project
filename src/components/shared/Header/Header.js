import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/solid'
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../../part-components/Cart/Cart';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { ApiContext } from '../../../App';

const Header = ({ cart }) => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    let testCart;
    if (cart.length === 0) {
        const foods = JSON.parse(localStorage.getItem('allFoods'))
        const storedCart = []
        const localStorageObject = JSON.parse(localStorage.getItem('cart'))
        for (const id in localStorageObject) {
            const findById = foods.find(food => food.id === id)
            if (findById) {
                findById.quantity = localStorageObject[id]
                storedCart.push(findById)
            }
        }
        testCart = [...storedCart]
    }
    else {
        testCart = cart
    }
    let quantity = 0
    for (const item of testCart) {
        quantity = quantity + item.quantity
    }
    const { cartOpen, setCartOpen, handleClearAll } = useContext(ApiContext)
    const handleSignout = () => {
        signOut(auth)
        navigate('/login')
        localStorage.clear('access_token')
        localStorage.clear('cart')
        handleClearAll()
    }
    return (
        <div className="position-fixed top-0 start-0 end-0 border-1" id='nav'>
            <div className="position-relative">
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/"><img src={logo} alt="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="ms-auto my-2 my-lg-0"
                            >
                                <Nav.Link className="position-relative">
                                    <ShoppingCartIcon style={{ height: '40px' }} onClick={() => setCartOpen(!cartOpen)}></ShoppingCartIcon>
                                    <span className="translate-middle badge rounded-pill bg-danger" id='cart-badge' style={{ position: 'relative', bottom: '6px' }}>
                                        {quantity}
                                    </span>
                                </Nav.Link>
                                {
                                    user ?
                                        <>
                                            <Nav.Link as={Link} to="/checkout"><button className='btn btn-success text-white rounded-pill'>Chekout</button></Nav.Link>
                                            <Nav.Link as={Link} to="/orders"><button className='btn btn-success text-white rounded-pill'>Orders</button></Nav.Link>
                                            <Nav.Link><UserCircleIcon style={{ height: '40px' }}></UserCircleIcon></Nav.Link>
                                            <Nav.Link><button className='btn btn-danger text-white rounded-pill' onClick={handleSignout}>Logout</button></Nav.Link>
                                        </>
                                        :
                                        <>
                                            <Nav.Link as={Link} to="/login"><button className='btn btn-info text-white rounded-pill'>Login</button></Nav.Link>
                                            <Nav.Link as={Link} to="/signup"><button className='btn btn-warning text-white  rounded-pill'>Sign Up</button></Nav.Link>
                                        </>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="position-absolute" id="cart-container" style={{ right: cartOpen ? "0px" : "-1400px", transition: "all 0.5s ease-in-out" }}>
                    <Cart cart={testCart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Header;