import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import EachOrder from '../../part-components/EachOrder/EachOrder';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [owner, setOwner] = useState({})
    const [owenerName, setOwnerName] = useState('')
    const [orderLength, setOrderLength] = useState(0)
    const { name, allOrder } = owner || {}
    useEffect(() => {
        if (allOrder) {
            setOrderLength(allOrder.length)
            setOwnerName(allOrder[0].formInfo.name || '')
        }
    }, [allOrder])
    useEffect(() => {
        async function getUserOrder() {
            const response = await axios.get(`http://localhost:5000/user/${user.email}`)
            return response
        }
        getUserOrder()
            .then((res) => {
                setOwner(res.data)
            })
            .catch((err) => {
                toast.error(err, {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })
    }, [user])
    return (
        <div style={{ marginTop: "80px", minHeight: "600px" }}>
            <h1 className="text-center">This is order page of {name || owenerName}</h1>
            <h2 className="text-center">You have {orderLength} orders</h2>
            <div className="w-100 row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 container-fluid mx-auto">
                {
                    allOrder?.map(order => <EachOrder eachOrder={order} key={allOrder.indexOf(order) + 1} no={allOrder.indexOf(order) + 1}></EachOrder>)
                }
            </div>
            {!allOrder && <h1 className="text-center">No Order Placed</h1>}
        </div>
    );
};

export default Orders;