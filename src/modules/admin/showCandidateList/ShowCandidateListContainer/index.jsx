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
  const [allCandidates, setAllCandidates] = useState([]);
  const [candidatesLoading, setCandidatesLoading] = useState(true);
  useEffect(async () => {
    const data = await getCandidates(id);
    const { candidates, candidateLoading } = data;
    console.log('candidates ', candidates);
    if (!candidateLoading) {
      setAllCandidates(candidates);
      setCandidatesLoading(candidateLoading);
    }
  }, []);
  const renderTableData = () => {
    return allCandidates.map((val, index) => {
      const {
        Id,
        first_name,
        last_name,
        email,
        mobile_number,
      } = val;
      return (
        <tr key={Id}>
          <td>{Id}</td>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>{email}</td>
          <td>{mobile_number}</td>
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
      candidatesLoading={candidatesLoading}
      handleAddCandidateClick={handleAddCandidateClick}
    />
  );
};

export default ShowCandidateListContainer;
