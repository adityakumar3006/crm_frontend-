
import React, { useState,useEffect } from 'react'
import  {Row,Col,Container,Button} from "react-bootstrap";
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import tickets from '../../assets/data/dummy-ticket.json'
import { Messagehistory } from '../../components/message-history/Messagehistory.comp';
import { Updateticket } from '../../components/update-ticket/Updateticket.comp';
import { useParams } from 'react-router-dom';

// const ticket =tickets[0]
export const Ticket =()=>{
    const {tid}=useParams()
    const [message,setmessage]=useState('')
     const [ticket,setticket]=useState('')
    useEffect((
       
    )=>{ for(let i=0;i<tickets.length;i++)
        {
            if(tickets[i].id==tid)
            {
                setticket(tickets[i])
                continue
            }
        }},[message,tid]);
    const handleOnchange=(e)=>{
        setmessage(e.target.value);
        
    }
    const handleOnsubmit =()=>{
        alert("form submitted");
    }
    return (
<Container>
    <Row>

    
    <Col>
    <PageBreadcrumb page=" Ticket "/>
    </Col>
</Row>
<Row>

    
    <Col className='text-weight-bolder text-secondary'>
        {tid}
   <div className="subject">subject:{ticket.subject}</div>
   <div className="date">Ticket opened:{ticket.createdAt}</div>
   <div className="status">status:{ticket.status}</div>
    </Col>
      <Col className='text-right'>
<Button variant ="outline-info"> Close Ticket</Button>
    </Col>
</Row>
<Row className='mt-5'>
    <Col>
    {ticket.hisory && <Messagehistory  msg={ticket["history "]}/>}
   
    </Col>
</Row>
<hr />
<Row className='mt-5'>
    <Col>
   <Updateticket  msg={message} handleOnchange={handleOnchange}
   handleOnsubmit={handleOnsubmit}/>
    </Col>
</Row>
</Container>
    )
}