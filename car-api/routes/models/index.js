const models = require('express').Router();



//create router and attach model
const all = require('./all');
models.get('/', all);

const single = require('./single');
models.get('/:modelId', single);

const cars = require('./cars');
models.use('/:modelId/cars', cars);


/*

const data = require('../../data.json');

models.param('modelId', (req, res, next, value) => {
  const model = data.models.find(m => m.id === (value * 1));

  if (model) {
    req['model'] = model;
    next();
  } else {
    res.status(404).send('Invalid model ID');
  }
});

*/

// routes/models/index.js
const findObject = require('../../utils/findObject');
models.param('modelId', findObject('model'));


module.exports = models;