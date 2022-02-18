import React from 'react';
import './ItemDetail.css';
import { Card } from 'react-bootstrap';
import { ItemCount } from '../../ItemCount/ItemCount';

export const ItemDetail = ({productos}) => {

    const handleOnAdd = (num) => {
        console.log(`Se agregaron ${num} productos`);
      }

    return <div className='ItemDetail'>
        <Card className='card'>
            <Card.Img variant="top" src={productos.img} alt="img-item" className='card-img'/>
            <Card.Body className='card-body'>
                <Card.Title className='card-title'>{productos.titulo}</Card.Title>
                <Card.Subtitle className='card-subt'>{productos.subtitulo}</Card.Subtitle>
                <Card.Text className='card-text'>
                    {productos.precio}
                </Card.Text>
            <ItemCount stock={15} initial={1} onAdd={handleOnAdd}/>
            {/* <Button variant="outline-dark">AGREGAR AL CARRITO</Button> */}
            </Card.Body>
        </Card>  
    </div>
}