import React from 'react';
import { HeaderComponent, InputComponent, ResultsComponent, FooterComponent } from '../components';
import './MainPage.css';

export const MainPage = () => {
  return (
    <>
      <HeaderComponent />
      <InputComponent />
      <ResultsComponent />
      <FooterComponent />
    </>
  );
};

export default MainPage;
