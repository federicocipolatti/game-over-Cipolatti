import React, { useState } from 'react';
import './ItemCount.css';
import { Card, Button } from 'react-bootstrap';

export const ItemCount = ({product, onAdd}) => {

  const [num, setNum] = useState(1);

  const handleIncrement = ()=> {
    num < product.stock && setNum(num+1);
  }

  const handleDecrement = ()=> {
    num > 0 && setNum(num-1);
  }

  return (
    <Card style={{ width: '18rem' }} className='itemCount'>
        <Card.Body>
            <Card.Subtitle>Stock disponible {product.stock}</Card.Subtitle>
            <Card.Text>
                {num}
            </Card.Text>
            <div>
                <Button className='btnCart' variant="outline-dark" onClick={handleDecrement} disabled={num<=0}>-</Button>
                <Button className='btnCart' variant="outline-dark" onClick={handleIncrement} disabled={num>=product.stock}>+</Button>
            </div>
            <Button 
            variant="outline-dark" 
            onClick={()=>onAdd(num)} 
            disabled = {num === 0}>
                AÑADIR AL CARRITO
            </Button>
        </Card.Body>
    </Card>
  );
}