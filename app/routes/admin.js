import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment'),
      tags: this.store.findAll('tag')
    });
  },
  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('admin');
    },
    saveTag(name) {
      var newTag = this.store.createRecord('tag', name);
      newTag.save();
      this.transitionTo('admin');
    },
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('admin');
    },
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
        post.set(key,params[key]);
        }
      });
        post.save();
        this.transitionTo('admin');
    },
  }
});
