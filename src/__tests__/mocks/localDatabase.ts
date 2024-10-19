export const mockLocalDatabase = () => {
  global.localDatabase = {
    all: jest.fn(() => []),
    run: jest.fn(() => ({
      lastID: 'testId',
    })),
  };
};
