import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { Searchform } from '../../components/search-form/Searchform.comp';
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import tickets from '../../assets/data/dummy-ticket.json'
import { Link } from "react-router-dom";
export const Ticketlist = () => {
    const [str, setstr] = useState('')
    const [dispTicket, setdispticket] = useState(tickets)


    useEffect(() => {
        
    },
      [str,dispTicket]);
    const handleOnchange =e=> {
        const {value}=e.target;
        setstr(value)
        searchTicket(value)
       
    }
    const searchTicket=(sttr) =>
    {
        const displayTickets=tickets.filter((row) =>row.subject.toLowerCase().includes(sttr.toLowerCase()))
setdispticket(displayTickets)
    }
    return (

        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="Ticket list" />
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                <Link to ="add-ticket">
                    <Button variant="info">Add new ticket</Button>
                    </Link>
 </Col>


                <Col className='text-right'>
                    < Searchform handleOnchange={handleOnchange} str={str} />
                </Col>
            </Row>
            <hr />
            <Row>


                <Col>
                <TicketTable tickets={dispTicket}/>
                </Col>
            </Row>
        </Container>
    )
}