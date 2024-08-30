import {Request, Response, NextFunction} from 'express';

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({message: 'Yay its working'});
};


export { getUsers };