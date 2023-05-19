export const CATEGORY_LIST = [
  {
    category: '실내',
    subcategories: [
      {
        subcategory: '채광량',
        checklist: '집의 전반적인 채광량은 어떤가요?',
        options: ['나빠요', '보통이에요', '좋아요'],
        isDisable: false,
      },
      {
        subcategory: '누수 상태',
        checklist: '벽과 천장에 물이 샌 흔적이 있나요?',
        options: ['많이 있어요', '조금 있어요', '좋아요'],
        isDisable: false,
      },
      {
        subcategory: '층간 소음',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '기본 옵션',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '난방 방식',
        checklist: '어떤 난방 방식을 사용하나요?',
        options: ['개별난방', '중앙난방', '지역난방'],
        isDisable: false,
      },
      {
        subcategory: '반려동물 입주',
        checklist: '',
        options: [],
        isDisable: true,
      },
    ],
  },
  {
    category: '현관',
    subcategories: [
      {
        subcategory: '도어락 유무',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '신발장 크기',
        checklist: '',
        options: [],
        isDisable: true,
      },

      {
        subcategory: '중문 유무',
        checklist: '',
        options: [],
        isDisable: true,
      },
    ],
  },
  {
    category: '주방',
    subcategories: [
      {
        subcategory: '싱크대 배수',
        checklist: '싱크대 배수 상태는 어떤가요?',
        options: ['나빠요', '보통이에요', '좋아요'],
        isDisable: false,
      },
      {
        subcategory: '싱크대 수압',
        checklist: '싱크대 수압 상태는 어떤가요?',
        options: ['나빠요', '보통이에요', '좋아요'],
        isDisable: false,
      },
      {
        subcategory: '싱크대 상태',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '화구 상태',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '환풍기 상태',
        checklist: '',
        options: [],
        isDisable: true,
      },
    ],
  },
  {
    category: '거실',
    subcategories: [
      {
        subcategory: '도배 상태',
        checklist: '집 안 벽지 상태는 어떤가요?',
        options: ['나빠요', '보통이에요', '좋아요'],
        isDisable: false,
      },
      {
        subcategory: '장판/바닥 상태',
        checklist: '집의 장판 혹은 바닥 상태는 어떤가요?',
        options: ['나빠요', '보통이에요', '좋아요'],
        isDisable: false,
      },
      {
        subcategory: '발코니 상태',
        checklist: '발코니 상태는 어떤가요?',
        options: ['나빠요', '보통이에요', '좋아요'],
        isDisable: false,
      },
    ],
  },
  {
    category: '침실',
    subcategories: [
      {
        subcategory: '층간 소음',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '곰팡이 유무',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '채광량',
        checklist: '',
        options: [],
        isDisable: true,
      },
    ],
  },
  {
    category: '화장실',

    subcategories: [
      {
        subcategory: '세면대 상태',
        checklist: '세면대의 전반적인 상태는 어떤가요?',
        options: ['나빠요', '보통이에요', '좋아요'],
        isDisable: false,
      },
      {
        subcategory: '세면대 배수',
        checklist: '화장실 배수 상태는 어떤가요?',
        options: ['나빠요', '보통이에요', '좋아요'],
        isDisable: false,
      },
      {
        subcategory: '세면대 수압',
        checklist: '화장실 수압은 어떤가요?',
        options: ['나빠요', '보통이에요', '좋아요'],
        isDisable: false,
      },
      {
        subcategory: '곰팡이 유무',
        checklist: '화장실 안에 곰팡이 흔적이 있나요?',
        options: ['많이 있어요', '조금 있어요', '없어요'],
        isDisable: false,
      },
      {
        subcategory: '변기 상태',
        checklist: '화장실 변기 상태는 어떤가요?',
        options: ['나빠요', '보통이에요', '좋아요'],
        isDisable: false,
      },
      {
        subcategory: '수건장 활용성',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '환풍기 상태',
        checklist: '',
        options: [],
        isDisable: true,
      },
    ],
  },
  {
    category: '보안',
    subcategories: [
      {
        subcategory: 'CCTV 유무',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '공동현관 유무',
        checklist: '',
        options: [],
        isDisable: true,
      },
    ],
  },
  {
    category: '건물상태',
    subcategories: [
      {
        subcategory: '건물 균열/노후 상태',
        checklist: '',
        options: [],
        isDisable: true,
      },
    ],
  },
  {
    category: '단지시설',
    subcategories: [
      {
        subcategory: '주차 가능 여부',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '주차장 형태',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '놀이터 상태',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '승강기 형태',
        checklist: '',
        options: [],
        isDisable: true,
      },
    ],
  },
  {
    category: '교통',
    subcategories: [
      {
        subcategory: '기차역/공항',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '버스정류장',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '지하철역',
        checklist: '',
        options: [],
        isDisable: true,
      },
    ],
  },
  {
    category: '편의시설',

    subcategories: [
      {
        subcategory: '공공시설',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '대형마트',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '먹자골목',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '병원/약국',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '편의점',
        checklist: '',
        options: [],
        isDisable: true,
      },
    ],
  },
  {
    category: '주변시설',
    subcategories: [
      {
        subcategory: '공원/호수',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '방법시설',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '유해/혐오시설',
        checklist: '',
        options: [],
        isDisable: true,
      },
    ],
  },
  {
    category: '교육시설',
    subcategories: [
      {
        subcategory: '학원가',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '초등학교',
        checklist: '',
        options: [],
        isDisable: true,
      },
      {
        subcategory: '중/고등학교',
        checklist: '',
        options: [],
        isDisable: true,
      },
    ],
  },
];
