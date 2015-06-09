const controller = require('./controller');

exports.register = function(server, options, next){

  server.route([{
    method: 'GET',
    path: '/comics',
    config: {
      handler: controller.getComics
    }
  }, {
    method: 'GET',
    path: '/comics/{id}',
    config: {
      handler: controller.getComic
    }
  }]);

  next();
};

exports.register.attributes = {
  name: 'comics'
};
