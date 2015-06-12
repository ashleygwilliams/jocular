var controller = require('../controller');

module.exports = [{
  method: 'GET',
  path: '/comics',
  config: {
    handler: controller.getComics,
    description: 'Retrieve the collection of all comics.'
  }
}, {
  method: 'GET',
  path: '/comics/{id}',
  config: {
    handler: controller.getComic,
    description: 'Retrieve a single comic object based on `id`.'
  }
}];
