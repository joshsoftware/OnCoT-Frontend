import axios from 'axios';
import local from 'utils/local';
import { put } from 'redux/admin/apiHelper';
import { BASE_URL, SERVER_URL } from 'constants/appConstants';

export const putEditProfileApi = async (data) => {
  const result = await put(`${SERVER_URL}admin/users/${data.id}`, data)
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
