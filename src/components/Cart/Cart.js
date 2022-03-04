import { useContext } from "react"
import CartContext from "../../context/CartContext/CartContext"
import { Button } from 'react-bootstrap';

const Cart = () => {
    const { products, removeItem, getTotal } = useContext(CartContext)
    console.log(products)

    if(products.length === 0) {
        return <h1>No hay productos en el carrito</h1>
    }

    const handleRemoveItem = (id) => {
        removeItem(id)
    }

    return <>
            <h1>Cart</h1>
            {
                products.map(prod => {
                    console.log(prod)
                    return (
                        <div key={prod.id}>
                            <h3>{prod.titulo}</h3>
                            <h3>Cantidad {prod.quantity}</h3>
                            <Button className='btnCart' variant="outline-dark"onClick={() => handleRemoveItem(prod.id, prod.titulo)}>X</Button>
                        </div>
                    )
                })
            }
            <h1>Total: ${getTotal()}</h1>
        </>
    
}

export default Cart