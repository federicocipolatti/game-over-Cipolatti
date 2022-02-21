import React, { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import { getProduct } from "../../asyncmock";

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({}); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        getProduct
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    },[])

    return (
        <div className="ItemListContainer">
            {loading ? (
                <Spinner animation="border"/>
            ) : (
                <ItemDetail product={product}/>
            )}
        </div>
    )
}