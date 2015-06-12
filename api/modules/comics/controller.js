var Comic = require('./model.js');

module.exports = {
  getComics: function(req, reply) {
    if(req.query.name) {
      return reply(Comic.query({
        where: {
          name: req.query.name
        }
      }).fetch());
    }
    return reply(Comic.fetchAll());
  },
  getComic: function(req, reply) {
    return reply(Comic.query({
      where: {
        id: req.params.id
      }
    }).fetch());
  },
  createComic: function(req, reply) {
    return reply(Comic.forge({
      name: req.payload.name
    }).save());
  },
  updateComic: function(req, reply) {
    return reply(Comic.query({
      where: {
        id: req.params.id
      }
    }).save({
      name: req.payload.name
    }, { 
      method: 'update',
      patch: 'true' 
    }));
  },
  deleteComic: function(req, reply) {
    return reply(Comic.query({
      where: {
        id: req.params.id
      }
    }).destroy());
  }
};
