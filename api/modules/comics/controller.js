const Comic = require('./model.js');

module.exports = {
  getComics: function(req, reply){
    return reply(Comic.fetchAll());
  },
  getComic: function(req, reply){
    return reply(Comic.query('where', 'id', '=', req.params.id)
      .fetch());
  }
}
