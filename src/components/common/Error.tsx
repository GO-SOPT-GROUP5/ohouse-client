import styled from 'styled-components';

const Error = () => {
  return <St.Error>에러 컴포넌트입니다!</St.Error>;
};

export default Error;

const St = {
  Error: styled.div`
    color: ${({ theme }) => theme.colors.Blue};
  `,
};
