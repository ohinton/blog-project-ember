import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('comment', params.comment_id);
  },
  actions: {
    update(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          comment.set(key, params[key]);
        }
      });
      comment.save();
      this.transitionTo('comment');
    },
    destroyComment(comment) {
      comment.destroyRecord();
      this.transitionTo('index');
    }
  }
});
