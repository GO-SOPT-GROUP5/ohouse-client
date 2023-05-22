export interface categoryInfo {
  category: string;
  subcategories: subCategoryInfo[];
}

export interface subCategoryInfo {
  id: number;
  subcategory: string;
  checklist: string;
  options: string[];
  isDisable: boolean;
}

export interface categoryResponse {
  code: number;
  message: string;
  data: checkListData;
}

export interface checkListData {
  id: number;
  title: string;
  address: string;
  dong: number;
  ho: number;
  image: string;
  grade: number;
  tag: tagInfo;
  checkListData: checkListState;
}

export interface subCategoryData {
  id: number;
  subCategoryStatus: string;
  state: number;
}

export interface tagInfo {
  price: string;
  size: number;
  state: string;
}

export interface checkListState {
  indoor: subCategoryData[];
  kitchen: subCategoryData[];
  livingRoom: subCategoryData[];
  bathroom: subCategoryData[];
}
