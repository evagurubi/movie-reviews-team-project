const router = require("express").Router();
const fetch = require("node-fetch");
const jwt_decode = require("jwt-decode");
const jwt = require("jsonwebtoken");

const tokentoken = {};

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

router.post("/login", (req, res) => {
  const code =  req.body.code;
  const url = "https://oauth2.googleapis.com/token";
  const values = {
    code: code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: "http://localhost:3000/movies",
    grant_type: "authorization_code"
  }

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values)
  })
  .then((response) => response.json())
  .then((data) => {
    const token = data.id_token;
    const decoded = jwt_decode(token);
    console.log(decoded);
  })
})

module.exports = router;