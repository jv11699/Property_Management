import { loadStripe } from "@stripe/stripe-js"
import React, { useState, useEffect } from 'react';
import CheckoutForm from "./Checkout.js";
import { Elements } from "@stripe/react-stripe-js";
const PayRent = () => {

    const stripePromise = loadStripe("pk_live_51NXQokGkrvMEQpma5GXAOAHP1zBFeDHoKHlPeMfa6xW6GWL8Y37gyYMdhSS3A9SDuwZOKDCN7CMjOKiaxg3GV0rD00wPfm0vQQ");

    
    return (
        <>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </>
    );
}
export default PayRent;