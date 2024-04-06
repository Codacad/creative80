import fs from "fs";
import { User } from "../models/users.js";
// Get Signup
export const get_signup = async (req, res) => {
  fs.readFile("./public/html/signup.html", "utf-8", (err, data) => {
    if (req.session.user !== undefined) {
      return res.redirect("/");
    }
    return res.send(data);
  });
};

export const post_signup = async (req, res) => {
  const user = req.body;
  const { username, password } = user;
  if (!username || !password) {
    return res
      .status(401)
      .send({ message: "Please enter the login details..." });
  }
  const existingUser = await User.findOne({ username });

  if (existingUser) {
    return res.status(401).send({ message: "Username is already exist..." });
  }

  const newUser = await User.create({ username, password });
  console.log(newUser);
  res
    .status(200)
    .send({ signup: true, message: "Signed Up successfully", newUser });
};
