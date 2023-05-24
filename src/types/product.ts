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
