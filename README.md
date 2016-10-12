# Deposit-funds

Ember application for a simple credit card form.

## Demo

[See it live here](https://safe-shore-25668.herokuapp.com/)

## How it works
This is just a simple credit card form. It validates the credit card via Stripe and creates credit card object with the a Stripe token. That token can then be sent to a server to charge the card.

This is currently setup to a Stripe account in test mode. If you would like to test a card, use one of the ones provided in this [document](https://stripe.com/docs/testing).

### Running Tests

* `ember test`
* `ember test --server`
