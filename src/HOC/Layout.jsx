import Header from "shared-components/Header";

function Layout(props) {
  const { WrappedComponent, includeHeader } = props;

  return (
    <div>
      {includeHeader && <Header />}
      <div>
        <WrappedComponent {...props} />
      </div>
    </div>
  );
}

export default Layout;
