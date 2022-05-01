/* eslint-disable import/prefer-default-export */
import User from '../models/UserModel';

export const resetDatabase = async () => {
  await User.deleteMany();
};
