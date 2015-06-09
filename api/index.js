exports.register = function api(server, options, next) {
  server.register(
    [], function(err) {
    if ( err ) {
      return next(err);
    }
    server.route({
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
        reply('jocular: a hapi/bookshelf/knex boilerplate');
      }
    });
    next();
  });
};

exports.register.attributes = {
  name: 'jocular-api',
  version: '1.0.0'
};
