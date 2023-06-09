// 나중에
export interface OHouseResponse<T> {
  status: number;
  success: boolean;
  message: string;
  data?: T;
}

export interface productListInfo {
  productList: productResponse[];
}

export interface productInfo {
  id: string;
  title: string;
  createAt: string;
  image: string;
  description: string;
  tags: {
    state: string;
    price: string;
    size: number;
  };
  grade: number;
}

export interface productRequest {
  flag: string;
  sort: string;
  page: number;
  size: number;
}

export interface productResponse {
  id: number;
  grade: number;
  good: number;
  average: number;
  bad: number;
  title: string;
  image: string;
}

export interface deleteResponse {
  code: number;
  message: string;
  data: null;
}
