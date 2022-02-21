import React, { useState, useEffect } from "react";
import './ItemListContainer.css';
import { ItemList } from "./ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import { getProducts } from "../../asyncmock";

export const ItemListContainer = () => {

    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true);

    const cambioData = () => {
        getProducts().then(data => {
            const dataNew = data.filter(element => element.mostrar)
            setProducts(dataNew)
        })
    }

    useEffect(() => {
        getProducts
            .then((res) => {
                setProducts(res);
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
                <ItemList products={products}/>
            )}
        </div>
    )
}