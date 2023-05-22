import {
  OHouseResponse,
  productRequest,
  productResponse
} from "../types/product";
import { client } from "./axios";

export const getProductData = async ({flag, order, page, size} : productRequest) => {
  try {
    const {data} = flag ? 
      await client.get<OHouseResponse<productResponse>>(`/list?flag=${flag}&order=${order}&page=${page}&size=${size}`) : 
      await client.get<OHouseResponse<productResponse>>(`/list?order=${order}&page=${page}&size=${size}`);
  
      return data.data.productList;
  } catch (err) {
    console.error(err);
  }
};
