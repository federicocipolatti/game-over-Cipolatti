import React, { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import { getProduct } from "../../asyncmock";

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]); 

    useEffect(() => {
        getProduct().then((res) => {
            setProduct(res)
        })
    },[])

    return (
        <div className="ItemDetailContainer">
            {product.length === 0 ? (<Spinner animation="border"/>) : (  
                <ItemDetail product={product}/>   
            )} 
        </div>
    )
}