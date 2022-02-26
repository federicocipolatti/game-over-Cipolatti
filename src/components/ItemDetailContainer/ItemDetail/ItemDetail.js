import React, { useState } from 'react';
import './ItemDetail.css';
import { Card, Button } from 'react-bootstrap';
import { ItemCount } from '../../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ product }) => {

    const [qty, setQty] = useState(0);

    const onAdd = (cantidad) => {
        setQty(cantidad);
    }

    return (
        <div className='ItemDetail'>
            <Card className='card'>
                <Card.Img variant="top" src={product.img} alt="img-item" className='card-img'/>
                <Card.Body className='card-body'>
                    <Card.Title className='card-title'>{product.titulo}</Card.Title>
                    <Card.Subtitle className='card-subt'>{product.subtitulo}</Card.Subtitle>
                    <Card.Text className='card-text'>
                        Precio: {product.precio}
                    </Card.Text>   
                    <Card.Text className='card-text'>
                        Categoría: {product.category}
                    </Card.Text> 
                    {qty === 0 ? (
                        <ItemCount product={product} stock={product.stock} onAdd={onAdd}/>
                    ) : (
                        <>
                            <Link to="/cart">  
                                <Button variant="outline-dark" style={{margin:'5px'}}>IR AL CARRITO</Button>
                            </Link>
                        </>
                    )}  
                    <Link to="/">  
                        <Button variant="outline-dark" style={{margin:'5px'}}>VOLVER AL INICIO</Button>
                    </Link>   
                </Card.Body>
            </Card>  
        </div>
    )
}