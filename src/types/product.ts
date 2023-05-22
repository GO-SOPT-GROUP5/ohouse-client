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
