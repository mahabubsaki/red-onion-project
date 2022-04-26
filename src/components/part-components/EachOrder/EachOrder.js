import React, { useEffect, useState } from 'react';
import './EachOrder.css'

const EachOrder = ({ eachOrder, no }) => {
    const [totalOrder, setTotalOrder] = useState(0)
    const [time, setTime] = useState(0)
    const [date, setDate] = useState(0)
    const { formInfo, order } = eachOrder || {}
    useEffect(() => {
        if (order) {
            setTotalOrder(Object.values(order).reduce((acc, item) => acc + item, 0))
        }
    }, [order, formInfo])
    console.log(order)
    console.log(formInfo)
    return (
        <div className="w-100 border border-dark d-flex mb-1 order">
            <h3 className="border-end border-dark px-3">{no}</h3>
            <h3 className="border-end border-dark px-3">{totalOrder}</h3>
        </div>
    );
};

export default EachOrder;