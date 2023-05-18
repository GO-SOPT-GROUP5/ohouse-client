import { useState } from 'react';
import styled from 'styled-components';

import { IcCheckboxAfter, IcCheckboxBefore, IcToggle, IcToggleExpanded } from '../../assets/icon';
import { CATEGORY_LIST } from '../../constants/category';

const CategoryItem = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);

  const toggleExpand = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter(c => c !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  const toggleSubcategory = (subcategory: string) => {
    if (selectedSubcategories.includes(subcategory)) {
      setSelectedSubcategories(selectedSubcategories.filter(s => s !== subcategory));
    } else {
      setSelectedSubcategories([...selectedSubcategories, subcategory]);
    }
  };

  return (
    <CategoryItemWrapper>
      {CATEGORY_LIST.map(category => (
        <Category key={category.category}>
          <CategoryName onClick={() => toggleExpand(category.category)}>
            {category.category}{' '}
            {expandedCategories.includes(category.category) ? <IcToggleExpanded /> : <IcToggle />}
          </CategoryName>
          {expandedCategories.includes(category.category) &&
            category.subcategories.map(subcategory => (
              <Subcategory key={subcategory} onClick={() => toggleSubcategory(subcategory)}>
                {selectedSubcategories.includes(subcategory) ? (
                  <IcCheckboxAfter />
                ) : (
                  <IcCheckboxBefore />
                )}
                {subcategory}
              </Subcategory>
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

  height: 5.8rem;

  ${({ theme }) => theme.fonts.Title5};
`;

const Category = styled.div`
  padding: 0rem 3.8rem 0rem 2.8rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
`;

const Subcategory = styled.p`
  display: flex;
  align-items: center;

  width: 34.8rem;
  height: 4.8rem;
  margin-left: -2.8rem;
  padding: 1.1rem 0rem;

  background-color: ${({ theme }) => theme.colors.Grey100};
  ${({ theme }) => theme.fonts.Body6};

  cursor: pointer;

  & > svg {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

export default CategoryItem;
