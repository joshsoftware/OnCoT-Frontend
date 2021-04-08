import ShowCandidateListComponent from 'modules/admin/showCandidateList/ShowCandidateListComponent';
import { useEffect, useState } from 'react';
import { get } from 'redux/admin/apiHelper';
import local from 'utils/local';
import { useSelector } from 'react-redux';
import { SERVER_URL } from 'constants/appConstants';
import { useHistory } from 'react-router-dom';
import { Alert } from 'core-components';
import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';

const ShowCandidateListContainer = () => {
  const { id } = useSelector((state) => state.adminHomeComponentReducer);
  const history = useHistory();
  const [allCandidates, setAllCandidates] = useState([]);
  const [candidtesLodaning, SetCandidtesLodaning] = useState(true);
  useEffect(async () => {
    await get(`https://oncot-platform.herokuapp.com/api/v1/admin/drives/${id}/candidate_list`)
      .then((response) => {
        SetCandidtesLodaning(false);
        setAllCandidates(response.data.candidates);
      })
      .catch((error) => {
        return <Alert className='danger'> {error} </Alert>;
      });
  }, []);
  const renderTableData = () => {
    return allCandidates.map((val, index) => {
      const {
        candidateId,
        firstName,
        lastName,
        email,
        phoneNumber,
      } = val;
      return (
        <tr key={candidateId}>
          <td>{candidateId}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
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
      candidtesLodaning={candidtesLodaning}
      handleAddCandidateClick={handleAddCandidateClick}
    />
  );
};

export default ShowCandidateListContainer;
