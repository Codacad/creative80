import express from "express";
import { configDotenv } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import session from "express-session";
import dbConnection from "./db.connection.js";
import MongoDBStore from "connect-mongodb-session";
import router from "./routes/routes.js";
configDotenv()
const app = express();

// Db connection
dbConnection();
const PORT = process.env.PORT || 3001
// Session store
const mongoDbStoreSession = MongoDBStore(session);
const store = new mongoDbStoreSession({
  uri: process.env.DB_URI,
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

app.use('/', router)

app.listen(PORT, () => {
  console.log("Server is running on PORT", 3001);
});
