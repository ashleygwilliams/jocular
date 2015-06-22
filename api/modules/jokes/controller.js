var Joke = require('./model.js');
var BaseController = require('../../classes/base_controller')

var controller = new BaseController(Joke);

controller.getComicJokes = function(req, reply) {
  return reply(Joke.query({
    where: {
      comic_id: req.params.comic_id
    }
  }).fetchAll());
}

module.exports = controller;
