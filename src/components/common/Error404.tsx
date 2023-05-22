import styled from 'styled-components';

import { IcBtnErrorReport } from '../../assets/icon';

const Error404 = () => {
  return (
    <St.ErrorContainer>
      <St.ErrorTitle>404</St.ErrorTitle>
      <St.ErrorSubtitle>요청하신 페이지를 찾을 수 없습니다!</St.ErrorSubtitle>
      <St.ErrorContent>
        방문하시려는 페이지의 주소가 잘못 입력되었거나, 삭제되어 사용하실 수 없습니다. 입력하신
        주소가 정확한지 다시 한번 확인해 주세요.
      </St.ErrorContent>
      <St.ErrorReportBtn>
        <IcBtnErrorReport />
      </St.ErrorReportBtn>
    </St.ErrorContainer>
  );
};

export default Error404;

const St = {
  //넓이 값 -> 1440 초과 됐길래 일단 임의로 옆 마진 값 빼서 -> 물어보고 수정 필요
  ErrorContainer: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 105.6rem;
    height: 41.4rem;
    padding: 4rem;

    background-color: ${({ theme }) => theme.colors.White};
  `,
  //여기 스타일 가이드 없음
  ErrorTitle: styled.h1`
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.Blue};
    font-family: 'Pretendard Variable', system-ui, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 10rem;
    line-height: 11.9rem;
  `,
  ErrorSubtitle: styled.h2`
    margin-bottom: 3rem;

    ${({ theme }) => theme.fonts.Title1};
  `,
  ErrorContent: styled.p`
    width: 57.4rem;
    margin-bottom: 3.4rem;

    ${({ theme }) => theme.fonts.Body2};
    text-align: center;
  `,
  ErrorReportBtn: styled.i`
    cursor: pointer;

    & > svg {
      margin-bottom: 0.3rem;
    }
  `,
};
