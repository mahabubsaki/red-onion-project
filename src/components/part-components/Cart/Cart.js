import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiContext } from '../../../App';
import CartItem from '../CartItem/CartItem';

const Cart = ({ cart }) => {
    const navigate = useNavigate()
    const { handleClearAll } = useContext(ApiContext)
    return (
        <div className="bg-light px-2">
            <h2 className="text-center mb-3">Cart Information</h2>
            <div className="d-flex w-100 mx-auto justify-content-between mb-3">
                <button className="btn btn-success" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
                <button className="btn btn-danger" onClick={handleClearAll}>Clear All</button>
            </div>
            <div className="d-flex w-100 justify-content-between">
                <h4 className='ms-5'>Food</h4>
                <h4>Quantity</h4>
            </div>
            {
                cart.map(item => <CartItem key={item.id} item={item}></CartItem>)
            }
        </div>
    );
};

export default Cart;