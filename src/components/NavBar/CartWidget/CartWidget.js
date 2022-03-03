import React from "react";
import { BsCart4 } from "react-icons/bs";
import './CartWidget.css';
import { useContext } from "react";
import CartContext from '../../../context/CartContext/CartContext';

export const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return<div className="cart">
         <BsCart4 size="50"/>
        <h2>{getQuantity()}</h2>
    </div>   
}