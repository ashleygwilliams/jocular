var controller = require('../controller');
var schema = require('../schema');

module.exports = [{
  method: 'POST',
  path: '/comics',
  config: {
    handler: controller.createComic,
    description: 'Create a new comic object.',
    validate: {
      payload: schema
    }
  }
}];
