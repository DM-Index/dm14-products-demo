const express = require("express"),
  app = express(),
  port = process.env.PORT || 3001,
  cors = require("cors"),
  { json } = require("body-parser"),
  pc = require("./controllers/products");

app.use(json());
app.use(cors());

app.get("/api/products", pc.getProducts);

app.listen(port, () =>
  console.log(`This is Dr Crane... I'm listening: ${port}`)
);
