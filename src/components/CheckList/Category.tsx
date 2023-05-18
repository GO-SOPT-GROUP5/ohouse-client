import styled from 'styled-components';

import { CATEGORY_LIST } from '../../constants/category';
import CategoryItem from './CategoryItem';

const Category = () => {
  return (
    <St.CategoryList>
      {/* <CategoryItem />
      <CategoryItem /> */}
    </St.CategoryList>
  );
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
