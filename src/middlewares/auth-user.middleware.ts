import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export const isUserAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.get('Authorization');
  // const authToken = req.headers.authorization;

  if (!authToken) {
    req.isAuth = false;
    return next();
  };

  // const token = authToken.split(' ')[1];
  // let decodedToken;

  // try {
  //   decodedToken = jwt.verify(token, process.env.JWT_SECRET as string);
  // } catch (error) {
  //   req.isAuth = false;
  //   return next();
  // }
  req.isAuth = true;
  next();
}