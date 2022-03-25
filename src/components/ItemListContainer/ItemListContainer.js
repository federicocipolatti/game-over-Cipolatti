import React, { useState, useEffect } from "react";
import './ItemListContainer.css';
import { ItemList } from "./ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProducts } from '../../services/firebase/firebase'
import { useNotificationServices } from "../../services/Notifications/NotificationServices";

export const ItemListContainer = () => {

    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    const { setNotification } = useNotificationServices();

    useEffect(() => {
        setLoading(true)

        getProducts(categoryId).then(response => {
            setProducts(response)
        }).catch((error) => {
            setNotification('error', error)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducts()
        })          
    }, [categoryId]) // eslint-disable-line

    return (
        <div className="ItemListContainer">
            {loading ? (
                <Spinner animation="border"/>
            ) : (
                <ItemList products={products}/>
            )}
        </div>
    )
}