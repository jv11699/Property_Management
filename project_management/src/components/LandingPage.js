import React from "react";
import "../css/LandingPage.css"
import { useState } from "react";
import Form from "./Form";
import Navigation from "./Navigation";
import PayRent from "./RentPayPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const LandingPage = () => {
  const [loggedin, setLoggedIn] = useState(false);
  return (
    <>
      {!loggedin ? <Form setLoggedIn={setLoggedIn} /> :
        <>
          <Navigation setLoggedIn={setLoggedIn} />
          <Router>
        
              <Routes>
                {/* <Route exact path="/" element={<Home/>}/> */}
                <Route exact path="/PayRent" element={<PayRent />} />
              </Routes>
         
          </Router>
        </>
      }
    </>
  );
};
export default LandingPage;