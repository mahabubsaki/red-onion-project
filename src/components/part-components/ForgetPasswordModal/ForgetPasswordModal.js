import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const ForgetPasswordModal = (props) => {
    const [resetEmail, setResetEmail] = props.reset
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
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    onChange={(e) => setResetEmail(e.target.value)}
                />
                <Button variant="primary" className="my-3 d-block mx-auto" disabled={!resetEmail}>Reset</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ForgetPasswordModal;