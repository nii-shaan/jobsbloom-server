import dotenv from "dotenv"
dotenv.config()

import app from "./app.js"

const PORT = process.env.PORT || 8000;

app.listen(8000, () => {
  console.log(`SERVER RUNNING ON PORT: ${PORT}`)
})

