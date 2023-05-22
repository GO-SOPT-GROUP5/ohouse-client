import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const MainLayout = () => {
  return (
    <St.mainLayoutWrapper>
      <Header />
      <Outlet />
      <Footer />
    </St.mainLayoutWrapper>
  );
};

export default MainLayout;

const St = {
  mainLayoutWrapper: styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `,
};
