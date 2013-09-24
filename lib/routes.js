'use strict';

var boards = require('./controllers/boards');

module.exports = function (app) {
  app.get('/', boards.index);
};