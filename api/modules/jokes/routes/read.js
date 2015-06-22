var controller = require('../controller');

module.exports = [{
  method: 'GET',
  path: '/jokes',
  config: {
    handler: controller.getAll.bind(controller),
    description: 'Retrieve a collection of joke objects.'
  }
}, {
  method: 'GET',
  path: '/jokes/{id}',
  config: {
    handler: controller.getOne.bind(controller),
    description: 'Retrieve a single joke object based on `id`.'
  }
}, {
  method: 'GET',
  path: '/comics/{comic_id}/jokes',
  config: {
    handler: controller.getComicJokes,
    description: 'Retrieve a collection of joke objects belonging to a single comic object, based on `comic_id`.'
  }
}];
