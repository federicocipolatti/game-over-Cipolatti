import React, { useState, useEffect } from "react";
import './ItemListContainer.css';
import { ItemList } from "./ItemList/ItemList";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore"; 
import { firestoreDb } from "../../services/firebase/firebase";

export const ItemListContainer = () => {

    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        const collectionRef = categoryId ? 
            query(collection(firestoreDb, 'products'), where('category', '==', categoryId)) :
            collection(firestoreDb, 'products') 

        getDocs(collectionRef)
        .then(res => {
            const products = res.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
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