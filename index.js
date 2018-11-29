const express = require("express");

const app = express();

app.get('/', (req, res) => {
  return res.send('Hello World');
})

app.get('/nome/:name', (req, res) => {
  return res.send(`Welcome, ${req.params.name}`);
});

app.listen(3000);
