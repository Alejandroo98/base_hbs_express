const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, '../public'));

app.get('/', (req, res) => {
  res.render('index_');
});

//Esto es una prueba

module.exports = app;
