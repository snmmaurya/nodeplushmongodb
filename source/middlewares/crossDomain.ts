import express, {Request, Response, NextFunction} from 'express';

const CrossDomain = (req: Request, res: Response, next: NextFunction) => {
  res.header(`Access-Control-Allow-Origin`, `localhost`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
};

export default CrossDomain;