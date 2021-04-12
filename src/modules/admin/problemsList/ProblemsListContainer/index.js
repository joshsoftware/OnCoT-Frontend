import { useCallback, useEffect, useState } from 'react';

import ProblemsListComponent from 'modules/admin/problemsList/ProblemsListComponent';

import getProblems from 'modules/admin/createDrive/CreateDriveCotainer/getProblems';
import { useDispatch } from 'react-redux';

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

  const renderTableData = useCallback(() => {
    return allProblems.map((val, index) => {
      const { id, title, description } = val;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{title}</td>
          <td>{description}</td>
          <td>Null</td>
          <td>Null</td>
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
