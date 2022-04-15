import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import { ShoppingCartIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                        >
                            <Nav.Link>
                                <ShoppingCartIcon className="mx-" style={{ height: '32px', position: 'relative', top: '6px' }}></ShoppingCartIcon>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/login"><button className='btn btn-info text-white rounded-pill'>Login</button></Nav.Link>
                            <Nav.Link as={Link} to="/signup"><button className='btn btn-danger text-white  rounded-pill'>Sign Up</button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;