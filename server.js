var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.register(require('./api'), function(err) {
  if ( err ) {
    server.log('error', {
      message: 'Error registering services',
      error: err
    });
    throw err;
  }

  server.start(function() {
    console.log('Server started @ ' + server.info.uri);
  });
});
