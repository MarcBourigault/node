const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


const polls = [
  {

    id: 1,
    question: "question ?",
    answers: ["réponse 1", "reponse 2", "réponse 3"],
    votes: []
  },
  {
    id: 2,
    question: "question 2 ?",
    answers: ["réponse 1", "reponse 2", "réponse 3"],
    votes: [1, 0, 0, 2, 1, 0, 1, 1]
  }
];

app.get('/polls', (req, res) => {
  res.send(polls);
});


app.get('/polls/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const poll = polls.find(p => p.id === id);
  if (typeof (poll) !== 'undefined') {
      res.send(poll);
  } else {
    res.sendStatus(404);
  }

});
app.post('/polls', function(req, res) {
  if (typeof(req.body.question) !== 'string') {
    return res.sendStatus(400);
  }
  res.send('OK');
});


app.listen(3000, () => {
  console.log('listen on port 3000');
});
