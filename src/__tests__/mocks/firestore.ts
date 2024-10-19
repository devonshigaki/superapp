import { firestore } from '../../database/firestoreService';

export const mockFirestore = () => {
  (firestore().collection as jest.Mock).mockImplementation(() => ({
    doc: jest.fn(() => ({
      get: jest.fn(() => ({
        data: jest.fn(),
      })),
      update: jest.fn(),
      add: jest.fn(() => ({
        id: 'testId',
      })),
    })),
    add: jest.fn(() => ({
      id: 'testId',
    })),
  }));
};
