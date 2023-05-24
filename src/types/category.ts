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

export interface editCategoryRequest {
  checkListId: number;
  categoryList: categoryListInfo[];
}

export interface categoryListInfo {
  id: number;
  state: number;
}
