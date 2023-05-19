import { useState } from 'react';
import styled from 'styled-components';

import { IcCheckboxAfter, IcCheckboxBefore, IcToggle } from '../../assets/icon';
import { CATEGORY_LIST } from '../../constants/category';
import { subCategoryInfo } from '../../types/category';

const Category = () => {
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<number[]>([]);

  const handleExpand = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter(c => c !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  const handleClickSubcategory = (e: React.MouseEvent, subcategory: subCategoryInfo) => {
    if (subcategory.isDisable) {
      e.stopPropagation();
      return;
    }

    if (selectedSubcategories.includes(subcategory.id)) {
      setSelectedSubcategories(selectedSubcategories.filter(s => s !== subcategory.id));
    } else {
      setSelectedSubcategories([...selectedSubcategories, subcategory.id]);
    }

    e.stopPropagation();
  };

  const handleActiveAndExpand = (category: string) => {
    if (activeCategories.includes(category)) {
      setActiveCategories([]);
      handleExpand(category);
    } else {
      setActiveCategories([category]);
      if (!expandedCategories.includes(category)) {
        handleExpand(category);
      }
    }
  };

  return (
    <St.CategoryList>
      <St.SelectAllBtn type="button">
        <p>전체</p>
      </St.SelectAllBtn>
      {CATEGORY_LIST.map(({ category, subcategories }) => (
        <St.CategoryItem
          key={category}
          onClick={() => handleActiveAndExpand(category)}
          active={activeCategories.includes(category)}
          expanded={expandedCategories.includes(category)}
        >
          <St.CategoryName>
            {category}
            <button type="button" className="expandBtn">
              <IcToggle />
            </button>
          </St.CategoryName>
          {expandedCategories.includes(category) &&
            subcategories.map(subcategory => (
              <St.Subcategory
                key={subcategory.id}
                onClick={(e: React.MouseEvent) => handleClickSubcategory(e, subcategory)}
                disabled={subcategory.isDisable}
              >
                {selectedSubcategories.includes(subcategory.id) ? (
                  <IcCheckboxAfter />
                ) : (
                  <IcCheckboxBefore />
                )}
                {subcategory.subcategory}
              </St.Subcategory>
            ))}
        </St.CategoryItem>
      ))}
    </St.CategoryList>
  );
};

export default Category;

const St = {
  CategoryList: styled.ul`
    width: 34.8rem;

    background-color: ${({ theme }) => theme.colors.White};
    color: ${({ theme }) => theme.colors.Grey600};
    ${({ theme }) => theme.fonts.Title5};
  `,

  SelectAllBtn: styled.button`
    width: 100%;
    height: 5.8rem;
    padding: 0;

    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.Grey300};

    & > p {
      margin-left: 3.8rem;
      ${({ theme }) => theme.fonts.Title5};
      float: left;
    }
  `,

  CategoryName: styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 5.8rem;

    ${({ theme }) => theme.fonts.Title5};
  `,

  CategoryItem: styled.div<{ active: boolean; expanded: boolean }>`
    padding: 0rem 2.8rem 0rem 3.8rem;

    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
    background-color: ${({ active, expanded, theme }) =>
      expanded || active ? theme.colors.Blue : theme.colors.White};
    color: ${({ active, expanded, theme }) =>
      expanded || active ? theme.colors.White : theme.colors.Grey600};

    ${({ active, theme }) =>
      !active &&
      `
    background-color: ${theme.colors.White};
    color: ${theme.colors.Grey600};

    & ${St.CategoryName} {
      color: ${theme.colors.Grey600};
    }
  `}

    ${({ active, expanded, theme }) =>
      active &&
      `
    .expandBtn {
      svg {
        transform: ${expanded ? 'rotate(180deg)' : 'none'};
        & > path {
          fill: ${theme.colors.White};
        }
      }
    }
  `}
  `,

  Subcategory: styled.p<{ disabled: boolean }>`
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

    & > svg {
      width: 1.3rem;
      height: 1.3rem;
      margin-right: 1rem;
    }
  `,
};
