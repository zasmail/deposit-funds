import Ember from 'ember';

export default Ember.Component.extend({
  hasNumber: Ember.computed.notEmpty('number'),
  hasName: Ember.computed.notEmpty('name'),

  amounts:  [5, 10, 20, 40, 100, 250, 1000],
  amount:   40,
  number:   null,
  name:     null,
  date:     null,
  cvc:      null,
  month:    null,
  year:     null,

  setMonthAndYear: Ember.on('didInsertElement', Ember.observer('date', function(){
    if(this.get('date') === null){
      return;
    } else{
      if(this.get('date').split('/').length > 1){
        this.set('month', this.get('date').split('/')[0]);
        this.set('year', this.get('date').split('/')[1]);
      }
    }
  })),

  actions:{
    changedSelection: function(value){
      this.set('amount', value.amount);
    },
    runCard: function(){
      if(!this.get('hasName')){
        this.set('creditCardErrors',"Please enter a name");
      } else{
        this.set('creditCardErrors', null);
        this.set('cardSaved', false);
        this.sendAction('processCard', {
          number: this.get('number'),
          expMonth: this.get('month'),
          expYear: this.get('year'),
          cvc: this.get('cvc')
        });
      }
    },
  },
});
