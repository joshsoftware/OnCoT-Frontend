import ShowCandidateListComponent from 'modules/admin/showCandidateList/ShowCandidateListComponent';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCandidates from 'modules/admin/showCandidateList/ShowCandidateListContainer/api';
import local from 'utils/local';

const ShowCandidateListContainer = () => {
  const dispatch = useDispatch();
  const Id = local.getItem('showCandidatesId');
  const [allCandidates, setAllCandidates] = useState([]);

  const [queryIsLoading, setQueryIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
    setQueryIsLoading(true);
  };

  useEffect(async () => {
    const data = await getCandidates(Id);
    setAllCandidates(data.candidates);
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
      const { id, first_name, last_name, email, mobile_number } = val;
      if (first_name.toLowerCase().indexOf(query) > -1) {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
            <td>{mobile_number}</td>
          </tr>
        );
      }
      return false;
    });
  };
  const handleAddCandidateClick = () => {
    const driveId = local.getItem('showCandidatesId');
    dispatch({
      type: 'INVITE_CANDIDATES',
      payload: { currentScreen: 'INVITE_CANDIDATES', id: driveId },
    });
  };

  useEffect(() => {
    if (queryIsLoading) {
      setQueryIsLoading(false);
    }
  }, [queryIsLoading]);

  return (
    <ShowCandidateListComponent
      renderTableData={renderTableData}
      handleAddCandidateClick={handleAddCandidateClick}
      handleQueryChange={handleQueryChange}
      query={query}
    />
  );
};

export default ShowCandidateListContainer;
