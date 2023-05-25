import { checkListData, productData } from '../types/category';
import { client } from './axios';

export interface OHouseResponse<T> {
  status: number;
  success: boolean;
  message: string;
  data?: T;
}

//체크리스트 post
export const postCheckListData = async (reqData: checkListData) => {
  try {
    const { data } = await client.post<OHouseResponse<checkListData>>('/checklist', reqData);
    return { data: data.data, isError: false };
  } catch (err) {
    return { isError: true };
  }
};

//매물 정보 patch
export const patchProductData = async (reqData: productData) => {
  try {
    const { data } = await client.patch<OHouseResponse<productData>>(`/checklist`, reqData);
    return { data: data.data, isError: false };
  } catch (err) {
    return { isError: true };
  }
};
