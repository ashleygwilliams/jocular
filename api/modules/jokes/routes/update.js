var controller = require('../controller');
var schema = require('../schema');

module.exports = [{
  method: 'PUT',
  path: '/jokes/{id}',
  config: {
    handler: controller.update.bind(controller),
    description: 'Update a single joke object based on `id`.',
    validate: {
      payload: schema
    }
  }
}];
