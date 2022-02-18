import React from 'react';
import { Card } from 'react-bootstrap';
import { ItemCount } from '../../ItemCount/ItemCount';


export const ItemDetail = ({producto}) => {

    const handleOnAdd = (num) => {
        console.log(`Se agregaron ${num} productos`);
    }

    return <div className='Detail'>
        <Card className='card'>
            <Card.Img variant="top" src={producto.img} alt="img-item" className='card-img'/>
            <Card.Body className='card-body'>
                <Card.Title className='card-title'>{producto.titulo}</Card.Title>
                <Card.Subtitle className='card-subt'>{producto.subtitulo}</Card.Subtitle>
                <Card.Text className='card-text'>
                    {producto.precio}
                </Card.Text>
            <ItemCount stock={15} initial={1} onAdd={handleOnAdd}/>
            </Card.Body>
        </Card>  
    </div>
}