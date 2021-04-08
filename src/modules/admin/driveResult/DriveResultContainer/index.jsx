import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { driveResultRequestAction } from 'redux/admin/driveResult/action';
import DriveResultComponent from '../DriveResultComponent';

const DriveResultContainer = () => {
  const { data } = useSelector((state) => state.driveResultReducer);
  const dispatch = useDispatch();

  dispatch(driveResultRequestAction());
  const renderTableData = useMemo(() => {
    return data.map((val, index) => {
      const {
        candidate_id,
        score,
        end_times,
      } = val;
      return (
        <tr key={candidate_id}>
          <td>{candidate_id}</td>
          <td>{score}</td>
          <td>{end_times}</td>
        </tr>
      );
    });
  }, [data]);
  return (
    <DriveResultComponent
      renderTableData={renderTableData}
    />
  );
};

export default React.memo(DriveResultContainer);
