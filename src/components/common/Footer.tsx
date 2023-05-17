import styled from 'styled-components';

const Footer = () => {
  return (
    <St.FooterWapper>
      <St.FooterLeft>
        <St.CsTitle>
          <h2>고객센터</h2>
          <span> &gt;</span>
        </St.CsTitle>
        <St.CsContact>
          <span>1670-0876</span>
          <time dateTime="9:00">9:00</time>~<time dateTime="18:00">18:00</time>
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
      <St.FooterRight>주)버킷플레이스 어쩌구 ~ 저쩌구 ~</St.FooterRight>
    </St.FooterWapper>
  );
};

export default Footer;

const St = {
  FooterWapper: styled.footer`
    display: flex;

    position: fixed;
    bottom: 0;

    width: 192rem;
    height: 32.2rem;
    padding: 3.9rem 36.6rem 4.3rem 35.2rem;

    background-color: ${({ theme }) => theme.colors.Grey100};
    & > * {
      font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
        'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
      font-style: noraml;
    }
  `,
  FooterLeft: styled.article`
    display: flex;
    flex-direction: column;

    color: ${({ theme }) => theme.colors.Grey600};
  `,
  CsTitle: styled.div`
    display: flex;

    font-weight: 700;

    & > h2 {
      font-size: 2rem;
      line-height: 2.4rem;
      padding-right: 0.6rem;
    }

    & > span {
      font-size: 2rem;
    }
  `,
  CsContact: styled.div`
    padding: 1.9rem 0 1rem 0;
    & > span {
      font-weight: 700;
      font-size: 1.7rem;
      line-height: 2rem;
      padding-right: 0.7rem;
    }
    & > time {
      font-weight: 300;
      font-size: 1.5rem;
      line-height: 1.8rem;
    }
  `,
  CsContent: styled.div`
    width: 20rem;

    font-weight: 400;
    font-size: 1.3rem;
    line-height: 2.1rem;
  `,
  CsKakao: styled.button`
    width: 21.2rem;
    height: 3.4rem;
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
    height: 3.4rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
    border-radius: 0.4rem;

    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;

    background: transparent;
  `,
  FooterCenter: styled.article`
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(2, 1fr);

    gap: 2.2rem;

    color: ${({ theme }) => theme.colors.Grey600};

    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.6rem;
  `,
  FooterRight: styled.article`
    display: flex;
    flex-direction: column;
  `,

  //공통 사용
  FooterDash: styled.div`
    width: 0;
    height: 23.4rem;
    margin: 0 3.4rem 0 3.4rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.Grey200};
  `,
};
