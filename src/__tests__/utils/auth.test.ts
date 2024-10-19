import { generateToken, verifyToken } from '../../utils/auth';

describe('Auth Utils', () => {
  const secretKey = 'testSecret';
  process.env.JWT_SECRET = secretKey;

  it('should generate a JWT token', () => {
    const payload = { userId: 'testUser' };
    const token = generateToken(payload);
    expect(token).toBeDefined();
  });

  it('should verify a valid JWT token', () => {
    const payload = { userId: 'testUser' };
    const token = generateToken(payload);
    const decodedToken = verifyToken(token);
    expect(decodedToken).toEqual(payload);
  });

  it('should throw an error for an invalid JWT token', () => {
    const invalidToken = 'invalidToken';
    expect(() => verifyToken(invalidToken)).toThrowError();
  });
});
