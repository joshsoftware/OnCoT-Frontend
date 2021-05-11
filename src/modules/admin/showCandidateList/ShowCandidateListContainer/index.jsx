import ShowCandidateListComponent from 'modules/admin/showCandidateList/ShowCandidateListComponent';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCandidates from 'modules/admin/showCandidateList/ShowCandidateListContainer/api';
import local from 'utils/local';

const ShowCandidateListContainer = () => {
  const dispatch = useDispatch();
  const Id = local.getItem('showCandidatesId');
  const [allCandidates, setAllCandidates] = useState([]);
  const [candidateIsLoading, setCandidateIsLoading] = useState(true);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  useEffect(async () => {
    const params = { currentPageNumber, Id };
    const data = await getCandidates(params);
    setAllCandidates([]);
    if (!data.candidateLoading) {
      setAllCandidates(data.candidates.candidates);
      setPageCount(data.candidates.pages);
      setCandidateIsLoading(data.candidateLoading);
    }
  }, [candidateIsLoading, currentPageNumber]);

  const renderTableData = () => {
    if (allCandidates.length === 0) {
      return (
        <tr>
          <td>Invite candidate(s) to view data!</td>
        </tr>
      );
    }
    return allCandidates.map((val) => {
      const { id, first_name, last_name, email, mobile_number } = val;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>{email}</td>
          <td>{mobile_number}</td>
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
  const handlePageClick = (data) => {
    setCurrentPageNumber(data.selected + 1);
  };
  return (
    <ShowCandidateListComponent
      renderTableData={renderTableData}
      handleAddCandidateClick={handleAddCandidateClick}
      handlePageClick={handlePageClick}
      pageCount={pageCount}
      candidateIsLoading={candidateIsLoading}
    />
  );
};

export default ShowCandidateListContainer;
