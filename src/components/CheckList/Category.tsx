import styled from 'styled-components';

const Category = () => {
  return <St.Li>카테고리 컴포넌트입니다!</St.Li>;
};

export default Category;

const St = {
  Li: styled.li`
    color: ${({ theme }) => theme.colors.Grey600};
    ${({ theme }) => theme.fonts.Title5};
  `,
};
