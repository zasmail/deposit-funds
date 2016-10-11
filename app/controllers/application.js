import Ember from 'ember';

export default Ember.Controller.extend({
  stripe: Ember.inject.service(),
  ajax: Ember.inject.service(),
  stripeIsProcessing: false,
  cardSaving: false,
  creditCardErrors: null,
  cardSaved: false,

  actions:{
    processCard: function(creditCard) {
      this.set('cardSaving', true);
      var stripe = this.get('stripe');
      this.set('creditCard', creditCard);
      this.set('stripeIsProcessing', true);
      var card = {
        number: creditCard.number,
        cvc: creditCard.cvc,
        exp_month: parseInt(creditCard.expMonth),
        exp_year: parseInt(creditCard.expYear)
      };
      this.set('stripeIsProcessing', true);

      stripe.card.createToken(card).then(function(response){
        this.set('stripeIsProcessing', false);
        this.set('token', response.id);
        //TODO make sure this is attatched then remove the number
        return response;
      }.bind(this), function(error){
        this.set('stripeIsProcessing', false);
        this.set('creditCardErrors', error.error.message);
        this.set('cardSaving', false);
        return;
      }.bind(this)).then(function(response){
        if(response){
          this.set('creditCard', this.store.createRecord('creditCard', {
            stripeToken: response.id,
            last4: response.card.last4,
            expMonth: response.card.exp_month,
            expYear: response.card.exp_year,
            funding: response.card.funding,
            brand: response.card.brand,
            stripeCardId: response.card.id,
          }));
          //TODO send this to a server to be charged
          this.set('cardSaved', true);
          this.set('creditCardErrors', null);
        } else{
          this.set('cardSaving', false);
        }
      }.bind(this));
    },
  }
});
