import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Features</Nav.Link>
                        <Nav.Link>Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;