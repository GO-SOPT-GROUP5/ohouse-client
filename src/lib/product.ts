import { OHouseResponse } from '../types/axios';
import { categoryResponse, checkListData } from '../types/category';
import { client } from './axios';

export const getProductData = async (productid: number) => {
  try {
    const { data } = await client.get(`/${productid}`);
    return data.data;
  } catch (err) {
    console.error(err);
  }
};

// 체크리스트 조회
export const getChecklistData = async (checklistId: number) => {
  try {
    const { data } = await client.get<categoryResponse>(`/checklist/${checklistId}`);
    return data.data;
  } catch (err) {
    console.error(err);
  }
};

// 체크리스트 카테고리 수정
export const editChecklistData = async (id: number, status: string) => {
  try {
    const { data } = await client.patch<OHouseResponse<null>>('/checklist', { id, status });
    return data.data;
  } catch (err) {
    console.error(err);
  }
};
