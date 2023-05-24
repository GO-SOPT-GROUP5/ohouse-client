import {
  OHouseResponse,
  productListInfo,
  productRequest
} from "../types/product";
import { client } from "./axios";

export const getProductData = async ({flag, order, page, size} : productRequest) => {
  try {
    const {data} = flag === '전체'? 
      await client.get<OHouseResponse<productListInfo>>(`/list?order=${order}&page=${page}&size=${size}`) : 
      await client.get<OHouseResponse<productListInfo>>(`/list?flag=${flag}&order=${order}&page=${page}&size=${size}`);
  
      return data.data.productList;
  } catch (err) {
    console.error(err);
  }
};
