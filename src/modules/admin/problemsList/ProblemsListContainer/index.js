import { useCallback, useEffect, useState } from 'react';

import ProblemsListComponent from 'modules/admin/problemsList/ProblemsListComponent';

import getProblems from 'modules/admin/createDrive/CreateDriveCotainer/getProblems';
import { useDispatch } from 'react-redux';
import { Button } from 'core-components';

const ProblemsListContainer = () => {
  const dispatch = useDispatch();

  const [allProblems, setAllProblems] = useState([]);
  const [problemIsLoading, setProblemIsLoading] = useState(true);

  useEffect(async () => {
    const data = await getProblems();
    const { problems, problemLoading } = data;
    if (!problemLoading) {
      setAllProblems(problems);
      setProblemIsLoading(problemLoading);
    }
  }, [problemIsLoading]);

  const onClickResult = (e) => {
    const rowId = e.target.parentNode.parentNode.id;
    dispatch({
      type: 'PROBLEM_DETAILS',
      payload: { currentScreen: 'PROBLEM_DETAILS', id: rowId },
    });
  };

  const renderTableData = useCallback(() => {
    return allProblems.map((val, index) => {
      const { id, title, description } = val;
      return (
        <tr key={id} id={id}>
          <td className='problemDetail'>{id}</td>
          <td>{title}</td>
          <td>{description}</td>
          <td>
            <Button onClick={onClickResult}>Details</Button>
          </td>
        </tr>
      );
    });
  });

  const handleAddProblemClick = () => {
    dispatch({
      type: 'CREATE_PROBLEM',
      payload: 'CREATE_PROBLEM',
    });
  };

  return (
    <ProblemsListComponent
      renderTableData={renderTableData}
      problemIsLoading={problemIsLoading}
      handleAddProblemClick={handleAddProblemClick}
    />
  );
};

export default ProblemsListContainer;
