import { User } from "../models/users.js";
import fs from "fs";
// Get Login
export const get_login = async (req, res) => {
  fs.readFile("./public/html/login.html", "utf-8", (err, data) => {
    if (req.session.user !== undefined) {
      return res.redirect("/");
    }
    return res.send(data);
  });
};

export const post_login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || user.password !== password) {
    return res
      .status(401)
      .send({ login: false, message: "Invalid Username or Password" });
  } else {
    req.session.user = user;
    return res.send({
      login: true,
      message: "Login Successfull",
      user: req.session.user,
    });
  }
};
