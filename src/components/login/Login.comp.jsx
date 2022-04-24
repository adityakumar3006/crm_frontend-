
import React from "react";
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export const Loginform = ({ handleOnchange, handleOnsubmit, formswitcher, email, pass }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 classname="test-info text-center">Client login</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnsubmit}>
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
                        <Form.Group>
                            <Form.Label>password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={pass}
                                onChange={handleOnchange}
                                placeholder="enter password"
                                required

                            />

                        </Form.Group>
                        <Button type="submit">Login</Button>

                    </Form>
                    <hr />

                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#" onClick={()=>formswitcher('reset')}>Forgot password</a>
                </Col>
            </Row>
        </Container>
    );


};
Loginform.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
    handleOnsubmit: PropTypes.func.isRequired,
    formswitcher: PropTypes.func.isRequired




}