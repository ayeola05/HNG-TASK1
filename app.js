require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    slackUsername: "ayeolataiwo",
    backend: true,
    age: 21,
    bio: "I am Ayeola Taiwo by name and a backend NodeJS developer",
  });
});

app.listen(port, () => `listening on port ${port}`);
