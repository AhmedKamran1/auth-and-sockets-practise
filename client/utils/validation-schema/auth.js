import * as yup from 'yup';

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email.')
    .required('Email is a required.'),
});

export const passwordResetSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Must be at least 8 characters.')
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/,
      'Password must contain at least one digit, one uppercase letter, and one special character.'
    )
    .required('Password is required.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password do not match.')
    .required('Please confirm password.'),
});

export const loginSchema = yup
  .object()
  .concat(emailSchema)
  .shape({
    password: yup.string().required('Password is a required.'),
  });

export const signupSchema = yup
  .object()
  .concat(emailSchema)
  .concat(passwordResetSchema)
  .shape({
    firstName: yup
      .string()
      .min(3, 'Must be at least 3 characters.')
      .max(20, 'Must be at most 20 characters.')
      .matches(/^[a-zA-Z]+$/, 'First name should only contain letters.')
      .required('first name is required.'),
    lastName: yup
      .string()
      .min(3, 'Must be at least 3 characters.')
      .max(20, 'Must be at most 20 characters.')
      .matches(/^[a-zA-Z]+$/, 'Last name should only contain letters.')
      .required('last name is required.'),
    agree: yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
  });
