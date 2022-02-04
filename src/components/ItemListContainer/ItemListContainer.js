import React from "react";
import './ItemListContainer.css';

export const ItemListContainer = ({ mensaje }) => {
    return<>
        <h1>{ mensaje }</h1>
        <img src="img/game.ico" alt='icon'/>
    </>   
}