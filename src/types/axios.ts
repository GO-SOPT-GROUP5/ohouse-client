export interface OHouseResponse<T> {
  data?: T;
  status: number;
  success: boolean;
  message: string;
}
