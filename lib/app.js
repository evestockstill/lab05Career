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
app.get('./:id', (req, res) => {
  Bar.findById(req.params.id)
  .then(singleBar => res.json(singleBar))
  .catch(err => console.log(err));
});
app.put('./:id', (req, res) => {
  Bar.findByIdAndUpdate(req.params.id)
  .then(updatedBar => res.json(updatedBar))
  .catch(err => console.log(err));
});
app.delete('./:id', (req, res) => {
  Bar.findByIdAndDelete(req.params.id)
  .then(singleBar => res.json(singleBar))
  .catch(err => console.log(err));
});

module.exports = app;