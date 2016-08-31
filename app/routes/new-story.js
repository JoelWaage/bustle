import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save1() {
      var params = {
        image: this.get('image'),
        head: this.get('head'),
        author: this.get('author'),
        category: this.get('category'),
        text: this.get('text')
      };
      var newStory = this.store.createRecord('story', params);
      newStory.save();
      this.transitionTo('index');
    }
  }
});
