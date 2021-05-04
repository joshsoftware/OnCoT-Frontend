import { get } from 'redux/admin/apiHelper';

import { Alert } from 'core-components';

import { SERVER_URL } from 'constants/appConstants';

const getDriveDetails = async () => {
  const driveId = localStorage.getItem('editDriveId');

  const drive = await get(`${SERVER_URL}admin/drives/${driveId}`)
    .then((response) => {
      return response.data.data.drive;
    })
    .catch((error) => {
      return <Alert className='danger'> {error} </Alert>;
    });

  const customData = {
    drive,
  };
  return customData;
};

export default getDriveDetails;
