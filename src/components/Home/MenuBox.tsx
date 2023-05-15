import styled from 'styled-components';

const MenuBox = () => {
  return <St.MenuBoxWrapper>MenuBox 컴포넌트입니다!</St.MenuBoxWrapper>;
};

export default MenuBox;

const St = {
  MenuBoxWrapper: styled.article`
    width: 39.2rem;

    background-color: ${({ theme }) => theme.colors.White};
    color: ${({ theme }) => theme.colors.Grey500};
    ${({ theme }) => theme.fonts.Title3};
  `,
};
