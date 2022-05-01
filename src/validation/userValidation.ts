/* eslint-disable import/prefer-default-export */
import * as yup from 'yup';

export const addUserSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number')
    .required(),
  phoneNumber: yup.string().required(),
});
