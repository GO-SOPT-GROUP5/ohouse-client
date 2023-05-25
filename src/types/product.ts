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
