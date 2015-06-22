var controller = require('../controller');
var schema = require('../schema');

module.exports = [{
  method: 'PUT',
  path: '/comics/{id}',
  config: {
    handler: controller.update.bind(controller),
    description: 'Update a comic object based on `id`.',
    validate: {
      payload: schema
    }
  }
}];
