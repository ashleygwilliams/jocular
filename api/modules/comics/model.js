const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'comics',
  jokes: function () {
    return this.hasMany(require('../jokes/model'));
  }
};

const classProps = {
  typeName: 'comics',
  filters: {
    name: function (qb, value) {
      return qb.whereIn('name', value);
    }
  },
  relations: [
    'jokes'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
