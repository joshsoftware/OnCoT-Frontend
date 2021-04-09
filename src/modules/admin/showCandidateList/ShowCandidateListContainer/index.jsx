import ShowCandidateListComponent from 'modules/admin/showCandidateList/ShowCandidateListComponent';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';

import { adminHomeComponentReducer } from 'modules/admin/home/HomeContainer/adminHomeComponentReducer';
import getCandidates from 'modules/admin/showCandidateList/ShowCandidateListContainer/api';

const ShowCandidateListContainer = () => {
  const history = useHistory();
  const { id } = useSelector((state) => state.adminHomeComponentReducer);
  console.log(id);
  const [allCandidates, setAllCandidates] = useState([]);
  const [candidatesLodaning, setCandidatesLodaning] = useState(true);
  useEffect(async () => {
    const data = await getCandidates(id);
    const { candidates, candidateLodaning } = data;
    if (!candidateLodaning) {
      setAllCandidates(candidates);
      setCandidatesLodaning(candidateLodaning);
    }
  }, []);
  const renderTableData = () => {
    return allCandidates.map((val, index) => {
      const {
        candidateId,
        FirstName,
        LastName,
        email,
        phoneNumber,
      } = val;
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
    history.push(ROUTES.ADMIN + ADMIN_ROUTES.HOME);
  };
  return (
    <ShowCandidateListComponent
      renderTableData={renderTableData}
      candidatesLodaning={candidatesLodaning}
      handleAddCandidateClick={handleAddCandidateClick}
    />
  );
};

export default ShowCandidateListContainer;
