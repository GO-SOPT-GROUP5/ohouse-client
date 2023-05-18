import styled from 'styled-components';

const Category = () => {
  return <St.CategoryList>카테고리 컴포넌트입니다!</St.CategoryList>;
};

export default Category;

const St = {
  CategoryList: styled.ul`
    width: 34.8rem;
    height: 81.2rem;

    background-color: ${({ theme }) => theme.colors.White};
    color: ${({ theme }) => theme.colors.Grey600};
    ${({ theme }) => theme.fonts.Title5};
  `,
};
