import { useMemo } from 'react';
import { get } from 'redux/admin/apiHelper';

import { Alert } from 'core-components';

import { SERVER_URL } from 'constants/appConstants';
import { now } from 'moment';

const getDriveDetails = async () => {
  const drives = await get(`${SERVER_URL}api/v1/admin/drives`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      return <Alert className='danger'> {error} </Alert>;
    });

  const ongoingDrives = [];
  const upcomingDrives = [];
  const completedDrives = [];

  const getSeparatedDrives = () => {
    return drives.drives.map((val, index) => {
      const { id, start_time, end_time } = val;

      if (
        Date.now() > Date.parse(start_time) &&
        Date.now() < Date.parse(end_time)
      ) {
        ongoingDrives.push(val);
      }
      if (Date.now() > Date.parse(end_time)) {
        completedDrives.push(val);
      }
      if (Date.now() < Date.parse(start_time)) {
        upcomingDrives.push(val);
      }
      return true;
    });
  };
  getSeparatedDrives();

  const customData = {
    drives: {
      ongoingDrives,
      upcomingDrives,
      completedDrives,
    },
    drivesIsLoading: false,
  };
  return customData;
};

export default getDriveDetails;
