import { useContext } from "react"
import CartContext from "../../context/CartContext/CartContext"
import { Card, Button } from 'react-bootstrap';
import './Cart.css';

const Cart = () => {
    const [processingOrder, setProcessingOrder] = useState(false);
    const [contact, setContact] = useState({
        name:'',
        phone:'',
        address:'',
        comment:''
    });

    const { products, removeItem, getTotal } = useContext(CartContext)
    const contactFormRef = () => {
        setProcessingOrder(true)

        const objOrder = {
            buyer: contact,
            item: products,
            total: getTotal(),
            date: new Date()
        }

        console.log(objOrder)

        setProcessingOrder(false)
    }

    if(processingOrder) {
        return <h1>Se está procesando su orden</h1>
    }

    if(products.length === 0) {
        return <h1>No hay productos en el carrito</h1>
    }

    const handleRemoveItem = (id) => {
        removeItem(id)
    }

    return <div>
            <h1>Tu carrito</h1>  
            <div className="carrito">     
            {
                products.map(prod => {
                    return (
                        
                        <Card className='card-cart' key={prod.id} style={{margin:'15px'}}>
                            <Card.Img variant="top" src={prod.img} alt="img-item" className='card-img-cart'/>
                            <Card.Body className='card-body-cart'>
                                <Card.Title className='card-title-cart'>{prod.titulo}</Card.Title>
                                <Card.Subtitle className='card-subt-cart'>{prod.subtitulo}</Card.Subtitle>
                                <Card.Text className='card-text-cart'>
                                     Precio unidad: $ {prod.precio}
                                </Card.Text>   
                                <Card.Text className='card-text-cart'>
                                    Categoría: {prod.category}
                                </Card.Text>   
                                <Card.Text className='card-text-cart'>
                                    Cantidad {prod.quantity}
                                </Card.Text>   
                                <Button className='btnCart' variant="outline-dark"onClick={() => handleRemoveItem(prod.id, prod.titulo)}>X</Button>
                            </Card.Body>
                        </Card>     
                    )            
                })
            }
            </div> 
            <h1>Total a pagar: ${getTotal()}</h1>
        </div>  
}

export default Cart