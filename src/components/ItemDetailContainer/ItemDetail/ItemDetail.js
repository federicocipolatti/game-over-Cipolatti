import React from 'react';
import { Card } from 'react-bootstrap';
import { ItemCount } from '../../ItemCount/ItemCount';

export const ItemDetail = ({product}) => {

    const handleOnAdd = (num) => {
        console.log(`Se agregaron ${num} productos`);
      }

    return (
    <div className='Detail'>
        <Card className='card'>
            <Card.Img variant="top" src={product.img} alt="img-detail" className='card-img'/>
            <Card.Body className='card-body'>
                <Card.Title className='card-title'>{product.titulo}</Card.Title>
                <Card.Subtitle className='card-subt'>{product.subtitulo}</Card.Subtitle>
                <Card.Text className='card-text'>
                    {product.precio}
                </Card.Text>
            <ItemCount stock={15} initial={1} onAdd={handleOnAdd}/>
            {/* <Button variant="outline-dark">AGREGAR AL CARRITO</Button> */}
            </Card.Body>
        </Card>  
    </div>
    )
}