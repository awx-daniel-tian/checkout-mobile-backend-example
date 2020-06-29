const express = require("express");
const { baseURL } = require("./config");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

const clientId = process.env.clientId,
  apiKey = process.env.apiKey;

// serving very basic frontend
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// testing login function
router.get("/login", async (req, res) => {
  try {
    const {
      data: { token },
    } = await axios({
      url: `${baseURL}/api/v1/authentication/login?api_key=${apiKey}&client_id=${clientId}`,
      method: "POST",
      timeout: 0,
      headers: {
        "x-client-id": clientId,
        "x-api-key": apiKey,
      },
    });

    res.status(200).json({ token: token });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
