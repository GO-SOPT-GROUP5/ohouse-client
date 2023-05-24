import {
  OHouseResponse,
  productListInfo,
  productRequest
} from "../types/product";
import { client } from "./axios";

export const getProductData = async ({flag, sort, page, size} : productRequest) => {
  try {
    const {data} = flag === ''? 
      await client.get<OHouseResponse<productListInfo>>(`/checklist/list?page=${page}&size=${size}&sort=${sort}`) :  
      await client.get<OHouseResponse<productListInfo>>(`/checklist/list?flag=${flag}&sort=${sort}&page=${page}&size=${size}`);
  
      return data.data;
  } catch (err) {
    console.error(err);
  }
};
