import React, { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import { getProduct } from "../../asyncmock";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({}); 
    const [loading, setLoading] = useState(true); 
    const [counter, setCounter] = useState('button')
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

    const handleCount = () => {
        if(counter === 'button'){
            setCounter('input')
        } else {
            setCounter('button')
        }
    }

    return (
        <div className="ItemListContainer">
            <button onClick={handleCount}>Cambiar count</button>
            {loading ? (
                <Spinner animation="border"/>
            ) : (
                <ItemDetail product={product} inputType={counter}/>
            )}
        </div>
    )
}