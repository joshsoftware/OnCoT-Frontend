import React, { useEffect, useState } from 'react';
import SnapshotsComponent from 'modules/admin/snapshots/SnapshotsComponent';
import getSnapshots from 'modules/admin/snapshots/SnapshotsContainer/api';
import moment from 'moment';
import { DATE_TIME_FORMAT } from 'constants/appConstants';
import { useHistory } from 'react-router-dom';

const SnapshotsContainer = () => {
  const [snapshotsAreLoading, setSnapshotsAreLoading] = useState(true);
  const [allSnapshots, setAllSnapshots] = useState([]);
  const [candidateName, setCandidateName] = useState('');
  const snapshotsData = [];
  const history = useHistory();

  useEffect(async () => {
    const data = await getSnapshots();
    const { snapshots, snapshotsLoading } = data.snapshots;
    if (!snapshotsLoading) {
      setAllSnapshots(snapshots);
      if (snapshots.length > 0) {
        setCandidateName(snapshots[0].candidate_name);
      }
      setSnapshotsAreLoading(snapshotsLoading);
    }
  }, [snapshotsAreLoading]);

  allSnapshots.map((val) => {
    const { image_url, created_at } = val;
    snapshotsData.push({
      src: image_url,
      thumbnail: image_url,
      thumbnailWidth: 250,
      thumbnailHeight: 250,
      caption: moment(created_at).format(DATE_TIME_FORMAT),
      thumbnailCaption: moment(created_at).format(DATE_TIME_FORMAT),
    });
    return (
      snapshotsData
    );
  });

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <SnapshotsComponent
      snapshotsAreLoading={snapshotsAreLoading}
      snapshotsData={snapshotsData}
      candidateName={candidateName}
      handleGoBack={handleGoBack}
    />
  );
};

export default React.memo(SnapshotsContainer);
