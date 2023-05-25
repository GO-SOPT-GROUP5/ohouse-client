import { OHouseResponse } from '../types/axios';
import { editCategoryRequest, productData } from '../types/category';
import { client } from './axios';

// 체크리스트 조회
export const getChecklistData = async (checklistId: number) => {
  try {
    const { data } = await client.get<OHouseResponse<productData>>(`/checklist/${checklistId}`);
    return data.data;
  } catch (err) {
    console.error(err);
  }
};

// 체크리스트 카테고리 수정
export const editChecklistData = async ({ checkListId, categoryList }: editCategoryRequest) => {
  try {
    const { data } = await client.patch<OHouseResponse<null>>('/category', {
      checkListId,
      categoryList,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};
