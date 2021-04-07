import React, { useState, useEffect, useMemo } from 'react';
import AdminHomeComponent from 'modules/admin/adminHome/AdminHomeComponent';
import getDriveDetails from 'modules/admin/adminHome/AdminHomeContainer/getDriveDetails';
import { Button } from 'core-components';

const CreateDriveContainer = () => {
  const [driveDetailsIsLoading, setDriveDetailsIsLoading] = useState(true);
  const [driveDetailsData, setDriveDetailsData] = useState([]);

  const [queryIsLoading, setQueryIsLoading] = useState(true);

  const [q, setQ] = useState('');
  const handleQueryChange = (event) => {
    setQ(event.target.value);
    setQueryIsLoading(true);
  };

  const renderOngoingDrives = useMemo(() => {
    if (driveDetailsData.ongoingDrives === undefined) {
      return;
    }
    return driveDetailsData.ongoingDrives.map((val, index) => {
      const { id, name, start_time, end_time } = val;
      if (name.toLowerCase().indexOf(q) > -1) {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{start_time}</td>
            <td>{end_time}</td>
            <td>
              <Button>Edit</Button>
            </td>
            <td>
              <Button>Candidates</Button>
            </td>
          </tr>
        );
      }
      return false;
    });
  }, [driveDetailsData.ongoingDrives]);

  const renderUpcomingDrives = useMemo(() => {
    if (driveDetailsData.upcomingDrives === undefined) {
      return;
    }
    return driveDetailsData.upcomingDrives.map((val, index) => {
      const { id, name, start_time, end_time } = val;

      if (name.toLowerCase().indexOf(q) > -1) {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{start_time}</td>
            <td>{end_time}</td>
            <td>
              <Button>Edit</Button>
            </td>
            <td>
              <Button>Candidates</Button>
            </td>
          </tr>
        );
      }
      return false;
    });
  }, [driveDetailsData.upcomingDrives]);

  const renderCompletedDrives = useMemo(() => {
    if (driveDetailsData.completedDrives === undefined) {
      return;
    }
    return driveDetailsData.completedDrives.map((val, index) => {
      const { id, name, start_time, end_time } = val;

      if (name.toLowerCase().indexOf(q) > -1) {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{start_time}</td>
            <td>{end_time}</td>
            <td>
              <Button>Candidates</Button>
            </td>
          </tr>
        );
      }
      return false;
    });
  }, [driveDetailsData.completedDrives]);

  useEffect(async () => {
    const data = await getDriveDetails();
    const { drives, drivesIsLoading } = data;
    if (!drivesIsLoading) {
      setDriveDetailsData(drives);
      setDriveDetailsIsLoading(drivesIsLoading);
    }
  }, [
    driveDetailsIsLoading,
    driveDetailsData.ongoingDrives,
    driveDetailsData.upcomingDrives,
    driveDetailsData.completedDrives,
  ]);
  useEffect(() => {
    if (queryIsLoading) {
      setQueryIsLoading(false);
    }
  }, [queryIsLoading]);

  return (
    <AdminHomeComponent
      driveDetailsData={driveDetailsData}
      renderOngoingDrives={renderOngoingDrives}
      renderUpcomingDrives={renderUpcomingDrives}
      renderCompletedDrives={renderCompletedDrives}
      handleQueryChange={handleQueryChange}
      query={q}
    />
  );
};

export default CreateDriveContainer;
