import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import ReviewerHomeComponent from 'components/ReviewerHomeComponent';

function ReviewerRoutes() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={ReviewerHomeComponent} />

      <Redirect to={path} />
    </Switch>
  );
}

export default ReviewerRoutes;
