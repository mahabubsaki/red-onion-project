import React from 'react';
import CartItem from '../CartItem/CartItem';

const Cart = ({ cart, totalCost }) => {
    return (
        <div className="bg-light px-2">
            <h1 className="text-center">Cart Information</h1>
            <div className="d-flex w-100 justify-content-between">
                <h4>Food</h4>
                <h4>Quantity</h4>
            </div>
            {
                cart.map(item => <CartItem key={item.id} item={item}></CartItem>)
            }
            <hr />
            <div className="d-flex w-100 justify-content-between">
                <h4>Total Cost</h4>
                <h4>{totalCost}</h4>
            </div>
        </div>
    );
};

export default Cart;