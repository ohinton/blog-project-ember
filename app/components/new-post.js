import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    showAddForm() {
      this.set('addNewPost', true);
    },
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        text: this.get('text'),
        photo: this.get('photo'),
        timestamp: this.get('timestamp')
      };
      this.set('addNewPost', false);
      this.sendAction('save', params);
    }
  }
});
