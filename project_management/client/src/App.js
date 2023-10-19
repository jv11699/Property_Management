import logo from './logo.svg';
//import './App.css';
import LoginPage from "./Views/LoginPage.js";
import '@aws-amplify/ui-react/styles.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from 'react';



function App() {

  return (
    <>

      <LoginPage/>
    </>
  );
}

export default App;


