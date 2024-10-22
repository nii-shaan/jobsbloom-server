import dotenv from "dotenv"
dotenv.config()

import app from "./app.js"
import { connectDatabase } from "./db/connectDb.js";

connectDatabase().authenticate()
  .then(() => {
    console.log("SUCCESS!! DATABASE CONNECTION SUCCEED")
  })
  .catch((err) => {
    console.log("FAILED!! DATABASE CONNECTION FAILED", err)

  })


