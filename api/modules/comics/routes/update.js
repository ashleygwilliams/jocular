var controller = require('../controller');
var schema = require('../schema');

module.exports = [{
  method: 'PUT',
  path: '/comics/{id}',
  config: {
    handler: controller.updateComic,
    description: 'Update a comic object based on `id`.',
    validate: {
      payload: schema
    }
  }
}];
