import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('deposit-form', 'Integration | Component | deposit form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{deposit-form}}`);

  assert.equal('', '');

  // Template block usage:
  this.render(hbs`
    {{#deposit-form}}
      template block text
    {{/deposit-form}}
  `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
