import React, { useMemo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { driveResultRequestAction } from 'redux/admin/driveResult/action';
import DriveResultComponent from 'modules/admin/driveResult/DriveResultComponent';
import { downloadResultRequestAction } from 'redux/admin/downloadResult/action';
import { useHistory } from 'react-router-dom';
import {
  Button,
} from 'core-components';

const DriveResultContainer = () => {
  const { data, errorMessage, isError, isLoading } = useSelector(
    (state) => state.driveResultReducer,
  );

  const { driveResultMessage, driveResultIsLoading } = useSelector(
    (state) => state.driveResultReducer,
  );

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(driveResultRequestAction(data.page));
    return () => {
      dispatch(driveResultRequestAction(data.page));
    };
  }, [dispatch]);

  const handleDownloadResult = () => {
    dispatch(downloadResultRequestAction());
  };
  const handlePageClick = (event) => {
    dispatch(driveResultRequestAction(event.selected + 1));
  };

  const onClickSnapshots = (e) => {
    const rowId = e.target.parentNode.parentNode.id;
    localStorage.setItem('candidateSnapsId', rowId);
    const driveId = localStorage.getItem('driveResultId');
    history.push(`/admin/drive/${driveId}/candidate/${rowId}/snapshots`);
  };

  const renderTableData = useMemo(() => {
    return data.result.map((val, index) => {
      const {
        candidate_id,
        first_name,
        last_name,
        email,
        score,
        end_times,
      } = val;
      return (
        <tr key={candidate_id} id={candidate_id}>
          <td>{candidate_id}</td>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>{email}</td>
          <td>{score}</td>
          <td>
            <Button onClick={onClickSnapshots}>Snapshots</Button>
          </td>
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
      handlePageClick={handlePageClick}
      pageCount={data.pages}
    />
  );
};

export default React.memo(DriveResultContainer);
