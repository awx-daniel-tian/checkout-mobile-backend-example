const express = require("express");
const router = express.Router();
const { getToken } = require("./utils/TokenClient");

const axios = require("axios");
const { v4: uuidv4 } = require("uuid");

require("dotenv").config();
const { baseURL } = require("./config");

const clientId = process.env.clientId,
  apiKey = process.env.apiKey;

// serving very basic frontend
router.get("/", function (req, res, next) {
  res.render("index");
});

// create customer
router.post("/customers/create", async (_, res) => {
  try {
    const token = await getToken();

    res.status(400).json({ token: token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
