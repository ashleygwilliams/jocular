'use strict';

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('comics').del(), 

    knex('comics').insert({ id: 1, name: 'louis CK' }),
    knex('comics').insert({ id: 2, name: 'mitch hedburg' }),
    knex('comics').insert({ id: 3, name: 'aziz ansari' })
  );
};
