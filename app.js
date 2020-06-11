const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/boards", (req, res) => {
  const board = {
    results: [
      {
        key: "board1",
        title: "제목1",
        contents: "내용1",
        user: "user1",
      },
      {
        key: "board2",
        title: "제목2",
        contents: "내용2",
        user: "2",
      },
      {
        key: "board3",
        title: "제목3",
        contents: "내용3",
        user: "3",
      },
      {
        key: "board4",
        title: "제목4",
        contents: "내용4",
        user: "3",
      },
    ],
  };

  return res.json(board);
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

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
