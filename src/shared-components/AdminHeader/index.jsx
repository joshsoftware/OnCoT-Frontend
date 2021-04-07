import React, { useEffect } from 'react';

import AdminHeader from 'shared-components/AdminHeader/AdminHeader';

const HeaderIDEConatiner = () => {
  const organisationName = 'Josh Software';
  const adminName = 'HR Admin';

  return (
    <>
      <AdminHeader organisationName={organisationName} adminName={adminName} />
    </>
  );
};

export default React.memo(HeaderIDEConatiner);
