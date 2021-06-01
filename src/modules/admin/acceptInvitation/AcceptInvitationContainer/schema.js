import * as yup from 'yup';

export const schema = yup.object().shape({
  first_name: yup.string().required('First Name is required'),
  last_name: yup.string().required('Last Name is required'),
  mobile_number: yup.string()
    .required()
    .matches(/^[0-9]+$/, 'Invalid Mobile Number')
    .min(10, 'Invalid Mobile Number')
    .max(10, 'Invalid Mobile Number'),
  password: yup.string().min(6).max(8).required('Password is required!'),
  password_confirmation: yup.string().min(6).required('Password Confirmation is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
