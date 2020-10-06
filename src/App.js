import React, { useState } from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import { Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


function App() {

  const [show, setShow] = useState(true);

  let dealExpirationDate = new Date("12/20/2020"); 
  let today = new Date();
  let daysUntilDealEnds = Math.floor((dealExpirationDate.getTime() - today.getTime()) / (1000*60*60*24));

  return (
    <div className="App">
      {<Alert variant="danger" show={show && (daysUntilDealEnds > -1)} onClose={() => setShow(false)} dismissible style={{textAlign: "center"}}>
        <p style={{display:"inline-block", margin: 0}}><Alert.Link href="#form">Join the waitlist</Alert.Link> for 25% off your first month! ({daysUntilDealEnds} days until this deal expires)</p>
      </Alert>}
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
