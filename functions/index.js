const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")[
  "sk_test_51Hhp7PBleRBoSjYtuuWLBwx46k9gx9fdGTx9242Bj8EtsADsNuagZqP6Kv28bgmMCOn18PBDOwQOl3yNUIxX0ZiN00XIhUzAaH"
];

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get("/", (req, res) => {
  res.status(200).send("hello beanieRa!");
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request received G! For this amount >>>", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });

  // Ok created!
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// API Endpoint
//localhost:5001/challenge-a3d6a/us-central1/api

//Listen Command
http: exports.api = functions.https.onRequest(app);
