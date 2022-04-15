import React from 'react';
import logo from '../../../assets/logo2.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="w-100 bg-dark text-white py-4 mx-auto container-fluid" id="footer-contaner">
            <div className="row row-cols-3">
                <div>
                    <img src={logo} alt="" style={{ height: "32px" }} />
                </div>
                <div>
                    <p>About Our Food</p>
                    <p>Read Our Blogs</p>
                    <p>Sign Up To Deliver</p>
                    <p>Add Your Restaurant</p>
                </div>
                <div>
                    <p>Get Help</p>
                    <p>Read FAQs</p>
                    <p>View all cities</p>
                    <p>Restaurants near me</p>
                </div>
            </div>
            <div className="d-flex justify-content-between flex-md-row flex-column">
                <p className="mb-3 mb-md-0">Copyright &copy; {new Date().getFullYear()} Red Onion</p>
                <div className="d-flex justify-content-between flex-md-row flex-column w-50">
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;