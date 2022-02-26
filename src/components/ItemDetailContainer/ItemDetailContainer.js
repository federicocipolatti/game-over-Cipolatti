import React, { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { Spinner, Button } from "react-bootstrap";
import { getProduct } from "../../asyncmock";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({}); 
    const [loading, setLoading] = useState(true); 
    const {productId} = useParams(); 

    useEffect(() => {
        getProduct(productId)
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    },[productId])
   
    return (
        <div className="ItemListContainer">
            
            {loading ? (
                <Spinner animation="border"/>
            ) : (
                <div>
                    <ItemDetail product={product}/>  
                </div> 
            )}
        </div>
    )
}