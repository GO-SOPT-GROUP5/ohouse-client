import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { editCategoryState, productDataState, subCategoryIdState } from '../../recoil/atom';
import {
  categoryListInfo,
  checkListDataInfo,
  editCategoryRequest,
  productData,
} from '../../types/category';

interface CheckListItemProms {
  categoryId: number;
  subcategory: string;
  checklist: string;
  options: string[];
}

const CheckListItem = ({ categoryId, subcategory, checklist, options }: CheckListItemProms) => {
  const { checklistId } = useParams();
  const [subCategoryId] = useRecoilState(subCategoryIdState);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [selectedCategoryOption, setSelectedCategoryOption] =
    useRecoilState<editCategoryRequest>(editCategoryState);
  const [productData, setProductData] = useRecoilState<productData>(productDataState);

  const handleSelectedOption = (index: number) => {
    if (categoryId && index !== selectedOptionIndex) {
      setSelectedOptionIndex(index);

      setSelectedCategoryOption(prevOptions => {
        const categoryExists = prevOptions.categoryList.find(
          category => category.id === categoryId,
        );

        if (categoryExists) {
          const updatedCategoryList = prevOptions.categoryList.map(category => {
            if (category.id === categoryId) {
              return { ...category, state: index + 1 };
            }
            return category;
          });
          return { ...prevOptions, categoryList: updatedCategoryList };
        } else {
          const newCategory = { id: categoryId, state: index + 1 };
          return { ...prevOptions, categoryList: [...prevOptions.categoryList, newCategory] };
        }
      });
    }
  };

  useEffect(() => {
    console.log('selectedCategoryOption', selectedCategoryOption);
  }, [selectedCategoryOption]);

  useEffect(() => {
    if (checklistId) {
      setSelectedCategoryOption(prevOptions => ({
        ...prevOptions,
        checkListId: Number(checklistId),
      }));
    }
  }, [checklistId]);

  return (
    <St.CheckListItemWrapper>
      <p>{checklist}</p>
      <St.OptionWrapper>
        {options.map((option, index) => (
          <St.OptionBtn
            key={option}
            onClick={() => handleSelectedOption(index)}
            disabled={index === selectedOptionIndex}
            active={index === selectedOptionIndex}
          >
            {option}
          </St.OptionBtn>
        ))}
      </St.OptionWrapper>
    </St.CheckListItemWrapper>
  );
};

export default CheckListItem;

const St = {
  CheckListItemWrapper: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 8.7rem;

    background-color: ${({ theme }) => theme.colors.White};

    & > p {
      color: ${({ theme }) => theme.colors.Grey600};
      // 수정 필요
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
    }
  `,
  OptionWrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,

  OptionBtn: styled.button<{ active: boolean }>`
    width: 17.863rem;
    height: 4.2rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.Grey400};
    ${({ theme }) => theme.fonts.Body4};

    ${({ active, theme }) =>
      active
        ? `
    border: 0.1rem solid ${theme.colors.Blue};
    background-color: ${theme.colors.White};
  color: ${theme.colors.Blue};
`
        : `
    background-color: ${theme.colors.White};
  color: ${theme.colors.Grey600};
`}

    &:hover {
      border: 0.1rem solid ${({ theme }) => theme.colors.Blue};
      background: rgba(51, 197, 239, 0.1);
      color: ${({ theme }) => theme.colors.Blue};
    }
  `,
};
