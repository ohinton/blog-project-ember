import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  text: DS.attr(),
  photo: DS.attr(),
  timestamp: DS.attr(),
  comments: DS.hasMany('comment', { async: true}),
  tags: DS.hasMany('tag', { async: true})
});
