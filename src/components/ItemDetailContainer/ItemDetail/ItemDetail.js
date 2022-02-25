import React { useState } from 'react';
import './ItemDetail.css';
import { Card } from 'react-bootstrap';
import { ItemCount } from '../../ItemCount/ItemCount';

const InputCount = ({onConfirm, stock, initial=0}) => {
    const [count, setCount] = useState(initial)

    const handleChange = ({target}) => {
        if(target.value <= stock && target.value >= 0) {
            setCount(target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onConfirm, stock, initial = 0 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > initial) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}

export const ItemDetail = ({ product }) => {

    const optionSelected = (value) => {
        console.log(value)
        setOption(value)
    }

    const Count = inputType === "button" ? ButtonCount : InputCount

    const onConfirm = () => {
        console.log('agregue al carrito')
    }

    return (
        <div className='ItemDetail'>
            <Card className='card'>
                <Card.Img variant="top" src={product.img} alt="img-item" className='card-img'/>
                <Card.Body className='card-body'>
                    <Card.Title className='card-title'>{product.titulo}</Card.Title>
                    <Card.Subtitle className='card-subt'>{product.subtitulo}</Card.Subtitle>
                    <Select options={options} onSelect={optionSelected} defaultOption={1}/>
                    <Card.Text className='card-text'>
                        {product.precio}
                    </Card.Text>
                <Count onConfirm={onConfirm} stock={stock} inicial={1}/>
                <h3>El valor del select es {option}</h3>
                </Card.Body>
            </Card>  
        </div>
    )
}