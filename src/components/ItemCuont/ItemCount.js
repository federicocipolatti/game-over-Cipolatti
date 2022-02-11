import React, { useState } from 'react';
import './ItemCount.css';
import { Card, Button } from 'react-bootstrap';

export const ItemCount = ({stock, initial, onAdd}) => {

  const [num, setNum] = useState(initial);

  const handleIncrement = ()=> {
    setNum(num+1);
  }

  const handleDecrement = ()=> {
    setNum(num-1);
  }

  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="img/game.ico"/>
        <Card.Body>
            <Card.Title>Item</Card.Title>
            <Card.Subtitle>Stock disponible {stock}</Card.Subtitle>
            <Card.Text>
                {num}
            </Card.Text>
            <div>
                <Button className='btnCart' variant="outline-dark" onClick={handleDecrement} disabled={num<=initial}>-</Button>
                <Button className='btnCart' variant="outline-dark" onClick={handleIncrement} disabled={num>=stock}>+</Button>
            </div>
            <Button variant="outline-dark" onClick={()=>onAdd(num)}>AÑADIR AL CARRITO</Button>
        </Card.Body>
    </Card>
  );
}