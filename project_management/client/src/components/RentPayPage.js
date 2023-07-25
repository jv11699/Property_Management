import { loadStripe } from "@stripe/stripe-js"
import React, { useState, useEffect } from 'react';
import CheckoutForm from "./Checkout.js";
import { Elements } from "@stripe/react-stripe-js";
const PayRent = () => {


    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const serverUrl = "https://jv11699-fluffy-spork-xvwqgj5vj4929vvq-4000.preview.app.github.dev"
    useEffect(() => {
        fetch(serverUrl + "/config",{withCredentials: true}).then(async (r) => {
            console.log(r)
            const { publishableKey } = await JSON.parse(r.json());
            console.log(publishableKey)
            setStripePromise(loadStripe(publishableKey));
        }).catch(async (error) => {
            console.log("publishableKey")
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
           
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                </Elements>
            
        </>
    );
}
export default PayRent;