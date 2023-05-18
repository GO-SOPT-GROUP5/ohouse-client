import "swiper/css/bundle";

import styled from "styled-components";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { IcLeft, IcRight } from "../../assets/icon";
import {
  ImgExplanation1,
  ImgExplanation2,
  ImgExplanation3,
  ImgExplanation4,
  ImgExplanation5
} from "../../assets/image/index";

const Help = () => {
  const swiper = useSwiper();
  
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
          <SwiperSlide>
            <h1>집보며 하나하나 적기 힘드셨죠?<br/>이젠 쉽게 체크 하세요</h1>
            <p>집 볼때 꼭 체크해야하는 핵심만 모아놨어요</p>
            <ImgExplanation1/>
          </SwiperSlide>
          <SwiperSlide>
            <h1>기존의 기록 방식과 비교했을 때<br/>이런 점이 편해요</h1>
            <ImgExplanation2/>
          </SwiperSlide>
          <SwiperSlide>
            <h1>나에게 맞는 항목을<br/>선택해서 평가하세요</h1>
            <ImgExplanation3/>
          </SwiperSlide>
          <SwiperSlide>
            <h1>선택한 항목을 빠르게<br/>체크하세요</h1>
            <p>체크뿐만 아니라 간단한 메모, 사진 첨부도 가능해요</p>
            <ImgExplanation4/>
          </SwiperSlide>
          <SwiperSlide>
            <h1>체크 후 요약정보로<br/>평가 내역을 확인하세요</h1>
            <ImgExplanation5/>
          </SwiperSlide>
        </Swiper>
          <button type='button' onClick={() => swiper.slideNext()}>새로운 매물 등록하기</button>
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

    & h1 {
      margin-top: 4.3rem;

      ${({ theme }) => theme.fonts.Title1};
      color: ${({ theme }) => theme.colors.Grey600};
    }

    & p {
      margin-top: 1.2rem;

      ${({ theme }) => theme.fonts.Body3};
      color: ${({ theme }) => theme.colors.Grey400};
    }

    & svg {
      margin-top: 5rem;
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
