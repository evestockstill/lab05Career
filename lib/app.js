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
  const {
    name,
    phone,
    age,
    averageRating } = req.body; 
  Bar
    .create({ name, phone, age, averageRating })
    .then(createdBar => res.send(createdBar))
    .catch(err => console.log(err));
});
app.get('/bars/:id', (req, res) => {
  const {
    _id
  } = req.body;
  Bar
    .findById({ _id })
    .then(bar => res.send(bar))
    .catch(err => console.log(err))
});
app.put('/bars/:id', (req, res) => {
  Bar
  .findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  console.log(findByIdAndUpdate)
  .then(updatedBar => res.send(updatedBar))
    .catch(err => console.log(err));
});
app.delete('/bars/:id', (req, res) => {
  Bar
  .findByIdAndDelete(req.params.id);
  console.log(findByIdAndUpdate)
  .then(deletedBar => res.send(deletedBar))
    .catch(err => console.log(err));
});

module.exports = app;