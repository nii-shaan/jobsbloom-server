import "dotenv/config.js"

import app from "./app.js"
import { connectDatabase } from "./db/connectDb.js";


const PORT = process.env.PORT || 3005

connectDatabase().authenticate()
  .then(() => {
    console.log("SUCCESS!! DATABASE CONNECTION SUCCEED")
    app.listen(PORT, () => {
      console.log(`server listening on PORT: ${PORT}`)
    })
  })
  .catch((err) => {
    console.log("FAILED!! DATABASE CONNECTION FAILED", err)
  })


