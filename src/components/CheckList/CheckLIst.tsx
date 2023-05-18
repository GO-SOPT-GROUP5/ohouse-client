import styled from 'styled-components';

const CheckLIst = () => {
  return <St.CheckList>체크리스트</St.CheckList>;
};

export default CheckLIst;

const St = {
  CheckList: styled.section`
    width: 63.2rem;
    height: 81.2rem;

    background-color: ${({ theme }) => theme.colors.White};
    /* color: ${({ theme }) => theme.colors.Grey600};
    ${({ theme }) => theme.fonts.Title5}; */
  `,
};
