import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET;

export const generateToken = (payload: any, expiresIn: string = '1h') => {
  return jwt.sign(payload, secretKey, { expiresIn });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secretKey);
};
