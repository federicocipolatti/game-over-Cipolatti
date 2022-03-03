import { useContext } from "react"
import { CartContextProvider } from "../../context/CartContext/CartContext"

const Cart = () => {
    const { products, removeItem, getTotal } = useContext(CartContextProvider)

    if(products.length === 0) {
        return <h1>No hay productos en el carrito</h1>
    }

    const handleRemoveItem = (id, titulo) => {
        removeItem(id)
    }

    return <>
            <h1>Cart</h1>
            {
                products.map(prod => {
                    return (
                        <div key={prod.id} style={{ display: 'flex'}}>
                            <h3>{prod.titulo}</h3>
                            <h3>Cantidad {prod.quantity}</h3>
                            <button onClick={() => handleRemoveItem(prod.id, prod.titulo)}>X</button>
                        </div>
                    )
            })}
            <h1>Total: ${getTotal()}</h1>
        </>
    
}

export default Cart