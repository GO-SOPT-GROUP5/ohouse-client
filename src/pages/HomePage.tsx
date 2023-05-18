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
  IcWashingMachine,
} from '../assets/icon';
import MenuBox from '../components/Home/MenuBox';

const HomePage = () => {
  return (
    <St.HomeWrapper>
      <St.TopSection>
        <MenuBox
          title="인테리어 시공"
          content="종합리모델링,
          부분시공,카페공간 등 
          분야별 업체찾기"
          icon={<IcHuman />}
        />
        <MenuBox
          title="이사"
          content="투명한 업체
          정보 제공 및 빠른 견적"
          icon={<IcBox />}
        />
        <MenuBox
          title="설치/수리"
          content="커튼,조명 설치
          전문기사 바로예약"
          icon={<IcDrill />}
        />
        <MenuBox
          title="등록매물 확인하기"
          content="집보며 하나하나 적기 힘드셨죠?
          이젠 쉽게 체크하세요"
          icon={<IcCheckList />}
        />
        <MenuBox
          title="우리동네 아파트"
          content="종합리모델링,
          부분시공,카페공간 등 
          분야별 업체찾기"
          icon={<IcApartment />}
        />
      </St.TopSection>
      <St.BottomSection>
        <St.BottomTitle>
          <h4>청소서비스</h4>
          <IcCleanService />
        </St.BottomTitle>
        <St.Bottomcontent>
          <MenuBox
            title="세탁기청소"
            content="새것처럼
            완벽 클리닝"
            icon={<IcWashingMachine />}
          />
          <MenuBox
            title="에어컨청소"
            content="분해부터 뒷정리까지
            꼼꼼한 전문가에게"
            icon={<IcAircon />}
          />
          <MenuBox
            title="입주청소"
            content="새잡에서
            깨끗하게 시작하기"
            icon={<IcCleaning />}
          />
        </St.Bottomcontent>
      </St.BottomSection>
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
    margin-left: 10rem;

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
