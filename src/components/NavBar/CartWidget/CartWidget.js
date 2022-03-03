import React from "react";
import { BsCart4 } from "react-icons/bs";
import './CartWidget.css';
import { useContext } from "react";
import CartContext from '../../../context/CartContext/CartContext';

export const CartWidget = () => {

    const { getQty } = useContext(CartContext)

    return<div className="cart">
         <BsCart4 size="50"/>
        
    </div>   
}