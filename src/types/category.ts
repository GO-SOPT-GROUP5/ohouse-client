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
  tags: tagObject;
}

// 매물 정보 태그 내용 object
export interface tagObject {
  state: string;
  price: string;
  size: number;
}
//체크리스트 POST Requset API Type
export interface reqCheckListData {
  address: string;
  average: number;
  bad: number;
  checkListData: checkListDataInfo;
  description: string;
  dong: number;
  good: number;
  grade: number;
  ho: number;
  image: string;
  price: string;
  size: number;
  state: string;
}

//체크리스트 POST Response API Type
export interface resCheckListData {
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
  livingRoom: subCheckListInfo[];
  bathroom: subCheckListInfo[];
}
export interface subCheckListInfo {
  subCategoryStatus: string;
  state: number;
}
