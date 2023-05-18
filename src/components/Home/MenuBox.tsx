import styled from 'styled-components';

import { IcHuman } from '../../assets/icon';

const MenuBox = () => {
  return (
    <St.MenuBoxWrapper>
      <St.MenuBoxHeader>
        <St.MenuBoxTitle>인테리어시공</St.MenuBoxTitle>
        <St.MenuBoxContent>
          종합리모델링, <br />
          부분시공,카페공간 등 <br />
          분야별 업체찾기
        </St.MenuBoxContent>
      </St.MenuBoxHeader>
      <St.MenuBoxBottom>
        <St.MenuBoxIcon>
          <IcHuman />
        </St.MenuBoxIcon>
      </St.MenuBoxBottom>
    </St.MenuBoxWrapper>
  );
};

export default MenuBox;

const St = {
  MenuBoxWrapper: styled.article`
    position: relative;

    width: 39.2rem;
    height: 18rem;
    padding: 1.8rem;

    background-color: ${({ theme }) => theme.colors.White};

    box-shadow: 0 0.25rem 0.94rem rgba(0, 0, 0, 0.1);
    border-radius: 1.2rem;
  `,
  MenuBoxHeader: styled.header`
    display: flex;
    flex-direction: column;
  `,
  MenuBoxTitle: styled.h3`
    padding: 0.1rem 0 0.6rem 0;

    ${({ theme }) => theme.fonts.Title3};
    color: ${({ theme }) => theme.colors.Grey500};
  `,
  MenuBoxContent: styled.p`
    min-width: 10.8rem;
    max-width: 18.8rem;

    ${({ theme }) => theme.fonts.Body6};
    color: ${({ theme }) => theme.colors.Grey400};

    white-space: pre-line;
    word-break: keep-all;
  `,
  MenuBoxBottom: styled.div`
    padding-top: 0.3rem;
  `,
  MenuBoxIcon: styled.div`
    & > svg {
      position: absolute;
      right: 0;
      bottom: 0;

      width: 4.2rem;
      height: 4.2rem;
      margin: 0 1.8rem 1.8rem 0;
    }
  `,
};
