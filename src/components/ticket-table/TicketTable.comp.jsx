import React  from "react";
import PropTypes from 'prop-types'
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
export const TicketTable=({tickets})=>{
 // if(!tickets.length)
    return(
        <Table striped bordered hover>
            <thead>
               <tr>
                   <th>#</th>
                   <th>subjects</th>
                   <th>status</th>
                   <th>opened date</th>
                   </tr>


            </thead>
            <tbody>
            {tickets.length ? (tickets.map(row => (
                    <tr>
                        <td>{row.id}</td>
                        <td>
                            <Link to ={`/ticket/${row.id}`}>
                            {row.subject}
                            </Link></td>
                        <td>{row.status}</td>
                        <td>{row.createdAt}</td>
                    </tr>
                ))) : (
                    <tr>
                        <td colSpan="4" className='text-center'>No ticket show</td>
                    </tr>
                )}
               
                
                
            </tbody>
          
        </Table>
    );
};
TicketTable.propTypes={
    tickets:PropTypes.array.isRequired
}