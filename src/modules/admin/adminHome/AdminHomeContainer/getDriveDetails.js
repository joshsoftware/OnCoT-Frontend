import { Alert } from 'core-components';

import { get } from 'redux/admin/apiHelper';
import { SERVER_URL } from 'constants/appConstants';

const getSeparatedDrives = (data) => {
  const ongoingDrives = [];
  const upcomingDrives = [];
  const completedDrives = [];
  const customData = {
    drives: {
      ongoingDrives,
      upcomingDrives,
      completedDrives,
    },
    drivesIsLoading: false,
  };
  data.drives.map((val, index) => {
    const { start_time, end_time } = val;

    if (Date.now() > Date.parse(end_time)) {
      customData.drives.completedDrives.push(val);
    } else if (Date.now() < Date.parse(start_time)) {
      customData.drives.upcomingDrives.push(val);
    } else {
      customData.drives.ongoingDrives.push(val);
    }
    return true;
  });

  return customData;
};

const getDriveDetails = async () => {
  try {
    const response = await get(`${SERVER_URL}admin/drives`);
    if (response.status !== 200) {
      throw new Error(`Error:${response.status}`);
    }
    const {
      data: { data },
    } = response;

    const customData = getSeparatedDrives(data);
    return customData;
  } catch (e) {
    return e;
  }
};

export default getDriveDetails;
