import React, { useEffect, useState } from 'react';
import './EachOrder.css'

const EachOrder = ({ eachOrder, no, owenerName }) => {
    const [totalOrder, setTotalOrder] = useState(0)
    const [time, setTime] = useState('')
    const [id, setId] = useState('')
    const [date, setDate] = useState('')
    const [floor, setFloor] = useState('')
    const [area, setArea] = useState('')
    const [mobile, setMobile] = useState('')
    const [cost, setCost] = useState('')
    const { formInfo, order } = eachOrder || {}
    useEffect(() => {
        if (order) {
            setTotalOrder(Object.values(order).reduce((acc, item) => acc + item, 0))
        }
        if (formInfo) {
            const { date, time, orderId, floor, area, mobile, cost } = formInfo
            setDate(date)
            setId(orderId)
            setTime(time)
            setFloor(floor)
            setArea(area)
            setMobile(mobile)
            setCost(cost)
        }
    }, [order, formInfo])
    return (
        <div className="col border border-dark mb-1 order py-2 rounded-3 card">
            <div className="text-center"><span className="px-4 py-2 bg-success rounded-circle">{no}</span></div>
            <h1 className="text-center">Order Id #{id}</h1>
            <h3 className="text-center">{owenerName}</h3>
            <h3 className="text-center">Status : <span className="text-warning">Pending</span></h3>
            <h3 className="text-center">Ordered on {date} {time}</h3>
            <h3 className="text-center">Total Foods : {totalOrder}</h3>
            <h3 className="text-center">Total Cost : <span className="text-warning">${cost}</span></h3>
            <h4>Additional Info : </h4>
            <p>Floor : {floor}</p>
            <p>Area : {area}</p>
            <p>Mobile : {mobile}</p>
            <button className='d-block mx-auto btn btn-primary'>See Details</button>
        </div>
    );
};

export default EachOrder;