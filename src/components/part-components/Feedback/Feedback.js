import React from 'react';
import icon1 from '../../../assets/Group 204.png'
import feedback1 from '../../../assets/feedback1.png'
import icon2 from '../../../assets/Group 245.png'
import feedback2 from '../../../assets/feedback-2.png'
import icon3 from '../../../assets/Group 1133.png'
import feedback3 from '../../../assets/feedback-3.png'
import { ArrowCircleRightIcon } from '@heroicons/react/solid';

const Feedback = () => {
    return (
        <div className="container">
            <h1>Why you choose us</h1>
            <div className="w-50 mb-5">
                <p>
                    We are giving one of the best resturant service in our area.Our customers are so relaiable and flexibility. We have some extra feature and support.
                </p>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={feedback1} className="card-img-top img-fluid" alt="feedback" />
                        <div className="card-body d-flex align-items-center mt-5">
                            <div className="me-2">
                                <img src={icon1} alt="" />
                            </div>
                            <div>
                                <p className="card-title">Fast Delivery</p>
                                <p className="card-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam reprehenderit labore, ut delectus voluptas laborum beatae quo sit aliquid molestiae atque magnam quod sunt consectetur sapiente debitis praesentium sed?
                                </p>
                                <div className="d-flex">
                                    <button className="bg-white border-0">
                                        <span className="me-2 text-primary">See More</span>
                                        <ArrowCircleRightIcon style={{ height: '32px' }} className="text-success"></ArrowCircleRightIcon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={feedback3} className="card-img-top img-fluid" alt="feedback" />
                        <div className="card-body d-flex align-items-center">
                            <div className="me-2">
                                <img src={icon3} alt="" />
                            </div>
                            <div>
                                <p className="card-title">Fast Delivery</p>
                                <p className="card-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam reprehenderit labore, ut delectus voluptas laborum beatae quo sit aliquid molestiae atque magnam quod sunt consectetur sapiente debitis praesentium sed?
                                </p>
                                <div className="d-flex">
                                    <button className="bg-white border-0">
                                        <span className="me-2 text-primary">See More</span>
                                        <ArrowCircleRightIcon style={{ height: '32px' }} className="text-success"></ArrowCircleRightIcon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={feedback2} className="card-img-top img-fluid" alt="feedback" />
                        <div className="card-body d-flex align-items-center mt-5">
                            <div className="me-2">
                                <img src={icon2} alt="" />
                            </div>
                            <div>
                                <p className="card-title">Fast Delivery</p>
                                <p className="card-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quam reprehenderit labore, ut delectus voluptas laborum beatae quo sit aliquid molestiae atque magnam quod sunt consectetur sapiente debitis praesentium sed?
                                </p>
                                <div className="d-flex">
                                    <button className="bg-white border-0">
                                        <span className="me-2 text-primary">See More</span>
                                        <ArrowCircleRightIcon style={{ height: '32px' }} className="text-success"></ArrowCircleRightIcon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;