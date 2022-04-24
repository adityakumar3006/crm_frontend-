import React, { useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Addticketform } from "../../components/add-ticket-form/Addticketform.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { shortText } from "../../utils/validation";
const initalfrmdt = {
    subject: '',
    issuedate:'',
    detail: '',
}
const initalfrmerror= {
    subject: 'false',
    issuedate: 'false',
    detail: 'false',
}
export const Addticket = () => {

    const [frmdata, setfrmdata] = useState(initalfrmdt)
    const [frmdataerro, setfrmdataerro] = useState(initalfrmerror)  
    useEffect (()=>{},[frmdata,frmdataerro]);


    const handleOnchange = (e) => {
        const { name, value } = e.target
    
        setfrmdata({
            ...frmdata,
            [name]: value
        })
    };
    const handleOnsubmit = async(e) => {
        e.preventDefault()

        setfrmdataerro(initalfrmerror)
        const issubjectvalid=await shortText(frmdata.subject)
    setfrmdataerro({
           ...initalfrmerror,
           subject:!issubjectvalid,
       })
        console.log("form submit request recieved",frmdata)
    }
    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="New ticket" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Addticketform
                        handleOnchange={handleOnchange}
                        handleOnsubmit={handleOnsubmit}
                        frmdt={frmdata} 
                        frmdataerro={frmdataerro}/>
                </Col>
            </Row>
        </Container>

    )
}