import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import { Card, Button } from 'react-bootstrap';
import { ItemCount } from '../../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import CartContext from '../../../context/CartContext/CartContext';
import { useNotificationServices } from '../../../services/Notifications/NotificationServices';

export const ItemDetail = ({ product }) => {

    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)

    const setNotification = useNotificationServices()

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const productToAdd = {
            ...product
        }

        addItem(productToAdd, quantity)
        setNotification('success',`Se agrego ${product.titulo} al carrito`)
        console.log(setNotification)
    }

    return (
        <div className='ItemDetail'>
            <Card className='card'>
                <Card.Img variant="top" src={product.img} alt="img-item" className='card-img'/>
                <Card.Body className='card-body'>
                    <Card.Title className='card-title'>{product.titulo}</Card.Title>
                    <Card.Subtitle className='card-subt'>{product.subtitulo}</Card.Subtitle>
                    <Card.Text className='card-text'>
                        Precio: $ {product.precio}
                    </Card.Text>   
                    <Card.Text className='card-text'>
                        Categoría: {product.category}
                    </Card.Text> 
                    {quantity === 0 ? (
                        <ItemCount stock={product.stock} onAdd={handleOnAdd}/>
                    ) : (
                        <>
                            <Link to="/cart">  
                                <Button variant="outline-light" style={{margin:'5px'}}>IR AL CARRITO</Button>
                            </Link>
                        </>
                    )}  
                    <Link to="/">  
                        <Button variant="outline-light" style={{margin:'5px'}}>VOLVER AL INICIO</Button>
                    </Link>   
                </Card.Body>
            </Card>  
        </div>
    )
}