import React from 'react';
import './NavBar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { ButtonNav } from './ButtonNav/ButtonNav';
import { CartWidget } from './CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container className="NavBar">
            <Navbar.Brand href="#home" className='iconNav'><img src="img/game-over.png" alt='iconNav' style={{width: '100px'}}/></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#consolas"><ButtonNav title="Consolas"/></Nav.Link>
                    <Nav.Link href="#juegos"><ButtonNav title="Juegos"/></Nav.Link>
                    <Nav.Link href="#hola"><ButtonNav title="Hola"/></Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}