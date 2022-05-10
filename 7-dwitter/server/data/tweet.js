export let tweets = [
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

export async function getAll() {
  return tweets;
}

export async function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export async function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now(),
    createdAt: Date.now().toString(),
    name,
    username,
    text,
  };
  tweets = [tweet, ...tweets];
  return tweets;
}

export async function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export async function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
