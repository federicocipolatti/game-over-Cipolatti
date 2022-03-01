import { createContext, useState, useEffect } from 'react';
import './CartContext.css';

const Context = createContext();

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const addToCart = (product, qty) => {
        isInCart(product.id)
            ? sumarCantidad(product, qty)
            : setCart([...cart, { ...product, qty }]);
    };

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    };

    const sumarCantidad = (products, qty) => {
        const newCart = cart.map((prod) => {
            if (prod.id === products.id) {
                const newProduct = {
                    ...prod,
                    qty: prod.qty + qty,
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        setCart(newCart);
    };


    return(
        <Context.Provider value={{ cart, addToCart }}>
            {children}
        </Context.Provider>
    )
}

export default Context;