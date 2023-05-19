import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled, { css } from 'styled-components';

import { IcCheckboxAfter, IcCheckboxBefore, IcToggle } from '../../assets/icon';
import { CATEGORY_LIST } from '../../constants/category';
import { selectedSubcategoriesState } from '../../recoil/atom';
import { subCategoryInfo } from '../../types/category';

const Category = () => {
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useRecoilState(
    selectedSubcategoriesState,
  );
  const [isSelectAll, setIsSelectAll] = useState(false);

  const handleExpand = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter(c => c !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  const handleClickSubcategory = (e: React.MouseEvent, subcategory: subCategoryInfo) => {
    let copiedSubcategories: number[];

    if (subcategory.isDisable) {
      e.stopPropagation();
      return;
    }

    if (selectedSubcategories.includes(subcategory.id)) {
      copiedSubcategories = selectedSubcategories.filter(s => s !== subcategory.id);
    } else {
      copiedSubcategories = [...selectedSubcategories, subcategory.id];
    }
    copiedSubcategories.sort((a, b) => a - b); // Sort the IDs in ascending order
    setSelectedSubcategories(copiedSubcategories);

    e.stopPropagation();
  };

  const handleActiveAndExpand = (category: string) => {
    setIsSelectAll(false);
    if (activeCategory === category) {
      setActiveCategory('');
      handleExpand(category);
    } else {
      setActiveCategory(category);
      if (!expandedCategories.includes(category)) {
        handleExpand(category);
      }
    }
  };

  const handleSelectAll = () => {
    setActiveCategory(isSelectAll ? '' : '전체');
    setIsSelectAll(prev => !prev);
  };

  return (
    <St.CategoryList>
      <St.SelectAllBtn type="button" onClick={handleSelectAll} isSelectAll={isSelectAll}>
        <p>전체</p>
      </St.SelectAllBtn>
      {CATEGORY_LIST.map(({ category, subcategories }) => (
        <St.CategoryItem
          key={category}
          onClick={() => handleActiveAndExpand(category)}
          active={activeCategory === category}
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

  SelectAllBtn: styled.button<{ isSelectAll: boolean }>`
    width: 100%;
    height: 5.8rem;
    padding: 0;

    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
    background-color: ${({ theme }) => theme.colors.White};
    color: ${({ theme }) => theme.colors.Grey600};

    & > p {
      margin-left: 3.8rem;
      ${({ theme }) => theme.fonts.Title5};
      float: left;
    }

    ${({ isSelectAll }) =>
      isSelectAll &&
      css`
        background-color: ${({ theme }) => theme.colors.Blue};
        color: ${({ theme }) => theme.colors.White};
      `};
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
      css`
        background-color: ${theme.colors.White};
        color: ${theme.colors.Grey600};

        & > ${St.CategoryName} {
          color: ${theme.colors.Grey600};
        }
      `};

    ${({ active, expanded }) =>
      active &&
      css`
        .expandBtn {
          svg {
            transform: ${expanded ? 'rotate(180deg)' : 'none'};
            & > path {
              fill: ${({ theme }) => theme.colors.White};
            }
          }
        }
      `};
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
