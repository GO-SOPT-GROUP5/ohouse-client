import styled from 'styled-components';

import {
  BtnWrite,
  IcAlarm,
  IcBookMark,
  IcCart,
  IcLogo,
  IcProfile,
  IcSearch,
} from '../../assets/icon';

const Header = () => {
  return (
    <St.HeaderWrapper>
      <St.LogoContainer>
        <IcLogo />
      </St.LogoContainer>
      <St.HeaderLeft>
        <span>커뮤니티</span>
        <span>쇼핑</span>
        <span>이사/시공/수리</span>
      </St.HeaderLeft>
      <St.HeaderSearch>
        <input type="text" placeholder="시공업체 검색" />
        <IcSearch />
      </St.HeaderSearch>
      <St.HeaderRgiht>
        <St.HeaderIcons>
          <IcBookMark />
          <IcAlarm />
          <IcCart />
        </St.HeaderIcons>
        <St.HeaderProfile>
          <IcProfile />
        </St.HeaderProfile>
        <St.HeaderWriteBtn>
          <BtnWrite />
        </St.HeaderWriteBtn>
      </St.HeaderRgiht>
    </St.HeaderWrapper>
  );
};

export default Header;

const St = {
  HeaderWrapper: styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8.6rem;
    padding: 2.3rem 0 2rem 0;
    background-color: ${({ theme }) => theme.colors.White};
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.Grey200};
  `,

  LogoContainer: styled.div`
    margin-right: 5rem;

    & > svg {
      width: 8.9rem;
      height: 4.3rem;
    }
  `,

  HeaderLeft: styled.div`
    display: flex;
    margin-right: 10rem;
    gap: 3rem;
    ${({ theme }) => theme.fonts.Title4};

    & > span:last-child {
      color: ${({ theme }) => theme.colors.Blue};
    }
  `,

  HeaderSearch: styled.div`
    position: relative;
    margin-right: 2.6rem;

    & > input {
      width: 38rem;
      height: 4.2rem;
      padding-left: 5rem;
      border: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
      border-radius: 0.4rem;
    }
    & > input::placeholder {
      color: ${({ theme }) => theme.colors.Grey300};
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2.1rem;
    }

    & > svg {
      position: absolute;
      width: 1.8rem;
      height: 1.8rem;
      top: 50%;
      left: 1.9rem;
      transform: translateY(-50%);
    }
  `,

  HeaderRgiht: styled.div`
    display: flex;
    align-items: center;
  `,

  HeaderIcons: styled.div`
    display: flex;
    margin-right: 2rem;
    gap: 1.7rem;
    & > svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  `,
  HeaderProfile: styled.div`
    margin-right: 1.8rem;
    & > svg {
      width: 4.9rem;
      height: 4.9rem;
    }
  `,
  HeaderWriteBtn: styled.div`
    & > svg {
      width: 10.1rem;
      height: 4.1rem;
    }
  `,
};
