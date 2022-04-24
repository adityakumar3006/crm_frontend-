import React from 'react';
import  PropTypes  from 'prop-types';
import { Form, Row, Col } from 'react-bootstrap';
export const Searchform = ({handleOnchange,str}) => {
    return (
        <div>
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm="2">search:</Form.Label>
                <Col sm="10">
                    <Form.Control
                        name="searchstr"
                        onChange={handleOnchange}
                        value={str}
                        placeholder='search..' />
                </Col>
            </Form.Group>
        </Form>
 </div>
    )
};
Searchform.propTypes={
    handleOnchange:PropTypes.func.isRequired,
    str:PropTypes.string.isRequired


}