import { TrashIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import { ApiContext } from '../../../App';
import './CartItem.css'

const CartItem = ({ item }) => {
    const { name, img, quantity } = item
    const { deleteSingle } = useContext(ApiContext)
    return (
        <div className="d-flex w-100 justify-content-between align-items-center border px-1">
            <div className="d-flex align-items-center align-items-center">
                <TrashIcon id="trash-icon" onClick={() => deleteSingle(item)}></TrashIcon>
                <img src={img} alt="" className="rounded-circle" height="30" />
                <h5 className="ms-1">{name}</h5>
            </div>
            <h5>{quantity}</h5>
        </div>
    );
};

export default CartItem;