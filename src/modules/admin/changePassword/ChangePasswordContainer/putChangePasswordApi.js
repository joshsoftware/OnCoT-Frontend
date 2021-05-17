import axios from 'axios';
import local from 'utils/local';
import { put } from 'redux/admin/apiHelper';
import { BASE_URL } from 'constants/appConstants';

export const putChangePasswordApi = async (data) => {
  const result = await put(`${BASE_URL}auth/password`, data)
    .then((response) => {
      return response;
    }).catch((error) => {
      return error;
    });

  const apiResponse = {
    result,
  };
  return apiResponse;
};
