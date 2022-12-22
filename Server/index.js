const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
var cors = require("cors");
app.use(cors());

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

var users = [
  {
    id: 1,
    name: "kiran",
    age: 26,
    email: "kiran@gmail.com",
  },
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/users", function (req, res) {
  return res.json(users);
});

app.post("/api/users", function (req, res) {
  var user = req.body.user;
  users.push(user);

  return res.send("User has been added successfully");
});
