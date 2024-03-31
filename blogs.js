const blogs = [
  {
    id: "0",
    title: "Article 1",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://plus.unsplash.com/premium_photo-1675127366598-f6c344e5233b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "1",
    title: "Article 2",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1531264243361-d746dd2918a3?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Article 3",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1651246503617-6c74e01c9fc8?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    title: "Article 4",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: "Article 5",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    title: "Article 6",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://plus.unsplash.com/premium_photo-1673481516297-2329caf08bfa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    title: "Article 7",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://media.istockphoto.com/id/1441362535/photo/yellow-flower-background-vibrant-color-small-chrysanthemum-pattern-daisy-floral-texture.jpg?s=1024x1024&w=is&k=20&c=wjE3MqaO2plrbzwSQGVzKy3tSoI84jR69ZMLgjEA34Y=",
  },
  {
    id: "7",
    title: "Article 8",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1455038894923-19f3608c9609?q=80&w=1544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "8",
    title: "Article 9",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1521913626209-0fbf68f4c4b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "9",
    title: "Article 10",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "10",
    title: "Article 11",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1603052875302-d376b7c0638a?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "11",
    title: "Article 12",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1627768919962-fb6af351759c?q=80&w=1580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "12",
    title: "Article 13",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1585383234137-2367d3c5302d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "13",
    title: "Article 14",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://plus.unsplash.com/premium_photo-1675855748166-a66d26c3b6da?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "14",
    title: "Article 15",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://plus.unsplash.com/premium_photo-1673966781932-4cfc26ce901b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "15",
    title: "Article 16",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "16",
    title: "Article 17",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "17",
    title: "Article 18",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1619265180726-6c11823ebf6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "18",
    title: "Article 19",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1562360742-318972306207?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "19",
    title: "Article 20",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1603559462493-28a76b619b3a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "20",
    title: "Article 21",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=1477&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "21",
    title: "Article 22",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1528907298109-e64971adc8e5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "22",
    title: "Article 23",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1528834342297-fdefb9a5a92b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "23",
    title: "Article 24",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1589517575452-18a6d4c3f2e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "24",
    title: "Article 25",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "25",
    title: "Article 26",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "26",
    title: "Article 27",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1502031176098-2e91ccc16e59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "27",
    title: "Article 28",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1552410260-0fd9b577afa6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "28",
    title: "Article 29",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://plus.unsplash.com/premium_photo-1679784157152-87caa598bacb?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "29",
    title: "Article 30",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1504683911297-cc28358f259e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "30",
    title: "Article 31",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "31",
    title: "Article 32",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1545319664-9601fe3d543f?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "32",
    title: "Article 33",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://plus.unsplash.com/premium_photo-1673474112205-037558e54995?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "33",
    title: "Article 34",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://plus.unsplash.com/premium_photo-1678344170545-c3edef92a16e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "34",
    title: "Article 35",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://plus.unsplash.com/premium_photo-1672642064397-bc1e1527cbe1?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "35",
    title: "Article 36",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1580135952467-a4ff3ca4a752?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "36",
    title: "Article 37",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://plus.unsplash.com/premium_photo-1698521646484-c82c90bcbc6d?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "37",
    title: "Article 38",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://media.istockphoto.com/id/501613885/photo/abstract-orange-fire-bokeh-background.jpg?s=1024x1024&w=is&k=20&c=Wqc07J2G86L2dkrGWoMZ3ZJ8lVzcvXh7CdTUOyiD6Ko=",
  },
  {
    id: "38",
    title: "Article 39",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1597200381847-30ec200eeb9a?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "39",
    title: "Article 40",
    content: "Lorem ipsum dolor sit amet, consectetur adip",
    date: "7-3-2024",
    author: "Dhinesh Sanala",
    image:
      "https://images.unsplash.com/photo-1520052205864-92d242b3a76b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

module.exports = blogs;
