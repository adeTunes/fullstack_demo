const express = require("express");
const cors = require("cors");

const usersRouter = require("./routes/users.route")
const app = express();

app.use((req, res, next) => {
  const start = Date.now()
  next()
  const delta = Date.now() - start
  console.log(`${req.method} ${req.url} ${delta}ms`)
})
app.use(express.json());
app.use(cors());

app.use("/users", usersRouter)

app.listen(8000, () => console.log("Listening on port 8000"));
