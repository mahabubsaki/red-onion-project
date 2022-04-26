import React, { useContext, useState } from 'react';
import { ApiContext } from '../../../App';
import './Checkout.css'
import CheckoutList from '../../part-components/CheckoutList/CheckoutList';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate()
    const [formOk, setFormOk] = useState(false)
    const [formInfo, setFormInfo] = useState({})
    const [user] = useAuthState(auth);
    document.title = 'Checkout - Red Onion'
    const { cart, handleClearAll } = useContext(ApiContext)
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
    const handleForm = (e) => {
        e.preventDefault()
        const formInfo = {
            name: e.target.name.value || '',
            floor: e.target.floor.value,
            area: e.target.area.value,
            mobile: e.target.mobile.value,
            description: e.target.description.value,
            date: `${new Date().getUTCDate()}/${new Date().getUTCMonth() + 1}/${new Date().getUTCFullYear()}`,
            time: `${new Date().toLocaleTimeString()}`
        }
        setFormInfo(formInfo)
        setFormOk(true)
        toast.success('User info saved successfully', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        e.target.reset()
    }
    const handlePlaceOrder = () => {
        const order = JSON.parse(localStorage.getItem('cart'))
        if (!order || order === {}) {
            toast.error('Please add something to cart', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            setFormOk(false)
            return
        }
        const orderOverview = { order, formInfo }
        async function updateOrder() {
            try {
                const response = await axios.post(`http://localhost:5000/users?email=${user?.email}&reason=order`, orderOverview)
                return response
            }
            catch (err) {
                toast.error(err, {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        }
        updateOrder()
            .then(res => {
                localStorage.clear('cart')
                handleClearAll()
                navigate('/orders')
                toast.success('Ordered Successfully', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })
    }
    return (
        <div className="h-auto w-100 d-flex align-items-center flex-column flex-md-row" style={{ marginTop: "80px" }}>
            <div className="side-container">
                <h3 className="text-center">Edit delivery address</h3>
                <hr className="border border-3 border-dark w-75 d-block mx-auto" />
                <form onSubmit={handleForm}>
                    {user?.displayName ?
                        <input type="text" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Name" style={{ backgroundColor: '#F5F5F5' }} value={user?.displayName} disabled readOnly />
                        :
                        <input type="text" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Name" style={{ backgroundColor: '#F5F5F5' }} name="name" />
                    }
                    <input type="email" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Email" style={{ backgroundColor: '#F5F5F5' }} value={user?.email} disabled readOnly />
                    <input type="text" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Flat, Suit or Floor" style={{ backgroundColor: '#F5F5F5' }} name="floor" required />
                    <input type="text" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Area Name" style={{ backgroundColor: '#F5F5F5' }} name="area" required />
                    <input type="number" className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" placeholder="Mobile No" style={{ backgroundColor: '#F5F5F5' }} required name="mobile" />
                    <textarea className="w-75 mx-auto d-block py-2 px-4 border-0 mb-2" style={{ backgroundColor: '#F5F5F5', resize: 'none', height: '150px' }} placeholder="Add delivery instructor" name="description" required></textarea>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success" type="submit" >Save</button>
                    </div>
                </form>
            </div>
            <div className="d-flex justify-content-center side-container">
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
                    <button className="w-75 d-block mx-auto btn btn-success" onClick={handlePlaceOrder} disabled={!formOk}>Place Order</button>
                    {!formOk && <p className="text-center text-danger">Please fullfill the for order</p>}
                </div>
            </div>
        </div>
    );
};

export default Checkout;