import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const hashUserPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const validatePassword = async (
  passwordInDatabase: string,
  loggedInPassword: string
): Promise<boolean> => {
  return bcrypt.compare(passwordInDatabase, loggedInPassword);
};

// export const createToken = (payload: PayloadInterface): string => {
//   return jwt.sign(payload, process.env.JWT_SECRET as string, {
//     expiresIn: 86400,
//   });
// };

// export const verifyToken: VerifyTokenInterface = (token: string) => {
//   return jwt.verify(
//     token,
//     process.env.JWT_SECRET as string
//   ) as PayloadInterface;
// };

// export const sendTokenResponse = (payload: PayloadInterface): string => {
//   const token = createToken(payload);
//   return token;
// };
