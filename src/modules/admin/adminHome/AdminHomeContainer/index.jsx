import React, { useState, useEffect, useMemo } from 'react';

import AdminHomeComponent from 'modules/admin/adminHome/AdminHomeComponent';
import { Button } from 'core-components';

import getDriveDetails from 'modules/admin/adminHome/AdminHomeContainer/getDriveDetails';
import { useDispatch } from 'react-redux';

const CreateDriveContainer = () => {
  const [driveDetailsIsLoading, setDriveDetailsIsLoading] = useState(true);
  const [driveDetailsData, setDriveDetailsData] = useState([]);

  const [queryIsLoading, setQueryIsLoading] = useState(true);

  const [q, setQ] = useState('');
  const handleQueryChange = (event) => {
    setQ(event.target.value);
    setQueryIsLoading(true);
  };

  const ongoing = 'ongoingDrives';
  const upcoming = 'upcomingDrives';
  const completed = 'completedDrives';

  const dispatch = useDispatch();
  const onClickEdit = (e) => {
    const rowId = e.target.parentNode.parentNode.id;
    const data = document.getElementById(rowId).querySelectorAll('.data');
    dispatch({
      type: 'EDIT_DRIVE',
      payload: { currentScreen: 'EDIT_DRIVE', id: data[0].innerHTML },
    });
  };
  const onClickCandidates = (e) => {
    const rowId = e.target.parentNode.parentNode.id;
    const data = document.getElementById(rowId).querySelectorAll('.data');
    dispatch({
      type: 'INVITE_CANDIDATES',
      payload: { currentScreen: 'INVITE_CANDIDATES', id: data[0].innerHTML },
    });
  };

  const renderTableData = (driveStatus) => {
    switch (driveStatus) {
      case ongoing:
        if (typeof driveDetailsData.ongoingDrives === 'undefined') {
          return false;
        }
        break;
      case upcoming:
        if (typeof driveDetailsData.upcomingDrives === 'undefined') {
          return false;
        }
        break;
      case completed:
        if (typeof driveDetailsData.completedDrives === 'undefined') {
          return false;
        }
        break;
      default:
        return;
    }
    const { ongoingDrives, upcomingDrives, completedDrives } = driveDetailsData;
    const getCurrentRenderDrive = () => {
      switch (driveStatus) {
        case ongoing:
          return ongoingDrives;
        case upcoming:
          return upcomingDrives;
        case completed:
          return completedDrives;
        default:
          return false;
      }
    };
    return getCurrentRenderDrive().map((val, index) => {
      const { id, name, start_time, end_time } = val;
      if (name.toLowerCase().indexOf(q) > -1) {
        return (
          <tr key={id} id={id}>
            <td className='data'>{id}</td>
            <td>{name}</td>
            <td>{start_time}</td>
            <td>{end_time}</td>
            {driveStatus !== completed && (
              <td>
                <Button onClick={onClickEdit}>Edit</Button>
              </td>
            )}
            <td>
              <Button onClick={onClickCandidates}>Candidates</Button>
            </td>
          </tr>
        );
      }
      return false;
    });
  };

  useEffect(async () => {
    const data = await getDriveDetails();
    const { drives, drivesIsLoading } = data;
    if (!drivesIsLoading) {
      setDriveDetailsData(drives);
      setDriveDetailsIsLoading(drivesIsLoading);
    }
  }, [driveDetailsIsLoading]);

  useEffect(() => {
    if (queryIsLoading) {
      setQueryIsLoading(false);
    }
  }, [queryIsLoading]);

  return (
    <AdminHomeComponent
      renderTableData={renderTableData}
      handleQueryChange={handleQueryChange}
      query={q}
    />
  );
};

export default CreateDriveContainer;
