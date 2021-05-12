import React, { useCallback } from 'react';
import { ActionCableProvider } from 'react-actioncable-provider';

import IdeComponent from 'components/IdeComponent';

const IdeContainer = () => {
  return (
    <ActionCableProvider url={process.env.REACT_APP_CABLE_URL}>
      <IdeComponent />
    </ActionCableProvider>
  );
};

export default IdeContainer;
