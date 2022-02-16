import React from 'react';
import './Detail.css';
import { Card, Button } from 'react-bootstrap';
import { ItemCount } from '../../ItemCount/ItemCount';

export const Detail = ({detail}) => {

    const handleOnAdd = (num) => {
        console.log(`Se agregaron ${num} productos`);
      }

    return <div className='Detail'>
        <Card className='card'>
            <Card.Img variant="top" src={detail.img} alt="img-item" className='card-img'/>
            <Card.Body className='card-body'>
                <Card.Title className='card-title'>{detail.titulo}</Card.Title>
                <Card.Subtitle className='card-subt'>{detail.subtitulo}</Card.Subtitle>
                <Card.Text className='card-text'>
                    {detail.precio}
                </Card.Text>
            <ItemCount stock={15} initial={1} onAdd={handleOnAdd}/>
            {/* <Button variant="outline-dark">AGREGAR AL CARRITO</Button> */}
            </Card.Body>
        </Card>  
    </div>
}