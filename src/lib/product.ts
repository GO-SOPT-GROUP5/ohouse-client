import { client } from './axios';

export const getProductData = async (productid: number) => {
  try {
    const { data } = await client.get(`/${productid}`);
    return data.data;
  } catch (err) {
    console.error(err);
  }
};
