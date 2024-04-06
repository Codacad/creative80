import express from "express";
import { get_login, post_login } from "../controllers/loginControllers.js";
import { logout } from "../controllers/logoutController.js";
import { get_dashboard } from "../controllers/dashboardController.js";
import { get_signup, post_signup } from "../controllers/signupControlle.js";
import { isAuthenticated } from "../utils/userAuth.js";
import { get_design } from "../controllers/designController.js";
import { get_film } from "../controllers/filmController.js";
import {get_advertising} from '../controllers/advertisingController.js'
import {get_digital} from '../controllers/digitalController.js'
import {get_photography} from '../controllers/photographyController.js'
import {get_podcast} from '../controllers/podcastController.js'
import {get_about} from '../controllers/aboutController.js'
import {get_contact} from '../controllers/contactController.js'
import fs from "fs";

const router = express();

// Home
const home = async (req, res) => {
  fs.readFile("./public/html/main.html", "utf-8", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
};

router.get("/", home);
// signup get request
router.get("/signup", get_signup);

// signup post request
router.post("/signup", post_signup);

// login get request
router.get("/login", get_login);

// login post request
router.post("/login", post_login);

// Logout
router.get("/logout", logout);

// Dashboard
router.get("/dashboard", isAuthenticated, get_dashboard);

// Get Design
router.get("/design", get_design);
router.get("/film", get_film);
router.get("/digital", get_digital);
router.get("/advertising", get_advertising);
router.get("/photography", get_photography);
router.get("/podcast", get_podcast);
router.get("/about", get_about);
router.get("/contact", get_contact);

router.get("*", (req, res) => {
  res.send("<h1>404 Page not found...</h1>");
});
export default router;
