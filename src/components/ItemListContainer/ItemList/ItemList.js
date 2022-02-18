import React from 'react';
import { Item } from '../Item/Item';
import './ItemList.css';

export const ItemList = ({ products }) => {

    return (
        <div className='ItemList'>
            <div className='row'>
                {products.map(item => (
                    <div className='col-md-4 item' key={item.id}>
                        <Item item={item}/>
                    </div>   
                    ))
                }
            </div> 
        </div>
    )
}