import React from 'react';
import './Item.css';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const itemStyle = {
    width: '50 rem',
    backgroundColor: '#343a40',
    color: 'white',
    borderRadius: '20px'
}

export const Item = ({item}) => {

    return (
        <div className='Item'>
            <Card style={itemStyle} className='card-item'>
                <Card.Img variant="top" src={item.img} alt="img-item" className='card-img-item'/>
                <Card.Body>
                    <Card.Title className='card-title-item'>{item.titulo}</Card.Title>
                    <Card.Subtitle className='card-subt-item'>{item.subtitulo}</Card.Subtitle>
                    <Card.Text className='card-text-item'>
                        Stock disponible: {item.stock}
                    </Card.Text>
                    <Card.Text className='card-text-item'>
                        Precio: $ {item.precio}
                    </Card.Text>
                    <Card.Text className='card-text-item'>
                        Categoría: {item.category}
                    </Card.Text>
                    <Link to={`/detail/${item.id}`}><Button variant="outline-light">DETALLES</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}