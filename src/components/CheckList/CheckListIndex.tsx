import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { ImgEmpty } from '../../assets/image';
import { CATEGORY_LIST } from '../../constants/category';
import { editChecklistData } from '../../lib/checklist';
import {
  clientSubCategoryIdState,
  editCategoryState,
  productDataState,
  selectedSubcategoriesState,
  showIndexState,
  subCategoryIdState,
} from '../../recoil/atom';
import {
  categoryIdList,
  categoryListInfo,
  editCategoryRequest,
  productData,
} from '../../types/category';
import CheckListItem from './CheckListItem';

interface CheckListIndexProps {
  checklistId: number;
}

const CheckListIndex = ({ checklistId }: CheckListIndexProps) => {
  const [selectedSubcategories, setSelectedSubcategories] = useRecoilState(
    selectedSubcategoriesState,
  );
  const [showIndex] = useRecoilState(showIndexState);
  const [subCategoryId, setSubCategoryId] = useRecoilState(subCategoryIdState);
  const [selectedCategoryOption, setSelectedCategoryOption] =
    useRecoilState<editCategoryRequest>(editCategoryState);
  const [productData, setProductData] = useRecoilState<productData>(productDataState);
  const [clientSubCategoryId, setClientSubCategoryId] =
    useRecoilState<categoryIdList[]>(clientSubCategoryIdState);

  console.log('index페이지', clientSubCategoryId);

  const getCategoryInfo = (id: number) => {
    for (const category of CATEGORY_LIST) {
      const subcategory = category.subcategories.find(subcategory => subcategory.id === id);
      if (subcategory) {
        const { subcategory: subcategoryName, checklist, options } = subcategory;
        return { subcategory: subcategoryName, checklist, options };
      }
    }
    return null;
  };

  const showSubcategories = selectedSubcategories.filter(
    subcategory => subcategory >= showIndex[0] && subcategory <= showIndex[1],
  );

  const handleCompleteEdit = async () => {
    const updatedCategoryList = selectedCategoryOption.categoryList.map(category => {
      switch (category.id) {
        case 1:
          return { ...category, id: subCategoryId[0].SUNLIGHT };
        case 2:
          return { ...category, id: subCategoryId[0].LEAK };
        case 5:
          return { ...category, id: subCategoryId[0].HEATING };
        case 10:
          return { ...category, id: subCategoryId[0].SINK_DRAIN };
        case 11:
          return { ...category, id: subCategoryId[0].SINK_PRESSURE };
        case 15:
          return { ...category, id: subCategoryId[0].WALLPAPER };
        case 16:
          return { ...category, id: subCategoryId[0].FLOOR };
        case 17:
          return { ...category, id: subCategoryId[0].BALCONY };
        case 21:
          return { ...category, id: subCategoryId[0].WASHSTAND_STATUS };
        case 22:
          return { ...category, id: subCategoryId[0].WASHSTAND_DRAIN };
        case 23:
          return { ...category, id: subCategoryId[0].WASHSTAND_PRESSURE };
        case 24:
          return { ...category, id: subCategoryId[0].MOLD };
        case 25:
          return { ...category, id: subCategoryId[0].TOILET };
        default:
          return category;
      }
    });

    const editRequest: editCategoryRequest = {
      checkListId: checklistId,
      categoryList: updatedCategoryList,
    };

    editChecklist(editRequest);

    try {
      const result = await editChecklistData(editRequest);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const editChecklist = async ({ checkListId, categoryList }: editCategoryRequest) => {
    try {
      const result = await editChecklistData({
        checkListId: checkListId,
        categoryList: categoryList,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <St.CheckList>
      {showSubcategories.length ? (
        showSubcategories.map(id => {
          const { subcategory, checklist, options } = getCategoryInfo(id) || {};
          if (subcategory && checklist && options) {
            return (
              <CheckListItem
                key={id}
                categoryId={id}
                subcategory={subcategory}
                checklist={checklist}
                options={options}
              />
            );
          }
        })
      ) : (
        <St.Empty>
          <ImgEmpty />
        </St.Empty>
      )}
      <St.CompleteEditBtn type="button" onClick={handleCompleteEdit}>
        수정하기
      </St.CompleteEditBtn>
    </St.CheckList>
  );
};

export default CheckListIndex;

const St = {
  CheckList: styled.section`
    display: flex;
    flex-direction: column;
    gap: 3.6rem;

    width: 63.2rem;
    height: fit-content;
    padding: 3.9rem;

    background-color: ${({ theme }) => theme.colors.White};
  `,

  CompleteEditBtn: styled.button`
    width: 100%;
    height: 6.9rem;

    border-radius: 0.4rem;
    background-color: ${({ theme }) => theme.colors.Blue};
    color: ${({ theme }) => theme.colors.White};
    ${({ theme }) => theme.fonts.Title3};
  `,

  Empty: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 81.2rem;
  `,
};
