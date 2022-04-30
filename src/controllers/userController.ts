/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import { getUsersData } from '../services/userService';

export const getUsers = (req: Request, res: Response) => {
  const usersData = getUsersData();
  res.send(`Hello ${usersData[0].name}`);
};
