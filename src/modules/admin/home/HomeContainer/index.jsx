import { useEffect, useReducer, useState } from 'react';
import HomeComponent from 'modules/admin/home/HomeComponent';
import { useSelector } from 'react-redux';

const HomeContainer = () => {
  const reducer = useSelector((state) => state.adminHomeComponentReducer);

  return <HomeComponent currentHomeComponent={reducer.currentScreen} />;
};

export default HomeContainer;
