import React from "react";
import "../css/LandingPage.css"
import { useState } from "react";
import Form from "./Form";
import Navigation from "./Navigation";
import PayRent from "./RentPayPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FinancialDashboard from './FinancialDashboard';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
const LandingPage = () => {
  const [loggedin, setLoggedIn] = useState(false);
  return (
    <>
      {!loggedin ? <Form setLoggedIn={setLoggedIn} /> :
        <>
        
          <Router>
          <Navigation setLoggedIn={setLoggedIn} />
              <Routes>
                {/* <Route exact path="/" element={<Home/>}/> */}
                <Route exact path="/" />
                <Route path="/PayRent" element={<PayRent />} />
                <Route path="/financial-dashboard" element={<FinancialDashboard/>} />
              </Routes>
         
          </Router>
        </>
      }
    </>
  );
};
export default LandingPage;
