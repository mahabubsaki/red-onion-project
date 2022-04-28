import axios from 'axios';
import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const ForgetPasswordModal = (props) => {
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [resetEmail, setResetEmail] = props.reset
    const sendResetMail = async () => {
        await sendPasswordResetEmail(resetEmail)
        const { data } = await axios.post(`https://quiet-tor-13369.herokuapp.com/user?email=${resetEmail}`)
        if (data.result === 'success') {
            toast.success('Sent password reset email successfully', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            props.onHide()
        }
        else {
            toast.error('No user found with given email', {
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
    if (sending) {
        return <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>;
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Reset Your Password
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="mx-auto w-75">
                <Form.Label htmlFor="inputPassword5">Email</Form.Label>
                <Form.Control
                    type="email"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    onChange={(e) => setResetEmail(e.target.value)}
                />
                <Button variant="primary" className="my-3 d-block mx-auto" disabled={!resetEmail} onClick={sendResetMail}>Reset</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ForgetPasswordModal;