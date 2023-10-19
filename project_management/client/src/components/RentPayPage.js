import { loadStripe } from "@stripe/stripe-js"
import React, { useState, useEffect } from 'react';
import CheckoutForm from "./Checkout.js";
import { Elements } from "@stripe/react-stripe-js";
const PayRent = () => {
//yo mag
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const serverUrl = "http://localhost:4000"
    useEffect(() => {
        fetch(serverUrl + "/config").then(async (r) => {
            const { publishableKey } = await r.json();
            setStripePromise(loadStripe(publishableKey));
        }).catch(async (error) => {
            console.log(error)
        });
    }, []);

    useEffect(() => {
        fetch(serverUrl +"/create-payment-intent", {
            method: "POST",
            body: JSON.stringify({}),
        }).then(async (result) => {
            var { clientSecret } = await result.json();
            setClientSecret(clientSecret);
        }).catch(async (error) => {
            console.log(error)
        });
    }, []);
    return (
        <>
            <h1>React Stripe and the Payment Element</h1>
           
            {clientSecret &&
            <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                </Elements>}
            
        </>
    );
}
export default PayRent;