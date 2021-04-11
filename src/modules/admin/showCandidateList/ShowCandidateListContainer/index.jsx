import ShowCandidateListComponent from 'modules/admin/showCandidateList/ShowCandidateListComponent';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCandidates from 'modules/admin/showCandidateList/ShowCandidateListContainer/api';
import local from 'utils/local';

const ShowCandidateListContainer = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.adminHomeComponentReducer);
  const [allCandidates, setAllCandidates] = useState([]);

  useEffect(async () => {
    const data = await getCandidates(id);
    setAllCandidates(data);
  }, []);
  const renderTableData = () => {
    if (typeof allCandidates === 'undefined') {
      return (
        <tr>
          <td>Invite candidate(s) to view data!</td>
        </tr>
      );
    }
    return allCandidates.map((val, index) => {
      const { candidateId, FirstName, LastName, email, phoneNumber } = val;
      return (
        <tr key={candidateId}>
          <td>{candidateId}</td>
          <td>{FirstName}</td>
          <td>{LastName}</td>
          <td>{email}</td>
          <td>{phoneNumber}</td>
        </tr>
      );
    });
  };
  const handleAddCandidateClick = () => {
    const driveId = local.getItem('showCandidatesId');
    dispatch({
      type: 'INVITE_CANDIDATES',
      payload: { currentScreen: 'INVITE_CANDIDATES', id: driveId },
    });
  };
  return (
    <ShowCandidateListComponent
      renderTableData={renderTableData}
      handleAddCandidateClick={handleAddCandidateClick}
    />
  );
};

export default ShowCandidateListContainer;
