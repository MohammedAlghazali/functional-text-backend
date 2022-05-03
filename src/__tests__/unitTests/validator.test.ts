// @ts-nocheck
import { addUserSchema } from '../../validation/userValidation';
import validator from '../../validation/validator';

describe('Test Validator Function', () => {
  test('Case: All Data Are Valid', async () => {
    const validationResults = await validator({
      schema: addUserSchema,
      data: {
        firstName: 'Mohammed',
        lastName: 'Alghazali',
        email: 'mohammed.m.alghazali@hotmail.com',
        password: '1234%#DGSDs',
        phoneNumber: '2114564368',
      },
    });
    expect(validationResults).toMatchObject({
      isValid: true,
      error: '',
    });
  });
  test('Case: Missing Data', async () => {
    const validationResults = await validator({
      schema: addUserSchema,
      data: {
        firstName: 'Mohammed',
        lastName: 'Alghazali',
        password: '1234%#DGSDs',
        phoneNumber: '2114564368',
      },
    });
    expect(validationResults).toMatchObject({
      isValid: false,
      error: 'email is a required field',
    });
  });
  test('Case: Invalid Email', async () => {
    const validationResults = await validator({
      schema: addUserSchema,
      data: {
        firstName: 'Mohammed',
        lastName: 'Alghazali',
        email: 'mohammed.m.alghazali.com',
        password: '1234%#DGSDs',
        phoneNumber: '2114564368',
      },
    });
    expect(validationResults).toMatchObject({
      isValid: false,
      error: 'email must be a valid email',
    });
  });
});
