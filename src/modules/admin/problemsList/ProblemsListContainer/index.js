import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import ProblemsListComponent from 'modules/admin/problemsList/ProblemsListComponent';

import getProblems from 'modules/admin/createDrive/CreateDriveCotainer/getProblems';

import { ADMIN_ROUTES, ROUTES } from 'constants/routeConstants';

const ProblemsListContainer = () => {
  const history = useHistory();

  const [allProblems, setAllProblems] = useState([]);
  const [problemIsLoading, setProblemIsLoading] = useState(true);

  useEffect(async () => {
    const data = await getProblems();
    const { problems, problemLoading } = data;

    if (!problemLoading) {
      setAllProblems(problems);
      setProblemIsLoading(problemLoading);
    } else {
      setAllProblems([]);
    }
  }, [problemIsLoading]);

  const renderTableData = useCallback(() => {
    if (allProblems.length === 0) {
      return;
    }
    if (allProblems.length > 0) {
      return (
        allProblems.map((val, index) => {
          const {
            id,
            title,
            description,
          } = val;
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{description}</td>
              <td>Null</td>
              <td>Null</td>
            </tr>
          );
        })
      );
    }
  }, [problemIsLoading]);

  const handleAddProblemClick = () => {
    history.push(ROUTES.ADMIN + ADMIN_ROUTES.CREATE_PROBLEM);
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
