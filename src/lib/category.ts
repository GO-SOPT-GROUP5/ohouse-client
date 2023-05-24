import { reqCheckListData } from '../types/category';
import { client } from './axios';

export interface OHouseResponse<T> {
  status: number;
  success: boolean;
  message: string;
  data?: T;
}

//체크리스트 post
export const postCheckListData = async (reqData: reqCheckListData) => {
  try {
    const { data } = await client.post<OHouseResponse<reqCheckListData>>('/checklist', reqData);
    return data.data;
  } catch (err) {
    return err;
  }
};
