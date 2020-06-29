const axios = require("axios");
const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { authenticationBaseURL } = require("../config");

const clientId = process.env.clientId,
  apiKey = process.env.apiKey;

let jsonToken;

const login = async () => {
  try {
    const {
      data: { token },
    } = await axios({
      url: `${authenticationBaseURL}/api/v1/authentication/login?api_key=${apiKey}&client_id=${clientId}`,
      method: "POST",
      timeout: 0,
      headers: {
        "x-client-id": clientId,
        "x-api-key": apiKey,
      },
    });

    return token;
  } catch (err) {
    throw err;
  }
};

const getToken = async () => {
  if (!jsonToken) {
    // fetch a new pair
    jsonToken = await login();
  } else {
    // check if expired or not
    const { exp } = jwt.decode(jsonToken);
    if (Date.now() >= exp * 1000) {
      // fetch new key
      jsonToken = await login();
    }
  }
  return jsonToken;
};

module.exports = { getToken };
