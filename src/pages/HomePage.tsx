import { styled } from 'styled-components';

import { IcCleanService } from '../assets/icon';
import MenuBox from '../components/Home/MenuBox';

const HomePage = () => {
  return (
    <St.HomeWrapper>
      <St.TopSection>
        <MenuBox />
        <MenuBox />
        <MenuBox />
        <MenuBox />
        <MenuBox />
        <MenuBox />
      </St.TopSection>
      <St.BottomSection>
        <St.BottomTitle>
          <h4>청소서비스</h4>
          <IcCleanService />
        </St.BottomTitle>
        <St.Bottomcontent>
          <MenuBox />
          <MenuBox />
          <MenuBox />
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
