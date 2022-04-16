import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import React, { useContext, useState } from 'react';
import { ApiContext } from '../../../App';

const CheckoutList = ({ item }) => {
    const { img, prices, name, quantity } = item;
    const { handleQuantity } = useContext(ApiContext)
    const [myQuantity, setMyQuantity] = useState(quantity)
    const decrease = (item) => {
        if (myQuantity !== 1) {
            setMyQuantity(myQuantity - 1)
            handleQuantity(item, myQuantity - 1)
        }
    }
    const increase = (item) => {
        setMyQuantity(myQuantity + 1)
        handleQuantity(item, myQuantity + 1)
    }

    return (
        <div className="p-3 d-flex justify-content-between align-items-center" style={{ backgroundColor: '#F5F5F5', }}>
            <div>
                <img src={img} alt="" width="100px" />
            </div>
            <div className="text-center">
                <h6>{name}</h6>
                <h4 className="text-warning fw-bolder"><b>${prices}</b></h4>
            </div>
            <div className="d-inline fs-2 p-2" id='single-food-quantity'>
                <button className="me-3 bg-light" onClick={() => decrease(item)}>
                    <MinusIcon style={{ height: '32px' }}></MinusIcon>
                </button>
                <span style={{ height: '32px' }}>{myQuantity}</span>
                <button className="ms-3 bg-light" onClick={() => increase(item)}>
                    <PlusIcon style={{ height: '32px' }}></PlusIcon>
                </button>
            </div>
        </div>
    );
};

export default CheckoutList;