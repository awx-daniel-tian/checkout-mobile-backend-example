// imports
const express = require("express"),
  router = express.Router(),
  to = require("await-to-js").default,
  { getToken } = require("./utils/TokenClient"),
  axios = require("axios"),
  { v4: uuidv4 } = require("uuid");

// configuration variables
require("dotenv").config();
const { baseURL, pciBaseUrl } = require("./config");
const clientId = process.env.clientId,
  apiKey = process.env.apiKey;

// placeholder variables
const newCustomer = {
  request_id: uuidv4(),
  merchant_customer_id: uuidv4(),
  email: "qa.testing@airwallex.com",
  phone_number: "15566668888",
  first_name: "Testing",
  last_name: "QA",
  additional_info: {
    register_via_social_media: true,
    registration_date: "2012-12-30",
    first_successful_order_date: "2012-12-30",
  },
  live_mode: "true",
  additional_data: {
    "123": "123",
    "234": "234",
    "345": "345",
  },
  metadata: {
    "123": "123",
    "234": "123",
    "345": "123",
  },
};

// serving very basic frontend
router.get("/", (_, res) => {
  res.render("index");
});

// create customer
router.post("/customers/create", async (_, res) => {
  let err, token, customer;

  [err, token] = await to(getToken());

  if (!token) {
    return res.status(400).json({ error: "Error in fetching token" });
  }

  [err, { data: customer }] = await to(
    axios({
      url: `${pciBaseUrl}/api/v1/pa/customers/create`,
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // you can modify customer here
      data: newCustomer,
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
router.post("/payment_intents/create", async (req, res) => {
  let err, token;

  [err, token] = await to(getToken());

  if (!token) {
    return res.status(400).json({ error: "Error in fetching token" });
  }
});

module.exports = router;
