import React  from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import {Button} from 'react-bootstrap'
import { Entry } from './pages/entry/Entry.page';
import { Defaultlayout } from './layout/Defaultlayout';
import { Dashboard } from './pages/entry/dashboard/Dashboard.page';
import { Addticket } from './pages/new-ticket/Addticket.page';
import { Ticketlist } from './pages/ticket-listing/Ticketlist.page';
import { Ticket } from './pages/ticket/Ticket.page';
import{Privateroute} from './components/private route/Privateroute.comp'
function App() {
    return ( <div className = "App" >
        <Router>
            <Switch>
                
                <Route exact path ="/">
        <Entry /></Route>
       <Privateroute path="/dashboard"> <Dashboard/></Privateroute> 
      <Privateroute path="/add-ticket"><Addticket/></Privateroute>
        <Privateroute path="/tickets"> <Ticketlist/></Privateroute>
      <Privateroute path="/ticket/:tid"> <Ticket/></Privateroute>
       
   
        </Switch>
        </Router>
        </div>
    );
}

export default App;