// imports
const express = require("express"),
  router = express.Router(),
  to = require("await-to-js").default,
  { getToken } = require("../utils/TokenClient"),
  axios = require("axios");

// configuration variables
require("dotenv").config();
const { paymentBaseURL } = require("../utils/config");

// placeholder variables
const { getNewCustomer, getNewPaymentIntent } = require("../utils/fake_data");

// serving very basic frontend
router.get("/", (_, res) => {
  res.render("index");
});

// create customer
// input: customer information (placeholder)
// output: same customer information
router.post("/customers/create", async (_, res) => {
  let err, token, customer;

  [err, token] = await to(getToken());

  if (!token) {
    return res.status(400).json({ error: "Error in fetching token" });
  }

  [err, { data: customer }] = await to(
    axios({
      url: `${paymentBaseURL}/api/v1/pa/customers/create`,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // below is a fake customer used for demo purpose
      data: getNewCustomer(),
    })
  );

  if (err) {
    return res.status(400).json({ error: "Error in creating customer." });
  }

  res
    .status(200)
    .json({ message: "Customer created succesfully", customer: customer });
});

// create payment intent
// input: payment information (placeholder)
// output: client secret
router.post("/payment_intents/create", async (req, res) => {
  let err, token, client_secret;

  [err, token] = await to(getToken());

  if (!token) {
    return res.status(400).json({ error: "Error in fetching token" });
  }

  [
    err,
    {
      data: { client_secret },
    },
  ] = await to(
    axios({
      url: `${paymentBaseURL}/api/v1/pa/payment_intents/create`,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: getNewPaymentIntent(),
    })
  );

  if (!client_secret) {
    return res.status(400).json({ error: "Error in creating payment intent" });
  }

  res.status(200).json({
    message: "Payment intent created succesfully",
    client_secret: client_secret,
  });
});

// generate customer secret
// input: customer id
// output: customer secret and expired time
// note: this will need to be a secured route in production
router.get("/customer-secret/:id", async (req, res) => {
  const customerId = req.params.id;

  let err, token, customer_secret, expired_time;

  [err, token] = await to(getToken());

  if (!token) {
    return res.status(400).json({ error: "Error in fetching token" });
  }

  [
    err,
    {
      data: { client_secret: customer_secret, expired_time },
    },
  ] = await to(
    axios({
      url: `${paymentBaseURL}/api/v1/pa/customers/${customerId}/generate_client_secret`,
      method: "GET",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
  );

  if (!customer_secret) {
    return res.status(400).json({ error: "Error in fetching customer secret" });
  }

  res.status(200).json({
    message: "Customer secret created succesfully",
    customer_secret: customer_secret,
    expired_time: expired_time,
  });
});

module.exports = router;
