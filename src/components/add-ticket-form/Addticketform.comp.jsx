import React from "react";
import { Form, Button, Row, Col } from 'react-bootstrap'
import './style.css'
import PropTypes from 'prop-types'

export const Addticketform = ({ handleOnsubmit, handleOnchange, frmdt, frmdataerro }) => {

    return (

        <div className=" mt-3 jumbotron  bg-light">
            <h1 className="text-info text-center"> Add new ticket</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnsubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={6} >Subject</Form.Label>
                    <Col sm={12}>
                        <Form.Control

                            name="subject"
                            value={frmdt.subject}
                            onChange={handleOnchange}
                            maxLength="100"
                            placeholder="subject"
                            required

                        />
                        <Form.Text className="text-danger" >{frmdataerro.subject && "subject is required"}</Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label column sm={6}>Issue found</Form.Label>
                    <Col sm={12}>

                        <Form.Control
                            type="date"
                            name="issuedate"
                            value={frmdt.issuedate}
                            onChange={handleOnchange}
                            required

                        /></Col>

                </Form.Group>
                <Form.Group>
                    <Form.Label>password</Form.Label>
                    <Form.Control
                        as="textarea"

                        name="detail"
                        value={frmdt.detail}
                        onChange={handleOnchange}
                        rows="5"
                        required

                    />

                </Form.Group>
                <Button type="submit" variant="info" block>Login</Button>

            </Form>
        </div>
    )
}
Addticketform.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    handleOnsubmit: PropTypes.func.isRequired,
    frmdt: PropTypes.object.isRequired,
    frmdataerro: PropTypes.object.isRequired


}