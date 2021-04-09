import { get } from 'redux/admin/apiHelper';

import { Alert } from 'core-components';

const getCandidates = async (id) => {
  const candidates = await get(`https://oncot-platform.herokuapp.com/api/v1/admin/drives/${id}/candidate_list`)
    .then((response) => {
      return response.data.data.candidates;
    })
    .catch((error) => {
      return <Alert className='danger'> {error} </Alert>;
    });

  const customData = {
    candidates : [
      {
        candidateId: 1,
        FirstName: 'virat',
        LastName: 'kohli',
        email: 'virat@gmail.com',
        phoneNumber: '876656767',
      },
      {
        candidateId: 2,
        FirstName: 'joe',
        LastName: 'root',
        email: 'joe@gmail.com',
        phoneNumber: '876656767',
      },
      {
        candidateId: 3,
        FirstName: 'kane',
        LastName: 'williamson',
        email: 'kane@gmail.com',
        phoneNumber: '8765746',
      },
    ],
    candidtesLodaning: false,
  };
  return customData;
};

export default getCandidates;
