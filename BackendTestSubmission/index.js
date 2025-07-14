const express = require("express");
const cors = require("cors");
require("dotenv").config();

const {
  createLoggingMiddleware,
} = require("./LogginMiddleWare/logginMiddleware");

const logginMiddleware = createLoggingMiddleware("backend-package", "info");

const app = express();

app.use(logginMiddleware);
const PORT = process.env.PORT;
const urlShortRouter = require("./routes/urlShortRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/", urlShortRouter);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT || 3000, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
