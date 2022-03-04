import { createContext, useState } from 'react';
import './CartContext.css';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [products, setProducts] = useState([])  

    const addItem = (product, quantity) => {
        const productToAdd = {
            ...product,
            quantity
        } 

        isInCart(product.id) ? updateItemInCart(productToAdd) : addItemToCart(productToAdd) 
    }

    const isInCart = (id) => {
        return products.some(prod => prod.id === id)
    }

    const updateItemInCart = (productToAdd) => {
        const updatedCart = products.map(prod => {
            if(prod.id === productToAdd.id) {
                const updatedProduct = {
                    ...prod,
                    quantity: prod.quantity + productToAdd.quantity
                }
                return updatedProduct
            } else {
                return prod
            }
        })

        setProducts(updatedCart)
    }

    const addItemToCart = (productToAdd) => {
        setProducts([...products, productToAdd])
    }

    const removeItem = (id) => {
        const newProducts = products.filter(prod => prod.id !== id)
        setProducts(newProducts)
    }

    const clearCart = () => {
        setProducts([])
    }

    const getTotal = () => {
        let total = 0
        products.forEach(prod => {
            total = total + prod.precio * prod.quantity
        })
        return total
    }

    const getQuantity = () => {
        let count = 0
        products.forEach(prod => {
            count = count + prod.quantity
        })
        return count
    }

    return (
        <CartContext.Provider value={{
            products,
            addItem,
            removeItem,
            clearCart,
            getTotal,
            getQuantity
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;