import Ember from 'ember';

export default Ember.Component.extend({
  addNewTag: false,

  actions: {
    showTagForm() {
      this.set('addNewTag', true);
    },
    saveTag() {
      var name = {
      name: this.get('name')
      };
      this.set('addNewTag', false);
      this.sendAction('saveTag', name);
    }
  }
});
