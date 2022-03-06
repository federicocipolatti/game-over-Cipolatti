import React from 'react';
import './NavBar.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ButtonNav } from './ButtonNav/ButtonNav';
import { CartWidget } from './CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import CartContext from '../../context/CartContext/CartContext';
import { useContext } from 'react';

export const NavBar = () => {

    const { getQuantity } = useContext(CartContext)

    return (
        <Navbar style={{backgroundColor:'#e5e5e5'}}>
            <Container className="NavBar">
                <NavLink to={'/'}>
                    <Navbar.Brand 
                        className='iconNav'>
                            <img src="img/game-over.png" 
                            alt='iconNav' 
                            style={{width: '100px'}}/>
                    </Navbar.Brand>
                </NavLink>
                    <Nav className="me-auto botones">
                        <NavLink className="btnNav" to={'/category/accesorios'}>
                            <ButtonNav title="Accesorios"/>
                        </NavLink>
                        <NavLink className="btnNav" to={'/category/consolas'}>
                            <ButtonNav title="Consolas"/>
                        </NavLink>
                        <NavLink className="btnNav" to={'/category/juegos'}>
                            <ButtonNav title="Juegos"/>
                        </NavLink>
                    </Nav>
                    <Link to="/cart">  
                        <Button variant="outline-dark" disabled={getQuantity()<=0}><CartWidget/></Button>
                    </Link> 
            </Container>
        </Navbar>
    );
}