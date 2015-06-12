var controller = require('../controller');
var schema = require('../schema');

module.exports = [{
  method: 'POST',
  path: '/jokes',
  config: {
    handler: controller.createJoke,
    description: 'Create a new joke object.',
    validate: {
      payload: schema
    }
  }
}];
