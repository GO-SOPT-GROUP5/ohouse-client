import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';

import {
  IcAlarm,
  IcBookMark,
  IcBtnWrite,
  IcCart,
  IcLogo,
  IcProfile,
  IcSearch,
} from '../../assets/icon';
import { HEADER_LNB_LIST } from '../../constants/headerLnbList';

const Header = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(location.pathname);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = (e.target as HTMLElement).id;
    //홈 & 등록매물확인하기일 때만 이동!
    if (target !== '') {
      setActiveNav(target);
      navigate(target);
    }
  };

  return (
    <St.HeaderWrapper>
      <St.GnbWrapper>
        <St.LogoContainer>
          <IcLogo />
        </St.LogoContainer>
        <St.GnbLeft>
          <span>커뮤니티</span>
          <span>쇼핑</span>
          <span>이사/시공/수리</span>
        </St.GnbLeft>
        <St.GnbSearch>
          <input type="text" placeholder="시공업체 검색" />
          <IcSearch />
        </St.GnbSearch>
        <St.GnbRight>
          <St.GnbIcons>
            <IcBookMark />
            <IcAlarm />
            <IcCart />
          </St.GnbIcons>
          <St.GnbProfile>
            <IcProfile />
          </St.GnbProfile>
          <St.GnbWriteBtn>
            <IcBtnWrite />
          </St.GnbWriteBtn>
        </St.GnbRight>
      </St.GnbWrapper>
      <St.LnbWapper>
        <St.LnbContainer onClick={handleClick}>
          {HEADER_LNB_LIST.map(({ pathName, title }) => (
            <St.LnbList key={title} className={activeNav === pathName ? 'isClicked' : ''}>
              <span id={pathName}>{title}</span>
            </St.LnbList>
          ))}
        </St.LnbContainer>
      </St.LnbWapper>
    </St.HeaderWrapper>
  );
};

export default Header;

const St = {
  HeaderWrapper: styled.header`
    position: fixed;
    top: 0;

    width: 100%;

    z-index: 100;
  `,
  //gnb 부분
  GnbWrapper: styled.section`
    display: flex;
    align-items: center;

    height: 8.6rem;
    padding: 2.3rem 10rem 2rem 10rem;

    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.Grey200};
    background-color: ${({ theme }) => theme.colors.White};
  `,
  LogoContainer: styled.div`
    margin-right: 5rem;

    & > svg {
      width: 8.9rem;
      height: 4.3rem;
    }
  `,
  GnbLeft: styled.div`
    display: flex;

    margin-right: 10rem;
    gap: 3rem;

    & > span {
      ${({ theme }) => theme.fonts.Title4};
    }
    & > span:last-child {
      color: ${({ theme }) => theme.colors.Blue};
    }
    & > span:hover {
      color: ${({ theme }) => theme.colors.Blue};

      cursor: pointer;
    }
  `,
  GnbSearch: styled.div`
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
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      color: ${({ theme }) => theme.colors.Grey300};

      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 400;
      font-size: 1.8rem;
    }

    & > svg {
      position: absolute;
      top: 50%;
      left: 1.9rem;
      transform: translateY(-50%);

      width: 1.8rem;
      height: 1.8rem;
    }
  `,
  GnbRight: styled.div`
    display: flex;
    align-items: center;
  `,

  GnbIcons: styled.div`
    display: flex;

    margin-right: 2rem;
    gap: 1rem;

    & > svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  `,
  GnbProfile: styled.div`
    margin-right: 1.8rem;

    & > svg {
      width: 4.9rem;
      height: 4.9rem;
    }
  `,
  GnbWriteBtn: styled.div`
    & > svg {
      width: 10.1rem;
      height: 4.1rem;
    }
  `,
  //Lnb 부분
  LnbWapper: styled.nav`
    display: flex;
    align-items: center;

    width: 100%;
    height: 5.4rem;
    padding: 1.6rem 10rem;

    background-color: ${({ theme }) => theme.colors.White};
  `,
  LnbContainer: styled.ul`
    display: flex;
    gap: 2.2rem;
  `,
  LnbList: styled.li`
    list-style: none;
    position: relative;

    height: 5.4rem;
    padding-top: 1.8rem;

    & > * {
      ${({ theme }) => theme.fonts.Title5};
    }

    & > span:hover {
      color: ${({ theme }) => theme.colors.Blue};

      cursor: pointer;
    }

    &.isClicked {
      color: ${({ theme }) => theme.colors.Blue};
    }
    &.isClicked::after {
      display: block;

      position: absolute;
      left: 0;
      bottom: 0;

      height: 0.2rem;
      width: 100%;

      background-color: ${({ theme }) => theme.colors.Blue};

      content: '';
    }
  `,
};
