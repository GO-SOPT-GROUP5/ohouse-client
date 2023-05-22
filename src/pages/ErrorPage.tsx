import { styled } from 'styled-components';

import { IcLogo } from '../assets/icon';
import Error404 from '../components/common/Error404';

const ErrorPage = () => {
  return (
    <St.ErrorWrapper>
      <St.ErrorHeader>
        <IcLogo />
      </St.ErrorHeader>
      <Error404 />
    </St.ErrorWrapper>
  );
};

export default ErrorPage;

const St = {
  ErrorWrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.colors.Grey100};
  `,
  ErrorHeader: styled.header`
    display: flex;
    justify-content: center;

    width: 100%;
    height: 8.65rem;
    padding: 2.3rem 0 2rem 0;
    margin-bottom: 4.3rem;

    background-color: ${({ theme }) => theme.colors.White};
  `,
};
