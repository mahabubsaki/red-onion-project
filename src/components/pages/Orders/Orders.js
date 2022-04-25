import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [owner, setOwner] = useState({})
    useEffect(() => {
        async function getUserOrder() {
            const response = await axios.get(`http://localhost:5000/users?email=${user.email}&reason=order`)
            return response
        }
        getUserOrder()
            .then((res) => {
                console.log(res);
                setOwner(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [user])
    return (
        <div className="h-auto w-100 d-flex align-items-center flex-column flex-md-row" style={{ marginTop: "80px" }}>
            <h1 className="text-center">This is order page of {owner.name}</h1>
        </div>
    );
};

export default Orders;