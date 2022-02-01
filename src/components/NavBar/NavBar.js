import React from 'react';
import './NavBar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const NavBar = () => {
    return<>
        <Navbar bg="light" variant="light" className='NavBar'>
            <Container>
            <Navbar.Brand href="#home" className='iconNav'><img src="img/game-over.png" alt='iconNav' style={{width: '100px'}}/></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#consolas">Consolas</Nav.Link>
                    <Nav.Link href="#juegos">Juegos</Nav.Link>
                    <Nav.Link href="#noticias">Noticias</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
}