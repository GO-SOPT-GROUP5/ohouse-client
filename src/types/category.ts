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
  createAt: string;
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
