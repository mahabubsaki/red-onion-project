import { MinusIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ApiContext } from '../../../App';
import NotFound from '../NotFound/NotFound';
import './SingleFood.css'

const SingleFood = () => {
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const { handleAddtoCart } = useContext(ApiContext)
    const handleCartAdding = () => {
        handleAddtoCart(id, quantity)
        setQuantity(1)
        toast.success('Successfully Added to cart', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
    const [food, setFood] = useState({})
    useEffect(() => {
        const getSingleFood = async () => {
            setLoading(true)
            const { data } = await axios.get(`http://localhost:5000/food?id=${id}`)
            setFood(data)
            setLoading(false)
        }
        getSingleFood()
    }, [id])
    document.title = `${food?.name} - Red Onion`
    const [quantity, setQuantity] = useState(1)
    const decrease = () => {
        if (quantity !== 1) {
            setQuantity(quantity - 1)
        }
    }
    const { name, description, prices, img, category } = food
    const [notFound, setNotFound] = useState(false)
    useEffect(() => {
        if (!food.name) {
            setNotFound(true)
        }
        else {
            setNotFound(false)
        }
    }, [food, name])
    if (notFound) {
        return <NotFound></NotFound>
    }
    if (loading) {
        return <div style={{ marginTop: "80px", height: "700px" }} className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>;
    }
    return (
        <div className="h-auto" style={{ marginTop: "80px" }}>
            <h1 className="text-center">Category : {category}</h1>
            <div className="d-flex align-items-center flex-column-reverse flex-sm-row">
                <div className="ps-4" id="content">
                    <h1 className="fw-bold">{name}</h1>
                    <p>{description}</p>
                    <div className="d-flex w-75 justify-content-between align-items-start flex-column flex-md-row">
                        <h1 className="fw-bolder">${prices}</h1>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-inline fs-2 py-2 px-3" id='single-food-quantity'>
                            <button className="me-3" onClick={decrease}>
                                <MinusIcon style={{ height: '32px' }}></MinusIcon>
                            </button>
                            <span style={{ height: '32px' }}>{quantity}</span>
                            <button className="ms-3" onClick={() => setQuantity(quantity + 1)}>
                                <PlusIcon style={{ height: '32px' }}></PlusIcon>
                            </button>
                        </div>
                        <button className="text-white bg-danger rounded-pill p-3" onClick={handleCartAdding}>
                            <ShoppingCartIcon className="me-2" style={{ height: '32px' }}></ShoppingCartIcon>
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
                <div className="w-50">
                    <img src={img} alt="food" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default SingleFood;