export const mockCloudSql = () => {
  global.cloudSql = {
    query: jest.fn(() => ({
      rows: [],
    })),
  };
};
