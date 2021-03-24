import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email().required('Enter valid email!'),

  password: yup.string().required('Password is required!').min(6),
});
