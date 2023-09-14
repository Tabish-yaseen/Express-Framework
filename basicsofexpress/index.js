const http = require("http");
const express = require("express");

const app = express();

const server = http.createServer(app);

app.use((req, res, next) => {
  console.log("middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("middleware 2");
  res.send('<html>hello from express.js</html>'); 
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
