import DS from 'ember-data';

export default DS.Model.extend({
  last4: DS.attr('string'),
  expMonth: DS.attr('number'),
  expYear: DS.attr('number'),
  funding: DS.attr('string'),
  brand: DS.attr('string'),
  stripeToken: DS.attr('string'),
  stripeCardId: DS.attr('string'),

});
