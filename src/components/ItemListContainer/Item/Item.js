import React from 'react';
import './Item.css';
import { Card, Button } from 'react-bootstrap';

export const Item = ({item}) => {

    return <div className='Item'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.img} alt="img-item"/>
            <Card.Body>
                <Card.Title>{item.titulo}</Card.Title>
                <Card.Subtitle>{item.subtitulo}</Card.Subtitle>
                <Card.Text>
                    {item.precio}
                </Card.Text>
            <Button variant="outline-dark">DETALLES</Button>
            </Card.Body>
        </Card>  
    </div>
}