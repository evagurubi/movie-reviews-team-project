const router = require("express").Router();
const fetch = require("node-fetch");
const jwt_decode = require("jwt-decode");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const ReviewController = require("../controllers/review.controller");
const verifyToken = require("../middlewares/veryfyToken");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

router.get("/test", async (req, res) => {
  res.json({ message: "pass!" });
});

router.post("/login", (req, res) => {
  const code = req.body.code;
  const url = "https://oauth2.googleapis.com/token";
  const values = {
    code: code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: "http://localhost:3000/movies",
    grant_type: "authorization_code",
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((data) => {
      const token = data.id_token;
      const decoded = jwt_decode(token);
      console.log(decoded);

      if (!decoded) {
        return res.status(400).json(null);
      }

      const user = new User({
        email: decoded.email,
        given_name: decoded.given_name,
        google_id: decoded.sub,
        name: decoded.name,
        picture: decoded.picture,
      });

      User.findOne({ google_id: decoded.sub }).then((person) => {
        //console.log("FINDONE");
        if (!person) user.save();
      });

      const myToken = jwt.sign(
        {
          google_id: decoded.sub,
          email: decoded.email,
          user_pic: decoded.picture,
          given_name: decoded.given_name,
        },
        process.env.TOKEN_SECRET
      );

      res.header("auth-token", token).json({ myToken });
    });
});

router.post("/review", verifyToken, ReviewController.insert);

router.get("/review", ReviewController.list);

module.exports = router;
