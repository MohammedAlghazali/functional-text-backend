/* eslint-disable import/prefer-default-export */
import { getUsers } from '../repositories/userRepository';

export const getUsersData = () => {
  const usersData = getUsers();
  return usersData;
};
