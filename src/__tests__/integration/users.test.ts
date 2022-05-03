// @ts-nocheck
import supertest from 'supertest';
import assert from 'assert';
import mongoose from 'mongoose';

import app from '../../app';
import { resetDatabase } from '../../helpers/databaseHelpers';

const request = supertest(app);

describe('POST /users', () => {
  beforeAll(async () => {
    await resetDatabase();
  });
  afterAll(async () => {
    mongoose.connection.close();
  });
  it('Case: Create a new user successfully', (done) => {
    const requestBody = {
      firstName: 'Mohammed',
      lastName: 'Alghazali',
      email: 'mohammed.m.alghazali@hotmail.com',
      password: 'mohammed1A',
      phoneNumber: '4364634364',
    };

    request
      .post('/api/v1/users')
      .send(requestBody)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .then(({ body }) => {
        assert(body.data?.firstName, 'Mohammed');
        expect(body.data).toMatchObject({
          firstName: 'Mohammed',
          lastName: 'Alghazali',
          email: 'mohammed.m.alghazali@hotmail.com',
          phoneNumber: '4364634364',
        });
        done();
      })
      .catch((err) => done(err));
  });

  it('Case: Create a new user with an existing email', (done) => {
    const requestBody = {
      firstName: 'Mohammed',
      lastName: 'Alghazali',
      email: 'mohammed.m.alghazali@hotmail.com',
      password: 'mohammed1A',
      phoneNumber: '4364634364',
    };

    request
      .post('/api/v1/users')
      .send(requestBody)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .then(({ body }) => {
        expect(body).toMatchObject({
          message: 'Bad Request',
          error: 'duplicate key error',
        });
        done();
      })
      .catch((err) => done(err));
  });

  it('Case: Create a new user with missing fields', (done) => {
    const requestBody = {
      firstName: 'Mohammed',
      password: 'mohammed1A',
      phoneNumber: '4364634364',
    };

    request
      .post('/api/v1/users')
      .send(requestBody)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .then(({ body }) => {
        expect(body).toMatchObject({
          message: 'Bad Request',
          error: 'lastName is a required field, email is a required field',
        });
        done();
      })
      .catch((err) => done(err));
  });

  it('Case: Create a new user with password do not match the constraint', (done) => {
    const requestBody = {
      firstName: 'Mohammed',
      lastName: 'Alghazali',
      email: 'mohammed.m.alghazali@hotmail.com',
      password: 'mohammed1',
      phoneNumber: '4364634364',
    };

    request
      .post('/api/v1/users')
      .send(requestBody)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .then(({ body }) => {
        expect(body).toMatchObject({
          message: 'Bad Request',
          error:
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number',
        });
        done();
      })
      .catch((err) => done(err));
  });
});
