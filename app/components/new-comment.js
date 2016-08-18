import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    showCommentForm() {
      this.set('addNewComment', true);
    },

    saveComment() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        text: this.get('text'),
        post: this.get('post')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
