import axios from 'axios';
import { STRIPE_SECRET_KEY } from '@env';

const API_BASE_URL = 'https://api.stripe.com/v1'; // Replace with your actual Stripe API base URL

export const createStripeCheckoutSession = async (lineItems: any[], successUrl: string, cancelUrl: string): Promise<string> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/checkout/sessions`, {
      mode: 'payment',
      line_items: lineItems,
      success_url: successUrl,
      cancel_url: cancelUrl,
    }, {
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data.id;
  } catch (error) {
    console.error('Error creating Stripe checkout session:', error);
    throw error;
  }
};
