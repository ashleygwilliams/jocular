var Joke = require('./model.js');

module.exports = {
  getJokes: function(req, reply) {
    return reply(Joke.fetchAll());
  },
  getJoke: function(req, reply) {
    return reply(Joke.query({
      where: {
        id: req.params.id
      }
    }).fetch());
  },
  getComicJokes: function(req, reply) {
    return reply(Joke.query({
      where: {
        comic_id: req.params.comic_id
      }
    }).fetchAll());
  },
  createJoke: function(req, reply) {
    return reply(Joke.forge({
      content: req.payload.content,
      comic_id: req.payload.comic_id,
    }).save());
  },
  updateJoke: function(req, reply) {
    return reply(Joke.query({
      where: {
        id: req.payload.id
      }
    }).save({
      content: req.payload.content,
      comic_id: req.payload.comic_id,
    }, {
      method: 'update',
      patch: 'true'
    }));
  },
  deleteJoke: function(req, reply) {
    return reply(Joke.query({
      where: {
        id: req.params.id
      }
    }).destroy());
  }
};
