import { get } from 'redux/admin/apiHelper';

import { Alert } from 'core-components';

import { SERVER_URL } from 'constants/appConstants';
import local from 'utils/local';

export const getTemplates = async () => {
  const problemId = local.getItem('templateProblemId');
  const templates = await get(`${SERVER_URL}admin/templates?problem_id=${problemId}`)
    .then((response) => {
      return response.data.data.templates;
    })
    .catch((error) => {
      return <Alert className='danger'> {error} </Alert>;
    });

  const customData = {
    templates,
    templatesLoading: false,
  };
  return customData;
};
