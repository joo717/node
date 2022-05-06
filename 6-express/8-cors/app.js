import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ["http://127.0.0.1:5500"],
    optionSuccessStatus: 200,
    credentials: true, // Access-Control-Allow-Credentials: true
  })
);

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(8080);
