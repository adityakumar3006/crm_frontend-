
import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export const Resetpassword = ({ handleOnchange, formswitcher, handleOnresetsubmit, email }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 classname="test-info text-center">Reset password</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnresetsubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleOnchange}
                                placeholder=" enter email"
                                required

                            />

                        </Form.Group>


                        <Button type="submit">Reset Password</Button>

                    </Form>
                    <hr />

                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#" onClick={() => formswitcher("login")}>Loging now</a>
                </Col>
            </Row>
        </Container>
    );


};
Resetpassword.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    formswitcher: PropTypes.func.isRequired,
    handleOnsubmit: PropTypes.func.isRequired


}