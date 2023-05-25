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

//매물 정보 수정 API type
export interface productData {
  id: number;
  title: string;
  address: string;
  dong: number;
  ho: number;
  image: string;
  description: string;
  grade: number;
  state: string;
  price: string;
  size: number;
}

//체크리스트 생성 API Type
export interface checkListData {
  title: string;
  address: string;
  dong: number;
  ho: number;
  image: string;
  description: string;
  state: string;
  price: string;
  size: number;
  grade: number;
  checkListData: checkListDataInfo;
}

//체크리스트 안 체크리스트데이터 object
export interface checkListDataInfo {
  indoor: subCheckListInfo[];
  kitchen: subCheckListInfo[];
  livingroom: subCheckListInfo[];
  bathroom: subCheckListInfo[];
}
export interface subCheckListInfo {
  name: string;
  status: number;
}
