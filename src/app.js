import express from 'express';
import cookieParser from "cookie-parser";
import cors from "cors";

/*
 * Importing routes
*/


const app = express()

app.use(
  cors({
    origin: process.env.REQUEST_ORIGIN,
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cookieParser());

app.get("/", (_req, res) => {
  res.json("if you dont know why you're here, please close the tab")
})

export default app;
