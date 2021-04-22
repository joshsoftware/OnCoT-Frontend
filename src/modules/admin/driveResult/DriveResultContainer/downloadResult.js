import { get } from 'redux/admin/apiHelper';

import { Alert } from 'core-components';

import { SERVER_URL } from 'constants/appConstants';
import local from 'utils/local';

const downloadResult = async () => {
  const driveId = local.getItem('driveResultId');
  const problems = await get(
    `${SERVER_URL}drives/${driveId}/results/csv_result`,
  )
    .then((response) => {
      return response.data.data.problems;
    })
    .catch((error) => {
      return <Alert className='danger'> {error} </Alert>;
    });

  const customData = {
    problems,
    problemIsLoading: false,
  };
  return customData;
};

export default downloadResult;
