import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function LoginPage() {
  return (
    <>
    </>
  );
}









// import React from "react";
// //import "../css/LandingPage.css"
// import { useState } from "react";
// import Form from "./Form";
// import Navigation from "./Navigation";
// import PayRent from "./RentPayPage";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// const LandingPage = () => {
//   const [loggedin, setLoggedIn] = useState(false);
//   return (
//     <>
//       {!loggedin ? <Form setLoggedIn={setLoggedIn} /> :
//         <>
//           <Navigation setLoggedIn={setLoggedIn} />
          
//               <Routes>
//                 {/* <Route exact path="/" element={<Home/>}/> */}
//                 <Route exact path="/PayRent" element={<PayRent />} />
//               </Routes>
     
//         </>
//       }
//     </>
//   );
// };
// export default LandingPage;

