import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,

  actions: {
    showUpdateForm() {
      this.set('updateCommentForm', true);
    },

    update(comment) {
      var params = {
        author: this.get('author'),
        text: this.get('text'),
        date: this.get('date')
      };
      this.set('updateCommentForm', false);
      this.sendAction('update', comment, params);
    }
  }
});
