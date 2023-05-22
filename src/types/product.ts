// 나중에 
export interface OHouseResponse<T> {
  status: number;
  success: boolean;
  message: string;
  data?: T;
}

export interface productRequest {
  flag: string;
  order: string;
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
