const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const blogs = [
  {
    id: "0",
    title: "Article 1",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
  },
  {
    id: "1",
    title: "Article 2",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
  },
  {
    id: "2",
    title: "Article 3",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
  },
  {
    id: "3",
    title: "Article 4",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
  },
];

app.get("/blogs", (req, res) => {
  res.json(blogs);
});

// Start the server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
