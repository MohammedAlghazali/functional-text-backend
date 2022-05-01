/* eslint-disable import/prefer-default-export */
import User from '../models/UserModel';
import { CreateUserInterface } from '../interfaces/createUserInterface';

export const createUser = async ({
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
}: CreateUserInterface) => {
  const results = await User.create({
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    countryCode: 'US',
  });
  return results;
};
