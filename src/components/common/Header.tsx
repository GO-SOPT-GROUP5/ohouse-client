import styled from 'styled-components';

import { IcLogo } from '../../assets/icon';

const Header = () => {
  return (
    <St.Header>
      <IcLogo />
      Header 컴포넌트입니다!
    </St.Header>
  );
};

export default Header;

const St = {
  Header: styled.header`
    color: ${({ theme }) => theme.colors.Blue};

    & > svg {
      width: 8.9rem;
      height: 4.3rem;
    }
  `,
};
