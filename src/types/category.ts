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
  price: string;
  size: number;
  state: string;
  grade: number;
  state: string;
  price: string;
  size: number;
  checkListData: checkListDataInfo;
}

export interface productDataAtom extends productData {
  area: string;
  showPrice: string;
  monthly: string;
}

// 매물 정보 태그 내용 object
// export interface tagObject {
//   state: string;
//   price: string;
//   size: number;
// }

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
  livingRoom: subCheckListInfo[];
  bathroom: subCheckListInfo[];
}

export interface subCheckListInfo {
  id: number;
  subCategoryStatus: string;
  state: number;
}

export interface editCategoryRequest {
  checkListId: number;
  categoryList: categoryListInfo[];
}

export interface categoryListInfo {
  id: number;
  state: number;
}

export interface subCategoryIdInfo {
  SUNLIGHT: number;
  LEAK: number;
  HEATING: number;
  SINK_DRAIN: number;
  SINK_PRESSURE: number;
  WALLPAPER: number;
  FLOOR: number;
  BALCONY: number;
  WASHSTAND_STATUS: number;
  WASHSTAND_DRAIN: number;
  WASHSTAND_PRESSURE: number;
  MOLD: number;
  TOILET: number;
}

export interface categoryIdList {
  id: number;
  fetchedId: number;
  name: string;
  state: number;
}
