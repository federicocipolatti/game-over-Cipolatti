import React, { useState } from 'react';
import './ItemCount.css';
import { Card, Button } from 'react-bootstrap';

export const ItemCount = ({stock, initial = 1,  onAdd}) => {

  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
      quantity < stock && setQuantity(quantity+1);
    }

  const decrement = () => {
      quantity > 0 && setQuantity(quantity-1);    
    }

  return (
    <Card style={{ width: '18rem' }} className='itemCount'>
        <Card.Body>
            <Card.Subtitle>Stock disponible {stock}</Card.Subtitle>
            <Card.Text>
                {quantity}
            </Card.Text>
            <div>
                <Button className='btnCart' variant="outline-light" onClick={ decrement } disabled={quantity<initial}>-</Button>
                <Button className='btnCart' variant="outline-light" onClick={ increment } disabled={quantity>=stock}>+</Button>
            </div>
            <Button 
            variant="outline-light" 
            onClick={()=>onAdd(quantity)} 
            disabled = {quantity < initial}>
                AÑADIR AL CARRITO
            </Button>
        </Card.Body>
    </Card>
  );
}