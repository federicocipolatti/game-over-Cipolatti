import React from 'react';
import './NavBar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { ButtonNav } from './ButtonNav/ButtonNav';
import { CartWidget } from './CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

    return (
        <Navbar bg="light" variant="light">
            <Container className="NavBar">
            <NavLink to={'/'}>
                <Navbar.Brand 
                    className='iconNav'>
                        <img src="img/game-over.png" 
                        alt='iconNav' 
                        style={{width: '100px'}}/>
                </Navbar.Brand>
            </NavLink>
                <Nav className="me-auto">
                <NavLink
                    to={'/category/consolas'}
                    className={({ isActive }) =>
                    isActive ? 'ActiveOption' : 'Option'
                    }>
                        <Nav.Link><ButtonNav title="Consolas"/></Nav.Link>
                </NavLink>
                <NavLink
                    to={'/category/juegos'}
                    className={({ isActive }) =>
                    isActive ? 'ActiveOption' : 'Option'
                    }>
                        <Nav.Link><ButtonNav title="Juegos"/></Nav.Link>
                </NavLink>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}