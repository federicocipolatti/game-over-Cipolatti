import React, { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase";

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({}); 
    const [loading, setLoading] = useState(true); 
    const {productId} = useParams(); 

    useEffect(() => {
        const docRef = doc(firestoreDb, 'products', productId)

        getDoc(docRef)
            .then(res => {
                const product = {id: res.id, ...res.data()}
                setProduct(product)
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