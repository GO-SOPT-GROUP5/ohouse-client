import {
  OHouseResponse,
  productListInfo,
  productRequest
} from "../types/product";
import { client } from "./axios";

export const getProductData = async ({flag, order, page, size} : productRequest) => {
  try {
    const {data} = flag === '전체'? 
      await client.get<OHouseResponse<productListInfo>>(`/checklist/list?page=0&size=5&sort=GRADE`) :  
      await client.get<OHouseResponse<productListInfo>>(`/checklist/list?flag=${flag}&order=${order}&page=${page}&size=${size}`);
  
      return data.data;
  } catch (err) {
    console.error(err);
  }
};
