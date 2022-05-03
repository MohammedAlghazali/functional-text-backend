// @ts-nocheck
import mongoose from 'mongoose';
import connectDb from '../../db/connection';
import { createUserService } from '../../services/userService';
import { resetDatabase } from '../../helpers/databaseHelpers';

describe('Test Create User Service Function', () => {
  beforeAll(async () => {
    connectDb();
    await resetDatabase();
  });

  afterAll(async () => {
    await resetDatabase();
    mongoose.connection.close();
  });

  test('Case: Return Data As Expected', async () => {
    const user = {
      firstName: 'Mohammed',
      lastName: 'Alghazali',
      email: 'mohammed.m.alghazali@hotmail.com',
      password: '1234%#DGSDs',
      phoneNumber: '2114564368',
    };
    const createdUserData = await createUserService(user);
    expect(createdUserData).toMatchObject({
      firstName: 'Mohammed',
      lastName: 'Alghazali',
      email: 'mohammed.m.alghazali@hotmail.com',
      countryCode: 'US',
      phoneNumber: '2114564368',
    });
    // eslint-disable-next-line no-underscore-dangle
    expect(createdUserData._id instanceof Object).toBe(true);
  });
});
