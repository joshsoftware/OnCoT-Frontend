import Layout from "HOC/Layout";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute(props) {
  const { isAuth, component: Component, includeHeader, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return (
            <Layout
              includeHeader={includeHeader}
              WrappedComponent={Component}
            />
          );
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
