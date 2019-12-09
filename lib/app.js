const express = require('express');
const app = express();
const Bar = require('./models/Bar');
app.use(express.json());

app.get('/bars', (req, res) => {
  Bar
    .find()
    .then(allBars => res.send(allBars))
    .catch(err => console.log(err))
});
app.post('/bars', (req, res) => {
  Bar
    .create(req.body)
    .then(createdBar => res.send(createdBar))
    .catch(err => console.log(err));
});
app.get('/bars/:barId', (req, res) => {
  Bar
  .findById(req.params.id)
  .then(note => res.send(bars))
  .catch(err => console.log(err));
});
app.patch('/bars/:barId', (req, res) => {
  Bar.findByIdAndUpdate(req.params.noteId)
  req.body,
  { new: true}
  .then(bar => res.json(bar))
  .catch(err => console.log(err));
});
app.delete('/:id', (req, res) => {
  Bar.findByIdAndDelete(req.params.id)
  .then(singleBar => res.json(singleBar))
  .catch(err => console.log(err));
});

module.exports = app;