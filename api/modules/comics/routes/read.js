var controller = require('../controller');

module.exports = [{
  method: 'GET',
  path: '/comics',
  config: {
    handler: controller.getAll.bind(controller),
    description: 'Retrieve the collection of all comics.'
  }
}, {
  method: 'GET',
  path: '/comics/{id}',
  config: {
    handler: controller.getOne.bind(controller),
    description: 'Retrieve a single comic object based on `id`.'
  }
}];
