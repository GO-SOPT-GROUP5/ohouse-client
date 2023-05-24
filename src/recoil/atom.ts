import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { productData } from '../types/category';
import { productInfo } from '../types/product';

//페이지가 변경되더라도 상태관리를 유지
const { persistAtom } = recoilPersist();

// unique ID 를 가지고 초기 값을 지정해주어야 합니다! (예시)
export const productDataState = atom<productData>({
  key: 'productInfo',
  default: {
    id: 0,
    title: '',
    address: '',
    dong: 0,
    ho: 0,
    image: '',
    description: '',
    tags: {
      state: '',
      price: '',
      size: 0,
    },
    grade: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

export const selectedSubcategoriesState = atom<number[]>({
  key: 'selectedSubcategories',
  default: [],
});

export const showIndexState = atom<number[]>({
  key: 'showIndex',
  default: [1, 48],
});
