const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'jokes',
  comic: function () {
    return this.belongsTo(require('../comics/model'));
  }
};

const classProps = {
  typeName: 'jokes',
  filters: {
    comic_id: function (qb, value) {
      return qb.whereIn('comic_id', value);
    }
  },
  relations: [
    'comic'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
