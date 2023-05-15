import styled from 'styled-components';

const Header = () => {
  return <St.Header>Header 컴포넌트입니다!</St.Header>;
};

export default Header;

const St = {
  Header: styled.header`
    color: blue;
  `,
};
