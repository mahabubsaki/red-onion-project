import React, { useContext } from 'react';
import { ApiContext } from '../../../App';
import CheckoutList from '../../part-components/CheckoutList/CheckoutList';

const Checkout = () => {
    document.title = 'Checkout - Red Onion'
    const { cart } = useContext(ApiContext)
    let quantity = 0;
    let prices = 0;
    let eachPrice;
    for (const item of cart) {
        quantity += item.quantity
        eachPrice = item.quantity * item.prices
        prices += eachPrice
    }
    const tax = prices * 0.05
    let total = prices + tax
    const fee = prices * 0.075
    return (
        <div className="h-auto w-100 d-flex align-items-center" style={{ marginTop: "80px" }}>
            <div className="w-50">
                <h3 className="text-center">Edit delivery address</h3>
                <hr className="border border-3 border-dark w-75 d-block mx-auto" />
                <form>
                    <input type="text" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Name" style={{ backgroundColor: '#F5F5F5' }} />
                    <input type="email" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Email" style={{ backgroundColor: '#F5F5F5' }} />
                    <input type="text" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Flat, Suit or Floor" style={{ backgroundColor: '#F5F5F5' }} required />
                    <input type="text" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Business Name" style={{ backgroundColor: '#F5F5F5' }} required />
                    <input type="number" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Mobile No" style={{ backgroundColor: '#F5F5F5' }} required />
                    <textarea className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" style={{ backgroundColor: '#F5F5F5', resize: 'none', height: '150px' }} placeholder="Add delivery instructor" required></textarea>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success" type="submit">Save</button>
                    </div>
                </form>
            </div>
            <div className="w-50 d-flex justify-content-center">
                <div className="w-75 mx-auto">
                    <div>
                        <p>From <b>Hazi Nawab Ali Road</b></p>
                        <p><b>Boro Dewra, Tongi, Gazipur-1711</b></p>
                        <p>Arriving time arround <b>20-30 min</b></p>
                        <p>Fixed <b>$2</b> Delivery fee after 10 items purchase</p>
                    </div>
                    <div>
                        {cart.map(item => <CheckoutList key={item.id}
                            item={item}></CheckoutList>)}
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5>SubTotal of {quantity} item:</h5>
                            <h5>Tax:</h5>
                            <h5>Delivery Fee:</h5>
                            <h5>Total:</h5>
                        </div>
                        <div>
                            <h5>${prices.toFixed(2)}</h5>
                            <h5>${tax.toFixed(2)}</h5>
                            <h5>${quantity >= 10 ? 2 : fee.toFixed(2)}</h5>
                            <h5>${quantity >= 10 ? (Number(total.toFixed(2)) + 2).toFixed(2) : (Number(total.toFixed(2)) + Number(fee.toFixed(2))).toFixed(2)}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;