'use client';
import { PropsWithChildren } from 'react';
import { MainContainer, MainLayoutContainer } from '@/shared/styled-components/layout';
import Header from '../header/Header';
import SideBar from '../sidebar/SideBar';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <MainLayoutContainer>
      <SideBar />
      <MainContainer>
        <Header />
        {children}
      </MainContainer>
    </MainLayoutContainer>
  );
};

export default MainLayout;
