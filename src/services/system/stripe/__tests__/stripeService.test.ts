import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createStripeCheckoutSession } from '../stripeService';

const mock = new MockAdapter(axios);

describe('stripeService', () => {
  it('should create a Stripe checkout session', async () => {
    mock.onPost('/stripe/checkout').reply(200, {
      // Example Stripe checkout session response
    });

    const stripeResponse = await createStripeCheckoutSession();
    expect(stripeResponse).toBeDefined();
  });
});
