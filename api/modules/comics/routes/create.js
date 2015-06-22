var controller = require('../controller');
var schema = require('../schema');

module.exports = [{
  method: 'POST',
  path: '/comics',
  config: {
    handler: controller.create.bind(controller),
    description: 'Create a new comic object.',
    validate: {
      payload: schema
    }
  }
}];
