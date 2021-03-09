import * as yup from 'yup';

export const schema = yup.object().shape({
  fName: yup.string()
    .required('First name is a required field')
    .matches(/^[A-Za-z '.-]*$/, 'First name should be valid'),

  lName: yup.string()
    .required('Last name is a required field')
    .matches(/^[A-Za-z '.-]*$/, 'Last name should be valid'),

  mobile: yup.string()
    .max(10, 'Mobile should be a valid 10-digit numeric value')
    .min(10, 'Mobile should be a valid 10-digit numeric value'),
});
