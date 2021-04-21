import React, { useState, useEffect, useMemo } from 'react';

import AdminHomeComponent from 'modules/admin/adminHome/AdminHomeComponent';
import { Button } from 'core-components';

import getDriveDetails from 'modules/admin/adminHome/AdminHomeContainer/getDriveDetails';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { DATE_TIME_FORMAT } from 'constants/appConstants';

const CreateDriveContainer = () => {
  const [driveDetailsIsLoading, setDriveDetailsIsLoading] = useState(true);
  const [driveDetailsData, setDriveDetailsData] = useState([]);

  const [queryIsLoading, setQueryIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
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
      type: 'SHOW_CANDIDATES',
      payload: { currentScreen: 'SHOW_CANDIDATES', id: data[0].innerHTML },
    });
  };

  const onClickResult = (e) => {
    const rowId = e.target.parentNode.parentNode.id;
    const data = document.getElementById(rowId).querySelectorAll('.data');
    dispatch({
      type: 'DRIVE_RESULT',
      payload: { currentScreen: 'DRIVE_RESULT', id: data[0].innerHTML },
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
      if (name.toLowerCase().indexOf(query) > -1) {
        return (
          <tr key={id} id={id}>
            <td className='data'>{id}</td>
            <td>{name}</td>
            <td>{`${moment(start_time).format(DATE_TIME_FORMAT)}`}</td>
            <td>{`${moment(end_time).format(DATE_TIME_FORMAT)}`}</td>
            {driveStatus !== completed && (
              <td>
                <Button onClick={onClickEdit}>Edit</Button>
              </td>
            )}
            <td>
              <Button
                onClick={
                  driveStatus === completed ? onClickResult : onClickCandidates
                }
              >
                {driveStatus === completed ? 'Result' : 'Candidates'}
              </Button>
            </td>
            {driveStatus !== completed && (
              <td>
                <Button onClick={onClickResult}>Result</Button>
              </td>
            )}
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
      query={query}
    />
  );
};

export default CreateDriveContainer;
