/* eslint-disable import/prefer-default-export */
import { createUser } from '../repositories/userRepository';
import { CreateUserInterface } from '../interfaces/createUserInterface';

export const createUserService = async (user: CreateUserInterface) => {
  const {
    firstName, lastName, email, countryCode, phoneNumber, _id,
  } = await createUser(user);
  return {
    firstName,
    lastName,
    email,
    countryCode,
    phoneNumber,
    _id,
  };
};
