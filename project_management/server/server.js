const express = require("express");
const app = express();
const { resolve } = require("path");
const path = require('node:path'); 

// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });
const clientPath = path.join(__dirname, '../client')
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(express.static(path.join(clientPath, '/public')));

app.get("/clientID", (req, res) => {
    res.send({
        "hi":"hi"
      });
});
app.get('/cors', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send({ "msg": "This has CORS enabled 🎈" })
  })
app.get("/", (req, res) => {
    const path = resolve(path.join(clientPath, '/index.html'));
    res.sendFile(path);
  });
  
  app.get("/config", (req, res) => {
    res.send({
      publishableKey:"pk_live_51NXQokGkrvMEQpma5GXAOAHP1zBFeDHoKHlPeMfa6xW6GWL8Y37gyYMdhSS3A9SDuwZOKDCN7CMjOKiaxg3GV0rD00wPfm0vQQ" ,
    });
  });
  
  app.post("/create-payment-intent", async (req, res) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "EUR",
        amount: 1999,
        automatic_payment_methods: { enabled: true },
      });
  
      // Send publishable key and PaymentIntent details to client
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (e) {
      return res.status(400).send({
        error: {
          message: e.message,
        },
      });
    }
  });
  
  app.listen(4000, () =>
    console.log(`Node server listening at http://localhost:5252`)
  );