import React, { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import { getProduct } from "../../asyncmock";

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({}); 

    useEffect(() => {
        getProduct().then((res) => {
            setProduct(res)
        })
    },[])

    const loading = () => {
        <Spinner animation="border"/>
    }

    return (
        <div className="ItemDetailContainer"> 
            <ItemDetail product={product}/>           
        </div>
    )
}