import express from "express";
import { configDotenv } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import session from "express-session";
import { dbConnection, localDbConnection } from "./db.connection.js";
import MongoDBStore from "connect-mongodb-session";
import router from "./routes/routes.js";
configDotenv();
const app = express();

// Db connection
// dbConnection();

let db_uri;
const host = async (req, res, next) => {
  if(req.hostname === "localhost"){
    console.log("You are on the local machine")
    localDbConnection();
    db_uri = process.env.LOCAL_DB_URI
  } else {
    console.log("You are on the remote machine")
    dbConnection()
    db_uri = process.env.DB_URI
  }
  next()
}
const PORT = process.env.PORT || 3001;
// Session store
const mongoDbStoreSession = MongoDBStore(session);
const store = new mongoDbStoreSession({
  uri: process.env.LOCAL_DB_URI,
  collection: "sessions",
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "mysecretismyself",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use("/", host, router);

app.listen(PORT, () => {
  console.log("Server is running on PORT", 3001);
});
