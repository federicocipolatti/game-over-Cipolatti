import './CartItem.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext/CartContext'
import { Card, Button } from 'react-bootstrap'


const CartItem = ({ id, titulo, quantity, precio, img, subtitulo, category }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = () => {
        removeItem(id)
    }

    return (
                        
        <Card className='card-cart' key={id} style={{margin:'15px'}}>
            <Card.Img variant="top" src={img} alt="img-item" className='card-img-cart'/>
            <Card.Body className='card-body-cart'>
                <Card.Title className='card-title-cart'>{titulo}</Card.Title>
                <Card.Subtitle className='card-subt-cart'>{subtitulo}</Card.Subtitle>
                <Card.Text className='card-text-cart'>
                     Precio unidad: $ {precio}
                </Card.Text>   
                <Card.Text className='card-text-cart'>
                    Categoría: {category}
                </Card.Text>   
                <Card.Text className='card-text-cart'>
                    Cantidad {quantity}
                </Card.Text>   
                <Button className='btnCart' variant="outline-light"onClick={() => handleRemove(id, titulo)}>X</Button>
            </Card.Body>
        </Card>     
    )
}

export default CartItem