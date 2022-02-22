import React, { useState, useEffect } from "react";
import './ItemListContainer.css';
import { ItemList } from "./ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import { getProducts } from "../../asyncmock";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {
        getProducts(categoryId)
            .then((products) => {
                setProducts(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    },[categoryId])

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