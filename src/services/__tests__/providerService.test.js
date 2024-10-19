import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchReports, validateReport, createOffer } from '../providerService';

const mock = new MockAdapter(axios);

describe('providerService', () => {
  it('should fetch reports', async () => {
    mock.onGet('/reports').reply(200, {
      reports: [
        // Example report data
      ],
    });

    const reports = await fetchReports();
    expect(reports).toBeDefined();
  });

  it('should validate a report', async () => {
    const reportId = 'testReportId';
    mock.onPut(`/reports/${reportId}/validate`).reply(200, {
      message: 'Report validated',
    });

    const response = await validateReport(reportId);
    expect(response).toBeDefined();
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
});
