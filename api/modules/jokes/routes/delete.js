var controller = require('../controller');

module.exports = [{
  method: 'DELETE',
  path: '/jokes/{id}',
  config: {
    handler: controller.delete.bind(controller),
    description: 'Delete a single joke object based on `id`.'
  }
}];
