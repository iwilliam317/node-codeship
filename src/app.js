const express = require('express');

const app = express();

const server = app.listen(process.env.PORT || 3000)

app.get('/', (req, res) => res.send('Hello Codeship!'));

module.exports = server;