import React from 'react';
import './Item.css';
import { Card, Button } from 'react-bootstrap';

export const Item = ({item}) => {

    return (
        <div className='Item'>
            <Card className='card-item'>
                <Card.Img variant="top" src={item.img} alt="img-item" className='card-img-item'/>
                <Card.Body className='card-body-item'>
                    <Card.Title className='card-title-item'>{item.titulo}</Card.Title>
                    <Card.Subtitle className='card-subt-item'>{item.subtitulo}</Card.Subtitle>
                    <Card.Text className='card-text-item'>
                        {item.precio}
                    </Card.Text>
                <Button variant="outline-dark">DETALLES</Button>
                </Card.Body>
            </Card>  
        </div>
    )
}