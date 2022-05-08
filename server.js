const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use('/', require('./routes/index.js'));

app.listen(port, () => {
  console.log(`El server esta listo por el puerto ${port}`);
});
