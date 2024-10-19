import { createLog, fetchLogs, fetchLogsByEventType, fetchLogsByUserId, fetchLogsByTimestamp, fetchLogsByTimestampRange, deleteLogsByEventType, deleteLogsByTimestamp, deleteLogsByTimestampRange } from '../../../database/cloudSqlService';
import { mockCloudSql } from '../../mocks/cloudSql';

jest.mock('../../../database/cloudSqlService');

describe('Cloud SQL Service', () => {
  beforeEach(() => {
    mockCloudSql();
  });

  it('should create a log', async () => {
    const mockLogData = {
      eventType: 'testEvent',
      userId: 'testUserId',
      timestamp: new Date(),
    };
    (cloudSql.query as jest.Mock).mockResolvedValue({
      rows: [{
        id: 'testLogId',
      }],
    });
    const logId = await createLog(mockLogData);
    expect(logId).toBe('testLogId');
  });

  it('should fetch logs', async () => {
    const mockLogs = [{
      id: 'testLogId',
      eventType: 'testEvent',
    }];
    (cloudSql.query as jest.Mock).mockResolvedValue({
      rows: mockLogs,
    });
    const logs = await fetchLogs();
    expect(logs).toEqual(mockLogs);
  });

  it('should fetch logs by event type', async () => {
    const eventType = 'testEvent';
    const mockLogs = [{
      id: 'testLogId',
      eventType: eventType,
    }];
    (cloudSql.query as jest.Mock).mockResolvedValue({
      rows: mockLogs,
    });
    const logs = await fetchLogsByEventType(eventType);
    expect(logs).toEqual(mockLogs);
  });

  it('should fetch logs by user ID', async () => {
    const userId = 'testUserId';
    const mockLogs = [{
      id: 'testLogId',
      userId: userId,
    }];
    (cloudSql.query as jest.Mock).mockResolvedValue({
      rows: mockLogs,
    });
    const logs = await fetchLogsByUserId(userId);
    expect(logs).toEqual(mockLogs);
  });

  it('should fetch logs by timestamp', async () => {
    const timestamp = new Date();
    const mockLogs = [{
      id: 'testLogId',
      timestamp: timestamp,
    }];
    (cloudSql.query as jest.Mock).mockResolvedValue({
      rows: mockLogs,
    });
    const logs = await fetchLogsByTimestamp(timestamp);
    expect(logs).toEqual(mockLogs);
  });

  it('should fetch logs by timestamp range', async () => {
    const startTimestamp = new Date();
    const endTimestamp = new Date();
    const mockLogs = [{
      id: 'testLogId',
      timestamp: new Date(),
    }];
    (cloudSql.query as jest.Mock).mockResolvedValue({
      rows: mockLogs,
    });
    const logs = await fetchLogsByTimestampRange(startTimestamp, endTimestamp);
    expect(logs).toEqual(mockLogs);
  });

  it('should delete logs by event type', async () => {
    const eventType = 'testEvent';
    (cloudSql.query as jest.Mock).mockResolvedValue();
    await deleteLogsByEventType(eventType);
    expect(cloudSql.query).toHaveBeenCalledWith('DELETE FROM logs WHERE eventType = ?', [eventType]);
  });

  it('should delete logs by timestamp', async () => {
    const timestamp = new Date();
    (cloudSql.query as jest.Mock).mockResolvedValue();
    await deleteLogsByTimestamp(timestamp);
    expect(cloudSql.query).toHaveBeenCalledWith('DELETE FROM logs WHERE timestamp = ?', [timestamp]);
  });

  it('should delete logs by timestamp range', async () => {
    const startTimestamp = new Date();
    const endTimestamp = new Date();
    (cloudSql.query as jest.Mock).mockResolvedValue();
    await deleteLogsByTimestampRange(startTimestamp, endTimestamp);
    expect(cloudSql.query).toHaveBeenCalledWith('DELETE FROM logs WHERE timestamp BETWEEN ? AND ?', [startTimestamp, endTimestamp]);
  });
});
