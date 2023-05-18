import { useState } from 'react';
import styled from 'styled-components';

import { IcToggle } from '../../assets/icon';
import { CATEGORY_LIST } from '../../constants/category';

const CategoryItem = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleExpand = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter(c => c !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  return (
    <CategoryItemWrapper>
      {CATEGORY_LIST.map(category => (
        <Category key={category.category}>
          <CategoryName onClick={() => toggleExpand(category.category)}>
            {category.category}
            <IcToggle />
          </CategoryName>
          {expandedCategories.includes(category.category) &&
            category.subcategories.map(subcategory => (
              <Subcategory key={subcategory}>{subcategory}</Subcategory>
            ))}
        </Category>
      ))}
    </CategoryItemWrapper>
  );
};

const CategoryItemWrapper = styled.div``;

const CategoryName = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.fonts.Title5};
`;

const Category = styled.div`
  padding: 1.7rem 3.8rem 1.5rem 2.8rem;
`;

const Subcategory = styled.p`
  margin-bottom: 4px;
`;

export default CategoryItem;
