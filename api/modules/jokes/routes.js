const controller = require('./controller');

exports.register = function(server, options, next){

  server.route([{
    method: 'GET',
    path: '/jokes',
    config: {
      handler: controller.getJokes
    }
  }, {
    method: 'GET',
    path: '/jokes/{id}',
    config: {
      handler: controller.getJoke
    }
  }]);

  next();
};

exports.register.attributes = {
  name: 'jokes'
};
