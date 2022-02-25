import React, { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { Spinner, Button } from "react-bootstrap";
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
            
            {loading ? (
                <Spinner animation="border"/>
            ) : (
                <div>
                    <ItemDetail product={product} inputType={counter}/>  
                    <Button className='btnCart' variant="outline-dark" onClick={handleCount}>AGREGAR CANTIDAD</Button>
                </div> 
            )}
        </div>
    )
}