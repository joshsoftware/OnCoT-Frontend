import { useReducer, useState } from 'react';
import HomeComponent from 'modules/admin/home/HomeComponent';

import { reducer } from 'modules/admin/home/HomeContainer/reducer';

const HomeContainer = () => {
  const initialHomeState = {
    currentScreen: 'CREATE_DRIVE',
  };

  const [currentHomeComponent, setCurrentHomeComponent] = useReducer(
    reducer,
    initialHomeState,
  );

  return (
    <HomeComponent currentHomeComponent={currentHomeComponent.currentScreen} />
  );
};

export default HomeContainer;
