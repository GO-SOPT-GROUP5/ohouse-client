import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled, { css } from 'styled-components';

import { IcCheckboxAfter, IcCheckboxBefore, IcToggle } from '../../assets/icon';
import { CATEGORY_LIST } from '../../constants/category';
import { selectedSubcategoriesState, showIndexState } from '../../recoil/atom';
import { subCategoryInfo } from '../../types/category';

const Category = () => {
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useRecoilState(
    selectedSubcategoriesState,
  );
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [showIndex, setShowIndex] = useRecoilState(showIndexState);

  const handleExpand = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter(c => c !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  console.log(selectedSubcategories);
  console.log(expandedCategories);

  const handleClickSubcategory = (e: React.MouseEvent, subcategory: subCategoryInfo) => {
    let copiedSubcategories: number[];

    if (subcategory.isDisable) {
      e.stopPropagation();
      return;
    }

    console.log('클릭');
    console.log(selectedSubcategories);
    if (selectedSubcategories.includes(subcategory.id)) {
      copiedSubcategories = selectedSubcategories.filter(s => s !== subcategory.id);
    } else {
      copiedSubcategories = [...selectedSubcategories, subcategory.id];
    }
    copiedSubcategories.sort((a, b) => a - b);
    setSelectedSubcategories(copiedSubcategories);

    e.stopPropagation();
  };

  const handleActiveAndExpand = (category: string) => {
    setIsSelectAll(false);
    handleShowId(category);
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

  const handleShowId = (activeCategory: string) => {
    switch (activeCategory) {
      case '실내':
        setShowIndex([1, 6]);
        break;
      case '현관':
        setShowIndex([7, 9]);
        break;
      case '주방':
        setShowIndex([10, 14]);
        break;
      case '거실':
        setShowIndex([15, 17]);
        break;
      case '침실':
        setShowIndex([18, 20]);
        break;
      case '화장실':
        setShowIndex([21, 27]);
        break;
      case '보안':
        setShowIndex([28, 29]);
        break;
      case '건물상태':
        setShowIndex([30, 30]);
        break;
      case '단지시설':
        setShowIndex([31, 34]);
        break;
      case '교통':
        setShowIndex([35, 37]);
        break;
      case '편의시설':
        setShowIndex([38, 42]);
        break;
      case '주변시설':
        setShowIndex([43, 45]);
        break;
      case '교육시설':
        setShowIndex([46, 48]);
        break;
      default:
        break;
    }
  };

  const handleSelectAll = () => {
    setActiveCategory(isSelectAll ? '' : '전체');
    setIsSelectAll(prev => !prev);
    setShowIndex([1, 48]);
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
