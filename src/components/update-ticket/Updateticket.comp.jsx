import React from 'react';
import PropTypes from 'prop-types'
import {Form,Button} from 'react-bootstrap'
export const Updateticket=({msg,handleOnchange,handleOnsubmit})=>{
    return(
<Form onSubmit={handleOnsubmit}>
    <Form.Label>Reply</Form.Label>
    <Form.Text>Please reply your message here</Form.Text>
    <Form.Control 
    value={msg}
    as="textarea" row ="5" name ="Details"
    onChange={handleOnchange}
    />
    <div className="text-right mt-3 mb-3">
    <Button variant="info " type="submit">
        Reply
    </Button>
    </div>
</Form>
    )
}
Updateticket.propTypes={
    msg:PropTypes.string.isRequired,
    handleOnchange:PropTypes.func.isRequired,
    handleOnsubmit:PropTypes.func.isRequired,


}