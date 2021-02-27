const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "egtrs",
});

db.connect((err) => {
  if (err) {
    return err;
  } else {
    console.log("Connection successful..");
  }
});

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.post("/Contact", (req, res) => {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let subject = req.body.subject;
  db.query(
    "INSERT INTO contacts (first_name, last_name, email, message) VALUES (?, ?, ?, ?)",
    [firstname, lastname, email, subject],
    (err, data) => {
      if (err) {
        throw err;
      }
      console.log(req.body);
      console.log(data);
    }
  );
});

app.listen(4000, () => {
  console.log("Running on port 4000...");
});
