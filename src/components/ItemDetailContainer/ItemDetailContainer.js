import React, { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProductById } from '../../services/firebase/firebase'
import { useNotificationServices } from "../../services/Notifications/NotificationServices";

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({}); 

    const [loading, setLoading] = useState(true); 

    const {productId} = useParams(); 
    
    const { setNotification } = useNotificationServices();

    useEffect(() => {
        setLoading(true)

        getProductById(productId).then(response => {
            setProduct(response)
        }).catch((error) => {
            setNotification('error',`Error buscando producto: ${error}`)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct()
        })

    }, [productId]) // eslint-disable-line
   
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