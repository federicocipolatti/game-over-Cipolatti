import React from 'react';
import './Detail.css';
import { Card, Button } from 'react-bootstrap';

export const Detail = ({detail}) => {

    return <div className='Detail'>
        <Card style={{ width: '50rem' }}>
            <Card.Img variant="top" src={detail.img} alt="img-item"/>
            <Card.Body>
                <Card.Title>{detail.titulo}</Card.Title>
                <Card.Subtitle>{detail.subtitulo}</Card.Subtitle>
                <Card.Text>
                    {detail.precio}
                </Card.Text>
            <Button variant="outline-dark">AGREGAR AL CARRITO</Button>
            </Card.Body>
        </Card>  
    </div>
}