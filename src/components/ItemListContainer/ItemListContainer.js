import React, { useState, useEffect } from "react";
import './ItemListContainer.css';
import { ItemList } from "./ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import { getProducts } from "../../asyncmock";

export const ItemListContainer = () => {

    const [products, setProducts] = useState([]); 

    const cambioData = () => {
        getProducts().then(data => {
            const dataNew = data.filter(element => element.mostrar)
            setProducts(dataNew)
        })
    }

    useEffect(() => {
        cambioData();
    },[])

    return <div className="ItemListContainer">
        {products.length === 0 ? (<Spinner animation="border"/>) : (  
            <ItemList products={products}/>   
        )} 
    </div>
}