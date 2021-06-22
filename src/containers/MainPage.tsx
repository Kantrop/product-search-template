import React from 'react';
import { HeaderComponent, InputComponent, ResultsComponent } from '../components';
import './MainPage.css';

export const MainPage = () => {
  return (
    <>
      <HeaderComponent />
      <InputComponent />
      <ResultsComponent />
    </>
  );
};

export default MainPage;
