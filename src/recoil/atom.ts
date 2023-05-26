import { atom } from 'recoil';

import {
  categoryIdList,
  editCategoryRequest,
  productDataAtom,
  subCategoryIdInfo,
} from '../types/category';

//페이지가 변경되더라도 상태관리를 유지
// const { persistAtom } = recoilPersist();

// unique ID 를 가지고 초기 값을 지정해주어야 합니다! (예시)
export const productDataState = atom<productDataAtom>({
  key: 'productInfo',
  default: {
    area: '',
    showPrice: '',
    monthly: '',
    id: 0,
    title: '',
    address: '',
    dong: 0,
    ho: 0,
    image: '',
    description: '',
    state: '',
    price: '',
    size: 0,
    grade: 0,
    checkListData: {
      indoor: [
        {
          id: 0,
          subCategoryStatus: 'SUNLIGHT',
          state: 0,
        },
        {
          id: 0,
          subCategoryStatus: 'LEAK',
          state: 0,
        },
        {
          id: 0,
          subCategoryStatus: 'HEATING',
          state: 0,
        },
      ],
      kitchen: [
        {
          id: 0,
          subCategoryStatus: 'SINK_DRAIN',
          state: 0,
        },
        {
          id: 0,
          subCategoryStatus: 'SINK_PRESSURE',
          state: 0,
        },
      ],
      livingRoom: [
        {
          id: 0,
          subCategoryStatus: 'WALLPAPER',
          state: 0,
        },
        {
          id: 0,
          subCategoryStatus: 'FLOOR',
          state: 0,
        },
        {
          id: 0,
          subCategoryStatus: 'BALCONY',
          state: 0,
        },
      ],
      bathroom: [
        {
          id: 0,
          subCategoryStatus: 'WASHSTAND_STATUS',
          state: 0,
        },
        {
          id: 0,
          subCategoryStatus: 'WASHSTAND_DRAIN',
          state: 0,
        },
        {
          id: 0,
          subCategoryStatus: 'WASHSTAND_PRESSURE',
          state: 0,
        },
        {
          id: 0,
          subCategoryStatus: 'MOLD',
          state: 0,
        },
        {
          id: 0,
          subCategoryStatus: 'TOILET',
          state: 0,
        },
      ],
    },
  },
  // effects_UNSTABLE: [persistAtom],
});

export const selectedSubcategoriesState = atom<number[]>({
  key: 'selectedSubcategories',
  default: [
    1,
    2,
    5,
    10,
    11,
    15,
    16,
    17,
    21,
    22,
    23,
    24,
    25,
    ...Array.from({ length: 48 - 13 }, (_, index) => index + 50),
  ],
});

export const showIndexState = atom<number[]>({
  key: 'showIndex',
  default: [1, 48],
});

export const clientSubCategoryIdState = atom<categoryIdList[]>({
  key: 'clientSubCategoryId',
  default: [
    {
      id: 1,
      name: 'SUNLIGHT',
      fetchedId: 0,
      state: 0,
    },
    {
      id: 2,
      name: 'LEAK',
      fetchedId: 0,
      state: 0,
    },
    {
      id: 5,
      name: 'HEATING',
      fetchedId: 0,
      state: 0,
    },
    {
      id: 10,
      name: 'SINK_DRAIN',
      fetchedId: 0,
      state: 0,
    },
    {
      id: 11,
      name: 'SINK_PRESSURE',
      fetchedId: 0,
      state: 0,
    },
    {
      id: 15,
      name: 'WALLPAPER',
      fetchedId: 0,
      state: 0,
    },
    {
      id: 16,
      name: 'FLOOR',
      fetchedId: 0,
      state: 0,
    },
    {
      id: 17,
      name: 'BALCONY',
      fetchedId: 0,
      state: 0,
    },
    {
      id: 21,
      name: 'WASHSTAND_STATUS',
      fetchedId: 0,
      state: 0,
    },
    {
      id: 22,
      name: 'WASHSTAND_DRAIN',
      fetchedId: 0,
      state: 0,
    },
    {
      id: 23,
      name: 'WASHSTAND_PRESSURE',
      fetchedId: 0,
      state: 0,
    },
    {
      id: 24,
      name: 'MOLD',
      fetchedId: 0,
      state: 0,
    },
    {
      id: 25,
      name: 'TOILET',
      fetchedId: 0,
      state: 0,
    },
  ],
});

export const subCategoryIdState = atom<subCategoryIdInfo[]>({
  key: 'subCategoryId',
  default: [
    {
      SUNLIGHT: 1,
      LEAK: 2,
      HEATING: 5,
      SINK_DRAIN: 10,
      SINK_PRESSURE: 11,
      WALLPAPER: 15,
      FLOOR: 16,
      BALCONY: 17,
      WASHSTAND_STATUS: 21,
      WASHSTAND_DRAIN: 22,
      WASHSTAND_PRESSURE: 23,
      MOLD: 24,
      TOILET: 25,
    },
  ],
});

export const editCategoryState = atom<editCategoryRequest>({
  key: 'editCategoryInfo',
  default: {
    checkListId: 0,
    categoryList: [],
  },
});
