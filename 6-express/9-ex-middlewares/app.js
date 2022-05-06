import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

const corsOption = {
  origin: ["http://127.0.0.1:5500"],
  optionSuccessStatus: 200,
  credentials: true, // Access-Control-Allow-Credentials: true
};

app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(helmet());
app.use(cors(corsOption));

app.get("/", (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  console.log(req.cookies.yummy_cookie);
  res.send("hi");
});

app.listen(8080);
