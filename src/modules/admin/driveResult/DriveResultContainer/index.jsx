import React, { useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { driveResultRequestAction } from 'redux/admin/driveResult/action';
import DriveResultComponent from 'modules/admin/driveResult/DriveResultComponent';
import { downloadResultRequestAction } from 'redux/admin/downloadResult/action';

const DriveResultContainer = () => {
  const { data, errorMessage, isError, isLoading } = useSelector(
    (state) => state.driveResultReducer,
  );

  const { driveResultMessage, driveResultIsLoading } = useSelector(
    (state) => state.driveResultReducer,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(driveResultRequestAction());
  }, [dispatch]);

  const handleDownloadResult = () => {
    dispatch(downloadResultRequestAction());
  };

  const renderTableData = useMemo(() => {
    return data.map((val, index) => {
      const {
        candidate_id,
        first_name,
        last_name,
        email,
        score,
        end_times,
      } = val;
      return (
        <tr key={candidate_id}>
          <td>{candidate_id}</td>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>{email}</td>
          <td>{score}</td>
        </tr>
      );
    });
  }, [data]);
  return (
    <DriveResultComponent
      renderTableData={renderTableData}
      errorMessage={errorMessage}
      isError={isError}
      isLoading={isLoading}
      handleDownloadResult={handleDownloadResult}
      driveResultMessage={driveResultMessage}
      driveResultIsLoading={driveResultIsLoading}
    />
  );
};

export default React.memo(DriveResultContainer);
