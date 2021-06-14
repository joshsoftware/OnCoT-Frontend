import { get } from 'redux/admin/apiHelper';
import { Alert } from 'core-components';
import { SERVER_URL } from 'constants/appConstants';

const getSnapshots = async () => {
  const driveId = localStorage.getItem('driveResultId');
  const candidateId = localStorage.getItem('candidateSnapsId');

  const snapshots = await get(`${SERVER_URL}snapshots?drive_id=${driveId}&candidate_id=${candidateId}`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      return <Alert className='danger'> {error} </Alert>;
    });

  const customData = {
    snapshots,
    snapshotsLoading: false,
  };
  return customData;
};

export default getSnapshots;
