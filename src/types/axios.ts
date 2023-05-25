export interface OHouseResponse<T> {
  code: number;
  message: string;
  data: T;
}
