import React, { useState, useEffect, useContext } from 'react';
import './NavBar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { CartWidget } from './CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase/firebase';
import { Button } from 'react-bootstrap';

export const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getDocs(collection(firestoreDb, 'categories'))
            .then(res => {
                const categories = res.docs.map(cat => {
                    return{id: cat.id, ...cat.data()}
                })
                setCategories(categories)
            })
    },[])

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
                            {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className="btnNav">
                                <Button  variant="outline-dark"> {cat.description}</Button>
                            </NavLink>)}
                    </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}