exports.register = function api(server, options, next) {
  server.register(
    [
      {
        register: require('./modules/comics/routes')
      },
      {
        register: require('./modules/jokes/routes')
      }
    ], function(err) {
    if ( err ) {
      return next(err);
    }
    server.route({
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
        reply(JSON.stringify(
          { 
            "name": "jocular",
            "description": "a hapi/bookshelf/knex boilerplate",
            "routes": {
              "comics": "/comics",
              "jokes": "/jokes"
            }
          }, null, 2)
        );
      }
    });

    next();
  });
};

exports.register.attributes = {
  name: 'jocular-api',
  version: '1.0.0'
};
