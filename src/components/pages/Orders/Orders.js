import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

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
        <div style={{ marginTop: "80px" }}>
            <h1 className="text-center">This is order page of {name || owenerName}</h1>
            <h2 className="text-center">You have {orderLength} orders</h2>
        </div>
    );
};

export default Orders;