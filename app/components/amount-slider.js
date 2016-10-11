import Ember from 'ember';

export default Ember.Component.extend({
  amounts: null,
  currentSelection: null,

  sliderValues: Ember.computed('amounts', 'currentSelection', function(){
    return this.get('amounts').map(function(value){
      return { amount: value, active: this.get('currentSelection') == value};
    }.bind(this));
  }),

  actions: {
    changedSelection: function(value){
      this.set('currentSelection', value.amount);
    }
  }
});
