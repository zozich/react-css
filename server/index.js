var express = require('express');
var app = express();

const emails = [{
  id: 1,
  topic: 'Email topic'
}, {
  id: 2,
  topic: 'Email topic 2'
}];

app.get('/emails', function (req, res) {
  const {page = 1, pageSize = 5} = req.query;
  console.log(page);
  console.log(pageSize);

  res.send(emails);
});

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
