import styled from 'styled-components';

import { IcCsVector, IcDnsMark, IcIsmsMark, IcSocial } from '../../assets/icon';

const Footer = () => {
  return (
    <St.FooterWapper>
      <St.FooterLeft>
        <St.CsTitle>
          <h2>고객센터</h2>
          <IcCsVector />
        </St.CsTitle>
        <St.CsContact>
          <p>1670-0876</p>
          <time dateTime="9:00">9:00</time>
          <span>~</span>
          <time dateTime="18:00">18:00</time>
        </St.CsContact>
        <St.CsContent>
          <p>평일: 전체 문의 상담 가능</p>
          <p>주말, 공휴일: 오늘의집 직접배송, 이사/시공/수리 문의 상담 가능</p>
        </St.CsContent>
        <St.CsKakao type="button">카톡상담(평일 09:00 ~ 18:00)</St.CsKakao>
        <St.CsEmail type="button">이메일 문의</St.CsEmail>
      </St.FooterLeft>
      <St.FooterDash></St.FooterDash>
      <St.FooterCenter>
        <span>회사소개</span>
        <span>입점신청</span>
        <span>채용정보</span>
        <span>제휴/광고 문의</span>
        <span>이용약관</span>
        <span>사업자 구매 회원</span>
        <span>개인정보 처리방침</span>
        <span>시공파트너 안내</span>
        <span>공지사항</span>
        <span>상품광고 소개</span>
        <span>안전거래센터</span>
        <span>고객의 소리</span>
      </St.FooterCenter>
      <St.FooterDash></St.FooterDash>
      <St.FooterRight>
        <St.AboutContent>
          <div>
            <span>(주)버킷플레이스</span>
            <span>|</span>
            <span>대표이사 이승재</span>
            <span>|</span>
            <span>서울 서초구 서초대로74길 4 삼성생명서초타워 25층, 27층</span>
          </div>
          <div>
            <span>contact@bucketplace.net</span>
            <span>|</span>
            <span>
              사업자등록번호 119-86-91245 <St.BoldText>사업자정보확인</St.BoldText>
            </span>
          </div>
          <div>통신판매업신고번호 제2018-서울서초-0580호</div>
        </St.AboutContent>
        <St.CertificContent>
          <IcIsmsMark />
          <div>
            <span>오늘의집 서비스 운영</span>
            <span>2021. 09.08 ~ 2024. 09.07</span>
          </div>
          <IcDnsMark />
          <p>
            고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를
            보장하고 있습니다. <St.BoldText>서비스가입사실확인</St.BoldText>
          </p>
        </St.CertificContent>
        <St.NoticeContent>
          (주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및
          거래 등에 대해 책임을 지지 않습니다. 단, (주)버킷플레이스가 판매자로 등록판매한 상품은
          판매자로서 책임을 부담합니다.
        </St.NoticeContent>
        <IcSocial />
        <St.CopyrightContent>
          Copyright 2014. bucketplace, Co., Ltd. All right reserved.
        </St.CopyrightContent>
      </St.FooterRight>
    </St.FooterWapper>
  );
};

export default Footer;

const St = {
  FooterWapper: styled.footer`
    display: flex;
    justify-content: center;

    position: fixed;
    bottom: 0;

    width: 100%;
    height: 32.2rem;
    padding: 3.9rem 10rem 4.3rem 10rem;

    background-color: ${({ theme }) => theme.colors.Grey100};
    & * {
      font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
        'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
      font-style: noraml;
    }
  `,

  //왼쪽 영역
  //스타일 가이드 받아서 padding-right 값 추가 필요!!
  FooterLeft: styled.article`
    display: flex;
    flex-direction: column;

    & * {
      color: ${({ theme }) => theme.colors.Grey600};
    }
  `,
  CsTitle: styled.div`
    display: flex;
    align-items: center;

    & > h2 {
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.4rem;
      padding-right: 0.6rem;
    }
  `,
  CsContact: styled.div`
    display: flex;
    align-items: center;

    padding: 1.9rem 0 1rem 0;

    & > p {
      font-weight: 700;
      font-size: 1.7rem;
      line-height: 2rem;
      padding-right: 0.7rem;
    }

    & > time,
    span {
      font-weight: 300;
      font-size: 1.5rem;
      line-height: 1.8rem;
    }
  `,
  CsContent: styled.div`
    width: 25rem;

    & > p {
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 2.1rem;
    }
  `,
  CsKakao: styled.button`
    width: 21.2rem;
    padding: 0.8rem 0;
    margin: 1.3rem 0;

    border: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
    border-radius: 0.4rem;

    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;

    background: transparent;
  `,
  CsEmail: styled.button`
    width: 9rem;
    padding: 0.8rem 0rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
    border-radius: 0.4rem;

    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;

    background: transparent;
  `,

  //가운데 영역
  FooterCenter: styled.article`
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(2, 1fr);

    padding-right: 4.8rem;
    gap: 2.2rem;

    & * {
      font-weight: 500;
      font-size: 1.3rem;
      line-height: 1.6rem;

      color: ${({ theme }) => theme.colors.Grey600};
    }
  `,

  //오른쪽 영역
  FooterRight: styled.article`
    display: flex;
    flex-direction: column;

    & * {
      font-weight: 400;
      color: ${({ theme }) => theme.colors.Grey400};
    }

    //social icon
    & > svg {
      //위 마진 값 더 정확히 알아와서 수정 필요
      margin: 1rem 0;
    }
  `,
  AboutContent: styled.div`
    display: flex;
    flex-direction: column;

    & * {
      font-size: 1.3rem;
      line-height: 1.6rem;
    }
    & > div {
      padding-bottom: 0.5rem;
    }
    & span {
      padding-right: 0.3rem;
    }
  `,
  CertificContent: styled.div`
    display: flex;
    align-items: center;

    padding: 1.8rem 0;
    gap: 0.6rem;

    & * {
      font-size: 1.1rem;
      line-height: 1.4rem;
    }

    & > div {
      display: flex;
      flex-direction: column;
    }
    // 첫번째 로고 텍스트-두전째로고 사이 간격 조정 필요
    & > p {
      width: 29.3rem;
    }
  `,
  NoticeContent: styled.div`
    width: 52rem;
    font-size: 1.1rem;
    line-height: 1.4rem;
  `,
  CopyrightContent: styled.div`
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.4rem;
  `,

  //오른쪽 영역에서 굵은 글씨체에 사용
  BoldText: styled.span`
    font-weight: 600;
  `,

  //공통으로 사용하는 세로 구분선
  FooterDash: styled.div`
    width: 0;
    height: 23.4rem;
    margin: 0 3.3rem 0 3.3rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.Grey200};
  `,
};
