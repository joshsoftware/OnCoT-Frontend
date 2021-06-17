import { useCallback, useEffect, useState } from 'react';

import ProblemsListComponent from 'modules/admin/problemsList/ProblemsListComponent';
import 'modules/admin/problemsList/ProblemsListComponent/style.css';
import getProblems from 'modules/admin/problemsList/ProblemsListContainer/getProblems';
import { useDispatch } from 'react-redux';
import { Button } from 'core-components';
import { useHistory } from 'react-router-dom';
import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';

const ProblemsListContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [allProblems, setAllProblems] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [problemIsLoading, setProblemIsLoading] = useState(true);

  useEffect(async () => {
    const data = await getProblems(currentPageNumber);
    const { problems, problemLoading } = data.problems;
    if (!problemLoading) {
      setAllProblems(problems);
      setProblemIsLoading(problemLoading);
      setPageCount(data.problems.pages);
    }
  }, [problemIsLoading, currentPageNumber]);

  const onClickResult = (e) => {
    const rowId = e.target.parentNode.parentNode.id;
    localStorage.setItem('problemDetailId', rowId);
    history.push(`/admin/problem/${rowId}/details`);
  };

  const onClickEdit = (e) => {
    const rowId = e.target.parentNode.parentNode.id;
    const data = document.getElementById(rowId).querySelectorAll('.problemDetail');
    localStorage.setItem('editProblemId', data[0].innerHTML);
    history.push(`/admin/problem/${data[0].innerHTML}/edit`);
  };

  const renderTableData = useCallback(() => {
    return allProblems.map((val, index) => {
      const { id, title, description } = val;
      return (
        <tr key={id} id={id}>
          <td className='problemDetail'>{id}</td>
          <td className='title'>{title}</td>
          <td className='description'>{description}</td>
          <td>
            <Button onClick={onClickEdit}>Edit</Button>
          </td>
          <td>
            <Button onClick={onClickResult}>Details</Button>
          </td>
        </tr>
      );
    });
  });

  const handlePageClick = (data) => {
    setCurrentPageNumber(data.selected + 1);
  };
  const handleAddProblemClick = () => {
    history.push(ROUTES.ADMIN + ADMIN_ROUTES.CREATE_PROBLEM);
  };

  return (
    <ProblemsListComponent
      renderTableData={renderTableData}
      problemIsLoading={problemIsLoading}
      handleAddProblemClick={handleAddProblemClick}
      pageCount={pageCount}
      handlePageClick={handlePageClick}
    />
  );
};

export default ProblemsListContainer;
