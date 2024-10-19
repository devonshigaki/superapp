import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchProviders, fetchProviderData, updateProviderData, createProviderOffer, fetchProviderOffers } from '../providerService';

const mock = new MockAdapter(axios);

describe('providerService', () => {
  it('should fetch providers', async () => {
    mock.onGet('/providers').reply(200, {
      providers: [
        // Example provider data
      ],
    });

    const providers = await fetchProviders();
    expect(providers).toBeDefined();
  });

  it('should fetch provider data', async () => {
    mock.onGet('/providers/data').reply(200, {
      // Example provider data
    });

    const providerData = await fetchProviderData();
    expect(providerData).toBeDefined();
  });

  it('should update provider data', async () => {
    mock.onPut('/providers/data').reply(200, {
      // Example provider data update response
    });

    const updateResponse = await updateProviderData();
    expect(updateResponse).toBeDefined();
  });

  it('should create a provider offer', async () => {
    mock.onPost('/providers/offers').reply(201, {
      // Example provider offer creation response
    });

    const createResponse = await createProviderOffer();
    expect(createResponse).toBeDefined();
  });

  it('should fetch provider offers', async () => {
    mock.onGet('/providers/offers').reply(200, {
      offers: [
        // Example provider offer data
      ],
    });

    const offers = await fetchProviderOffers();
    expect(offers).toBeDefined();
  });
});
