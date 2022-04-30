/* eslint-disable import/prefer-default-export */
import { getUsersData } from '../services/userService';

export const getUsers = (req, res, next) => {
  const usersData = getUsersData();
  res.send(`Hello ${usersData[0].name}`);
};
