import React from "react";
import { BsCart4 } from "react-icons/bs";
import './CartWidget.css';
import { useContext } from "react";
import CartContext from "../../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return(
        <Link to="/cart">  
            <Button variant="outline-dark" disabled={getQuantity()<=0}>
                <div className="cartWidget"> 
                    <BsCart4 size="50"/>
                    <h2>{getQuantity()}</h2>
                </div>  
            </Button>  
        </Link> 
    )   
}