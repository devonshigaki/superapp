import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchOffers, createOffer, updateOffer, deleteOffer } from '../offerService';

const mock = new MockAdapter(axios);

describe('offerService', () => {
  it('should fetch offers', async () => {
    mock.onGet('/offers').reply(200, {
      offers: [
        // Example offer data
      ],
    });

    const offers = await fetchOffers();
    expect(offers).toBeDefined();
  });

  it('should create an offer', async () => {
    const offer = {
      // Example offer data
    };
    mock.onPost('/offers').reply(201, {
      message: 'Offer created',
    });

    const response = await createOffer(offer);
    expect(response).toBeDefined();
  });

  it('should update an offer', async () => {
    const offerId = 'testOfferId';
    const updatedOffer = {
      // Example updated offer data
    };
    mock.onPut(`/offers/${offerId}`).reply(200, {
      message: 'Offer updated',
    });

    const response = await updateOffer(offerId, updatedOffer);
    expect(response).toBeDefined();
  });

  it('should delete an offer', async () => {
    const offerId = 'testOfferId';
    mock.onDelete(`/offers/${offerId}`).reply(204);

    const response = await deleteOffer(offerId);
    expect(response).toBeDefined();
  });
});
