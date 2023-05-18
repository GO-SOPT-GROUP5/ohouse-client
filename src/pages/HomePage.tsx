import { styled } from 'styled-components';

import {
  IcAircon,
  IcApartment,
  IcBox,
  IcCheckList,
  IcCleaning,
  IcCleanService,
  IcDrill,
  IcHuman,
  IcNew,
  IcWashingMachine,
} from '../assets/icon';
import MenuBox from '../components/Home/MenuBox';

const HomePage = () => {
  const MENU_CONTENT = [
    {
      id: 1,
      title: '인테리어 시공',
      isNew: false,
      content: '종합리모델링,\n부분시공,카페공간 등\n분야별 업체찾기',
      icon: <IcHuman />,
    },
    {
      id: 2,
      title: '이사',
      isNew: false,
      content: '투명한 업체\n정보 제공 및 빠른 견적',
      icon: <IcBox />,
    },
    {
      id: 3,
      title: '설치/수리',
      isNew: false,
      content: '커튼, 조명 등 설치\n전문기사 바로예약',
      icon: <IcDrill />,
    },
    {
      id: 4,
      title: '등록매물 확인하기',
      isNew: true,
      content: '집보며 하나하나 적기 힘드셨죠?\n이젠 쉽게 체크 하세요',
      icon: <IcCheckList />,
    },
    {
      id: 5,
      title: '우리동네 아파트',
      isNew: true,
      content: '종합리모델링,\n카페공간 등\n분야별 업체찾기',
      icon: <IcCheckList />,
    },
  ];

  const CLEANING_MENU_CONTENT = [
    {
      id: 1,
      title: '세탁기청소',
      isNew: false,
      content: '새것처럼\n완벽 클리닝',
      icon: <IcWashingMachine />,
    },
    {
      id: 2,
      title: '에어컨청소',
      isNew: false,
      content: '분해부터 뒷정리까지\n꼼꼼한 전문가에게',
      icon: <IcAircon />,
    },
    {
      id: 3,
      title: '입주청소',
      isNew: true,
      content: '새집에서\n깨끗하게 시작하기',
      icon: <IcCleaning />,
    },
  ];
  return (
    <St.HomeWrapper>
      <St.MenuWrapper>
        <St.TopSection>
          {MENU_CONTENT.map(item => (
            <MenuBox
              key={item.id}
              title={item.title}
              isNew={item.isNew ? <IcNew /> : <></>}
              content={item.content}
              icon={item.icon}
            />
          ))}
        </St.TopSection>
        <St.BottomSection>
          <St.BottomTitle>
            <h4>청소서비스</h4>
            <IcCleanService />
          </St.BottomTitle>
          <St.Bottomcontent>
            {CLEANING_MENU_CONTENT.map(item => (
              <MenuBox
                key={item.id}
                title={item.title}
                isNew={item.isNew ? <IcNew /> : <></>}
                content={item.content}
                icon={item.icon}
              />
            ))}
          </St.Bottomcontent>
        </St.BottomSection>
      </St.MenuWrapper>
    </St.HomeWrapper>
  );
};

export default HomePage;

const St = {
  HomeWrapper: styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 10rem;

    background-color: ${({ theme }) => theme.colors.Grey100};
  `,
  MenuWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
  `,
  TopSection: styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    gap: 2rem;
    padding: 8.5rem 0 3.9rem 0;
    margin: auto;
  `,
  BottomSection: styled.section`
    display: flex;
    flex-direction: column;
  `,
  BottomTitle: styled.div`
    display: flex;

    & > h4 {
      padding-right: 0.4rem;

      color: ${({ theme }) => theme.colors.Grey600};

      ${({ theme }) => theme.fonts.Title4};
    }
    & > svg {
      width: 4.6rem;
      height: 3.2rem;
    }
  `,
  Bottomcontent: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    padding: 1.6rem 0 4.6rem 0;
    margin: auto;
    gap: 2rem;
  `,
};
