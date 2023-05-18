
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import { IcLeft, IcRight } from "../../assets/icon";
import { ImgExplanation1 } from "../../assets/image/index";

const Help = () => {
  return (
    <St.HelpWrapper>
      <St.HelpCard>
        <St.HelpIcon>
          <IcLeft />
          <IcRight />
        </St.HelpIcon>
        <St.HelpContent>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
          <h1>집보며 하나하나 적기 힘드셨죠?<br/>이젠 쉽게 체크 하세요</h1>
          <p>집 볼때 꼭 체크해야하는 핵심만 모아놨어요</p>
          <button type='button'>새로운 매물 등록하기</button>
        </St.HelpContent>
      </St.HelpCard>
    </St.HelpWrapper>
  );
};

export default Help;

const St = {
  HelpWrapper: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height:100%;

    background-color: ${({ theme }) => theme.colors.Grey200};
    color: ${({ theme }) => theme.colors.Grey600};
    ${({ theme }) => theme.fonts.Title1};
  `,
  HelpCard: styled.main`
    width: 63rem;
    height: 70rem;

    position: relative;

    background-color:${({ theme }) => theme.colors.White};
    border-radius: 1rem;
    box-shadow: 0 0.3rem 0.9rem rgba(0, 0, 0, 0.1);

    & > svg {
      position: absolute;
      
      margin-top: 20rem;
      margin-left: 12rem;
    }
  `,
  HelpIcon: styled.div`
    display: flex;
    gap: 56rem;

    position: absolute;
    left: -3.5rem;

    margin-top: 32.5rem;
  `,
  HelpContent: styled.article`
    display: flex;
    flex-direction: column;

    position: relative;

    height: 100%;
    margin: 0rem 10.1rem;

    & > h1 {
      margin-top: 4.3rem;

      ${({ theme }) => theme.fonts.Title1};
      color: ${({ theme }) => theme.colors.Grey600};
    }

    & > p {
      margin-top: 1.2rem;

      ${({ theme }) => theme.fonts.Body3};
      color: ${({ theme }) => theme.colors.Grey400};
    }

    & > button {
      position: absolute;
      bottom: 0;
      left: 0;

      width:100%;
      height: 5.4rem;
      margin-bottom: 4.4rem;

      background-color: ${({ theme }) => theme.colors.Blue};
      border: 0rem;
      border-radius: 0.4rem;

      ${({ theme }) => theme.fonts.Body1};
      color: ${({ theme }) => theme.colors.White};
    }

  `
};
