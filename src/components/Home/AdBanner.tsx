import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useRef } from 'react';
import { styled } from 'styled-components';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IcLeftSmall, IcRightSmall } from '../../assets/icon';
import { ImgBanner1, ImgBanner2, ImgBanner3, ImgBanner4, ImgBanner5 } from '../../assets/image';

const AdBanner = () => {
  SwiperCore.use([Autoplay, Pagination]);
  const swiperRef = useRef();

  const BANNER_LIST = [
    <ImgBanner1 />,
    <ImgBanner2 />,
    <ImgBanner3 />,
    <ImgBanner4 />,
    <ImgBanner5 />,
  ];

  return (
    <St.BannerWrapper>
      <St.Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
      >
        {BANNER_LIST.map((banner, index) => (
          <SwiperSlide key={index}>{banner}</SwiperSlide>
        ))}
      </St.Swiper>
      <St.BtnWrapper>
        <St.SwiperBtn type="button" onClick={() => swiperRef.current.slidePrev()}>
          <IcLeftSmall />
        </St.SwiperBtn>
        <St.SwiperBtn type="button" onClick={() => swiperRef.current.slideNext()}>
          <IcRightSmall />
        </St.SwiperBtn>
      </St.BtnWrapper>
    </St.BannerWrapper>
  );
};

export default AdBanner;

const St = {
  BannerWrapper: styled.div`
    display: flex;
    align-items: center;

    position: relative;

    width: fit-content;
    margin: auto;
  `,
  Swiper: styled(Swiper)`
    width: 121.6rem;

    & > .swiper-button-next::after,
    .swiper-button-prev::after {
      display: none;
    }
    //오늘의 집 보고 임의로 하얀색. indicator 넣으실건지 답변 오시면 수정 필요 ~
    & .swiper-pagination-bullet {
      background: transparent !important;
    }
  `,
  BtnWrapper: styled.div`
    display: flex;
    justify-content: space-between;

    position: absolute;
    top: 50%;
    left: -3rem;
    transform: translate(0, -50%);

    width: 128rem;

    z-index: 10;
  `,
  SwiperBtn: styled.button`
    width: fit-content;
    padding: 0;

    border: none;
    background: transparent;
    font-size: 0;
    line-height: 0;
  `,
};
