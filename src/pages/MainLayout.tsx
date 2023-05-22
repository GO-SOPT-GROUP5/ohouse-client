import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const MainLayout = () => {
  return (
    <St.MainLayoutWrapper>
      <Header />
      <St.MainWrapper>
        <Outlet />
      </St.MainWrapper>
      <Footer />
    </St.MainLayoutWrapper>
  );
};

export default MainLayout;

const St = {
  MainLayoutWrapper: styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `,
  //fixe된 header 높이 만큼 컨텐츠 영역의 위쪽 padding 값 주기
  MainWrapper: styled.main`
    padding-top: 14rem;
  `,
};
