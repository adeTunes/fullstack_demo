const bcrypt = require("bcrypt");

const db = require("../model/users.model")
const saltRounds = 10;

function getAllUsers(req, res) {
    db.select("*")
      .from("users")
      .then((result) => {
        res.json({ message: "Successfully Retrieved", results: result });
      });
  }

function regiterUser(req, res) {
    const { name, email, password } = req.body;
  
    db.transaction((trx) => {
      bcrypt.hash(password, saltRounds, function (err, hash) {
        trx
          .insert({ email, hash })
          .into("login")
          .returning("email")
          .then((loginEmail) => {
            return trx
              .insert({ name, email: loginEmail[0].email })
              .into("users")
              .returning("*")
              .then((data) => {
                res.json({ message: "Successfully created" });
              });
          })
          .then(trx.commit)
          .catch(trx.rollback);
      });
    });
  }

  function signinUser(req, res) {
    const { email, password } = req.body;
    if (email && password) {
      db.select("*")
        .from("login")
        .where("email", "=", email)
        .then((data) => {
          bcrypt.compare(password, data[0].hash, function (err, result) {
            if (result) {
              db.select("*")
                .from("users")
                .where("email", "=", data[0].email)
                .then((response) => {
                  res.json({ message: "Success", result: response[0] });
                });
            } else {
              res.json({ message: "Incorrect credentials" });
            }
          });
        })
        .catch((err) => res.json({ message: "No user with that email" }));
    } else res.status(400).json({ message: "Please supply correct details" });
  }

  module.exports = {
    getAllUsers, regiterUser, signinUser
  }