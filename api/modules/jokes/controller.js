const Joke = require('./model.js');

module.exports = {
  getJokes: function(req, reply){
    return reply(Joke.fetchAll());
  },
  getJoke: function(req, reply){
    return reply(Joke.query('where', 'id', '=', req.params.id)
      .fetch());
  }
}
