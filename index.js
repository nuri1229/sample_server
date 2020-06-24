const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
var fs = require('fs');

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/boards", (req, res) => {

  const data = fs.readFileSync("./board.json", "utf8");

  return res.json(JSON.parse(data));
});

app.get("/users", (req, res) => {
  const users = {
    results: [
      {
        key: "user1",
        name: "유저1",
        level: "3",
      },
      {
        key: "user2",
        name: "유저2",
        level: "1",
      },
      {
        key: "user3",
        name: "유저3",
        level: "2",
      },
    ],
  };

  return res.send(users);
});

app.get("/levels", (req, res) => {
  const level = {
    results: [
      {
        level: "1",
        text: "일반회원",
      },
      {
        level: "2",
        text: "우수회원",
      },
      {
        level: "3",
        text: "관리자",
      },
    ],
  };

  return res.send(level);
});

app.post("/boards", (req, res) => {
  console.log("boards_post", req.body);
  const data = JSON.parse(fs.readFileSync("./board.json", "utf8"));
  const newData = [...data.results, req.body];

  fs.writeFileSync('./board.json', JSON.stringify(newData));
  res.json({});

})

app.listen(port, (req, res) =>
  console.log(`Example app listening at http://localhost:${port}`)
);
