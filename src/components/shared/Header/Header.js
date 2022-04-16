import React, { useContext, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import { ShoppingCartIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';
import Cart from '../../part-components/Cart/Cart';
import './Header.css'

const Header = ({ cart }) => {
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
    let quantity = 0;
    let totalCost = 0;
    let eachPrice;
    for (const item of testCart) {
        quantity = quantity + item.quantity
        eachPrice = item.prices * item.quantity
        totalCost = totalCost + eachPrice
    }
    const [cartOpen, setCartOpen] = useState(false)
    return (
        <div className="position-fixed zindex-fixed top-0 start-0 end-0 border-1" id='nav'>
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
                                    <ShoppingCartIcon style={{ height: '32px', position: 'relative', top: '6px' }} onClick={() => setCartOpen(!cartOpen)}></ShoppingCartIcon>
                                    <span className="translate-middle badge rounded-pill bg-danger" id='cart-badge'>
                                        {quantity}
                                    </span>
                                </Nav.Link>
                                <Nav.Link as={Link} to="/login"><button className='btn btn-info text-white rounded-pill'>Login</button></Nav.Link>
                                <Nav.Link as={Link} to="/signup"><button className='btn btn-danger text-white  rounded-pill'>Sign Up</button></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="position-absolute" style={{ right: cartOpen ? "0px" : "-2000px", transition: "all 1s linear", width: "50%", }}>
                    <Cart cart={testCart} totalCost={totalCost}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Header;