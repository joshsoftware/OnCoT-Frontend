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
  const driveDetails = useSelector((state) => state.createDriveReducer);
  console.log(driveDetails);
  const history = useHistory();
  const [allCandidates, setAllCandidates] = useState([]);
  const [candidtesLodaning, SetCandidtesLodaning] = useState(true);
  useEffect(async () => {
    const id = Number(driveDetails.data.drive.id);
    await get('https://oncot-platform.herokuapp.com/api/v1/admin/drives/:id/candidate_list')
      .then((response) => {
        SetCandidtesLodaning(false);
        console.log(allCandidates);
        console.log('from candidate list');
        setAllCandidates(response.data.candidates);
      })
      .catch((error) => {
        console.log('in error block');
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
    history.push(ROUTES.ADMIN + ADMIN_ROUTES.CREATE_PROBLEM+id);
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
