'use strict';

exports.seed = function(knex, Promise) {
    return Promise.join(
        knex('jokes').del(), 

        knex('jokes').insert({
          comic_id: 1,
          content: "the meal isn't over when i'm full, it's over when i hate myself"
        }),
        knex('jokes').insert({
          comic_id: 2,
          content: "i haven't slept for ten days, because that would be too long."
        }),
        knex('jokes').insert({
          comic_id: 2,
          content: "i'm against picketing, but i don't know how to show it."
        }),
        knex('jokes').insert({
          comic_id: 3,
          content: "you can't call anyone anymore. if you call somebody, they be like: 'what? are you on fire? then quit wasting my time and text that shit.'"
        })
    );
};
