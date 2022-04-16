import React from 'react';

const CartItem = ({ item }) => {
    const { name, img, quantity } = item
    return (
        <div className="d-flex w-100 justify-content-between">
            <div className="d-flex align-items-center">
                <img src={img} alt="" className="rounded-circle" height="60" />
                <h5 className="ms-1">{name}</h5>
            </div>
            <h5>{quantity}</h5>
        </div>
    );
};

export default CartItem;