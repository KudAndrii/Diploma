import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { userService } from "../App";

type formControl = {
    login: { value: string };
    password: { value: string };
};

const LoginComponent = observer((): JSX.Element => {
    const handleClose = () => (userService.modalFlag = false);
    return (
        <>
            <Modal show={userService.modalFlag} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Please enter your login and password!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const target = e.target as typeof e.target &
                                formControl;

                            const login = target.login.value;
                            const password = target.password.value;

                            userService.Login(login, password);

                            handleClose();
                        }}
                    >
                        <Form.Group className="mb-3" controlId="login">
                            <Form.Label>Login</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="user"
                                name="login"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="1234"
                                name="password"
                                autoFocus
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
});

export default LoginComponent;
