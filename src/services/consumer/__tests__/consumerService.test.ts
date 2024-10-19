import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchConsumerData, updateConsumerData, createConsumerReport, fetchConsumerReports } from '../consumerService';

const mock = new MockAdapter(axios);

describe('consumerService', () => {
  it('should fetch consumer data', async () => {
    mock.onGet('/consumers/data').reply(200, {
      // Example consumer data
    });

    const consumerData = await fetchConsumerData();
    expect(consumerData).toBeDefined();
  });

  it('should update consumer data', async () => {
    mock.onPut('/consumers/data').reply(200, {
      // Example consumer data update response
    });

    const updateResponse = await updateConsumerData();
    expect(updateResponse).toBeDefined();
  });

  it('should create a consumer report', async () => {
    mock.onPost('/consumers/reports').reply(201, {
      // Example consumer report creation response
    });

    const createResponse = await createConsumerReport();
    expect(createResponse).toBeDefined();
  });

  it('should fetch consumer reports', async () => {
    mock.onGet('/consumers/reports').reply(200, {
      reports: [
        // Example consumer report data
      ],
    });

    const reports = await fetchConsumerReports();
    expect(reports).toBeDefined();
  });
});
