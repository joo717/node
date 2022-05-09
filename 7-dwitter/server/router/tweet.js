import express from "express";
import "express-async-errors";

const router = express.Router();

let tweets = [
  {
    id: 1,
    text: "아자자",
    createdAt: Date.now().toString(),
    name: "Lemon",
    username: "lemon",
    url: "https://i5.walmartimages.ca/images/Enlarge/094/504/6000200094504.jpg",
  },
  {
    id: 2,
    text: "It's me Bob",
    createdAt: Date.now().toString(),
    name: "Bob",
    username: "bob",
    url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/B.o.B._performing.jpg",
  },
];

// Get All Tweets or Get Tweet by username
router.get("/", (req, res, next) => {
  const username = req.query.username;
  const result = username
    ? tweets.filter((tweet) => tweet.username === username)
    : tweets;

  res.status(200).send(result);
});

// Get Tweet by id
router.get("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const result = tweets.find((tweet) => tweet.id === id);
  res.status(result ? 200 : 404).send(result);
});

// Create Tweet
router.post("/", (req, res, next) => {
  const { name, username, text } = req.body;
  const result = {
    id: Date.now(),
    createdAt: Date.now().toString(),
    name,
    username,
    text,
  };
  tweets.push(result);
  res.status(201).send(result);
});

// Update Tweet
router.put("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (!tweet) {
    return res.status(404).send(`Tweet id${id} not found`);
  }
  tweet.text = req.body.text;
  res.status(200).send(tweet);
});

// Delete Tweet
router.delete("/:id", (req, res, next) => {
  const id = Number(req.params.id);
  tweets = tweets.filter((tweet) => tweet.id !== id);

  res.sendStatus(204);
});

export default router;
