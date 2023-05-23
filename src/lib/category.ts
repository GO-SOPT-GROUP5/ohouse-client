import { checkListData, reqProductData, resProductData } from '../types/category';
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
    return data.data;
  } catch (err) {
    return err;
  }
};
