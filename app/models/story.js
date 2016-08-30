import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  head: DS.attr(),
  author: DS.attr(),
  category: DS.attr(),
  text: DS.attr()
});
