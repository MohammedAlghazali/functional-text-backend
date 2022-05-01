/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { createUserService } from '../services/userService';
import validator from '../validation/validator';
import { addUserSchema } from '../validation/userValidation';
import { STATUS } from '../config/constants';

export const addUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body;
  try {
    const validationResults = await validator({
      schema: addUserSchema,
      data: req.body,
    });

    if (validationResults.isValid === false) {
      res.status(STATUS.BAD_REQUEST).json({
        message: 'Bad Request',
        error: validationResults.error,
      });
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const userData = await createUserService({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    res.status(STATUS.CREATED).json({
      data: userData,
      message: 'Created',
    });
  } catch (error: any) {
    if (error.code === 11000) {
      res.status(STATUS.BAD_REQUEST).json({
        message: 'Bad Request',
        error: 'duplicate key error',
      });
    } else {
      res.status(STATUS.SERVER_ERROR).json({
        message: 'Internal Server Error',
        error: '',
      });
    }
  }
};
