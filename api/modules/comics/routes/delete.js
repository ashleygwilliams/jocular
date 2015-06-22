var controller = require('../controller');

module.exports = [{
  method: 'DELETE',
  path: '/comics/{id}',
  config: {
    handler: controller.delete.bind(controller),
    description: 'Delete a comic object based on `id`.'
  }
}];
