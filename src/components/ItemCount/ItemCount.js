import React, { useState } from 'react';
import './ItemCount.css';
import { Card, Button } from 'react-bootstrap';

export const ItemCount = ({stock, initial = 1,  onAdd}) => {

  const [num, setNum] = useState(initial);

  const handleIncrement = ()=> {
    num < stock && setNum(num+1);
  }

  const handleDecrement = ()=> {
    num > 0 && setNum(num-1);
  }

  return (
    <Card style={{ width: '18rem' }} className='itemCount'>
        <Card.Body>
            <Card.Subtitle>Stock disponible {stock}</Card.Subtitle>
            <Card.Text>
                {num}
            </Card.Text>
            <div>
                <Button className='btnCart' variant="outline-dark" onClick={handleDecrement} disabled={num<initial}>-</Button>
                <Button className='btnCart' variant="outline-dark" onClick={handleIncrement} disabled={num>=stock}>+</Button>
            </div>
            <Button 
            variant="outline-dark" 
            onClick={()=>onAdd(num)} 
            disabled = {num < initial}>
                AÑADIR AL CARRITO
            </Button>
        </Card.Body>
    </Card>
  );
}