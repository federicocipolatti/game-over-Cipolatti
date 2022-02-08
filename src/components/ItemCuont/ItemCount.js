import React, { useState } from 'react';
import './ItemCount.css';
import { Card, Button } from 'react-bootstrap';

export const ItemCount = ({stock}) => {

  let [num, setNum] = useState(1);

  let handleIncrement = ()=> {
    setNum(num+1);
  }

  let handleDecrement = ()=> {
    setNum(num-1);
  }

  return <>
    {/* <div className='count'>
      <h3>{num}</h3>
    </div>
      <div className='buttons'>
        <button className='btn btn-light btn-outline-dark rounded-0' onClick={handleDecrement} disabled={num===0}>-1</button>
        <button className='btn btn-light btn-outline-dark rounded-0' onClick={handleIncrement} disabled={num>=10}>+1</button>
      </div>
      <button className='btnDetail btn-light btn-outline-dark rounded-0'disabled={num===0}>AÑADIR AL CARRITO</button>  */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="img/game.ico"/>
        <Card.Body>
            <Card.Title>Item</Card.Title>
            <Card.Subtitle>Stock disponible {stock}</Card.Subtitle>
            <Card.Text>
                {num}
            </Card.Text>
            <div>
                <Button className='btnCart' variant="outline-dark" onClick={handleDecrement} disabled={num===0}>-</Button>
                <Button className='btnCart' variant="outline-dark" onClick={handleIncrement} disabled={num>=stock}>+</Button>
            </div>
            <Button variant="outline-dark">AÑADIR AL CARRITO</Button>
        </Card.Body>
    </Card>
    </> 
}