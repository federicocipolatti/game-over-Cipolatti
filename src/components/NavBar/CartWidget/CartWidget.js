import React from "react";
import { BsCart4 } from "react-icons/bs";
import './CartWidget.css';

export const CartWidget = () => {
    return<div className="cart">
         <BsCart4 size="50"/>
         <h2>0</h2>
    </div>   
}