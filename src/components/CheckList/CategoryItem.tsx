import { useState } from 'react';
import styled from 'styled-components';

import { IcCheckboxAfter, IcCheckboxBefore, IcToggle, IcToggleExpanded } from '../../assets/icon';
import { CATEGORY_LIST, DISABLED_SUBCATEGORY_LIST } from '../../constants/category';

const CategoryItem = () => {
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);

  const isDisabled = (subcategory: string) => {
    return DISABLED_SUBCATEGORY_LIST.includes(subcategory);
  };

  const handleActive = (category: string) => {
    if (activeCategories.includes(category)) {
      setActiveCategories([]);
    } else {
      setActiveCategories([category]);
    }
  };

  const handleExpand = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter(c => c !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  const handleClickSubcategory = (e: React.MouseEvent, subcategory: string) => {
    if (isDisabled(subcategory)) {
      e.stopPropagation();
      return;
    }

    if (selectedSubcategories.includes(subcategory)) {
      setSelectedSubcategories(selectedSubcategories.filter(s => s !== subcategory));
    } else {
      setSelectedSubcategories([...selectedSubcategories, subcategory]);
    }
    e.stopPropagation();
  };

  const handleActiveAndExpand = (category: string) => {
    handleActive(category);
    handleExpand(category);
  };

  return (
    <CategoryItemWrapper>
      <SelectAllBtn type="button">
        <p>전체</p>
      </SelectAllBtn>
      {CATEGORY_LIST.map(({ category, subcategories }) => (
        <Category
          key={category}
          onClick={() => handleActiveAndExpand(category)}
          active={activeCategories.includes(category)}
          expanded={expandedCategories.includes(category)}
        >
          <CategoryName>
            {category}
            <StExpandBtn>
              {expandedCategories.includes(category) ? <IcToggleExpanded /> : <IcToggle />}
            </StExpandBtn>
          </CategoryName>
          {expandedCategories.includes(category) &&
            subcategories.map(subcategory => (
              <Subcategory
                key={subcategory}
                onClick={e => handleClickSubcategory(e, subcategory)}
                disabled={isDisabled(subcategory)}
              >
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

const StExpandBtn = styled.button``;

const SelectAllBtn = styled.button`
  width: 100%;
  height: 5.8rem;
  padding: 0;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.Grey300};

  & > p {
    margin-left: 3.8rem;
    ${({ theme }) => theme.fonts.Title5};
    float: left;
  }
`;

const CategoryName = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 5.8rem;

  ${({ theme }) => theme.fonts.Title5};
`;

const Category = styled.div<{ active: boolean; expanded: boolean }>`
  padding: 0rem 2.8rem 0rem 3.8rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
  color: ${({ active, expanded, theme }) =>
    expanded ? theme.colors.White : active ? theme.colors.White : theme.colors.Grey600};
  background-color: ${({ active, expanded, theme }) =>
    expanded ? theme.colors.Blue : active ? theme.colors.Blue : theme.colors.White};

  ${({ active, theme }) =>
    !active && `background-color: ${theme.colors.White}; color: ${theme.colors.Grey600}`}
`;

const Subcategory = styled.p<{ disabled: boolean }>`
  display: flex;
  align-items: center;

  width: 34.8rem;
  height: 4.8rem;
  margin-left: -3.8rem;
  padding: 1.1rem 0rem 1.1rem 5rem;

  border-top: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
  background-color: ${({ theme }) => theme.colors.Grey100};
  color: ${({ theme }) => theme.colors.Grey600};
  ${({ theme }) => theme.fonts.Body6};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  /* cursor: pointer; */

  & > svg {
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 1rem;
  }
`;

export default CategoryItem;
