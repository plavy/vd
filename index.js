const express = require('express');

const app = express();
const port = 8080;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('home')
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}.`)
})
