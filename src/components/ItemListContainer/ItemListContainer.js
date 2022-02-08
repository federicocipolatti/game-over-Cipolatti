import React from "react";
import './ItemListContainer.css';
import { ItemCount } from "../ItemCuont/ItemCount";

export const ItemListContainer = ({ mensaje }) => {
    return (
        <div className="ItemListContainer">
            <h1>{ mensaje }</h1>
            <ItemCount stock='15'/>
        </div>   
    );
}