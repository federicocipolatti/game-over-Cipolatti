import React from 'react';
import './ItemDetail.css';
import { Card, Button } from 'react-bootstrap';
import { Detail } from '../Detail/Detail';

export const ItemDetail = ({productos}) => {

    return (
        <div className='ItemDetail'>
            {productos.map(detail => (
                    <div className='col-md-4 item' key={detail.id}>
                        <Detail detail={detail}/>
                    </div>   
                    ))
                }
        </div>
    )
}