import styled from "styled-components";

import { IcStar } from "../../assets/icon";
import { ImgRoom1 } from "../../assets/image";

const ProductBox = () => {
  return (
  <St.ProductBoxWrapper>
    <ImgRoom1/>
    <St.ProductTitle>2023.05.10 12:11 등록매물</St.ProductTitle>
    <St.ProductScore>
      좋음 9 · 보통 3 · 나쁨 1
    </St.ProductScore>
    <St.ProductStar>
      <IcStar/><span>4</span>
    </St.ProductStar>
    <St.ProductButtons>
      <button type="button">체크리스트 내역 보기</button>
      <button type="button">...</button>
    </St.ProductButtons>

    
  </St.ProductBoxWrapper>
  );
};

export default ProductBox;

const St = {
  ProductBoxWrapper : styled.article`
    height: 42.3rem;
    padding: 2.9rem 2.5rem;

    position: relative;

    background-color: ${({ theme }) => theme.colors.White};
    border-radius: 0.9rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  `,
  ProductTitle : styled.header`
    margin-top: 4.4rem;

    ${({ theme }) => theme.fonts.Body1};
  `,
  ProductScore : styled.p`
    margin-top: 0.6rem;

    /* 폰트 임의 지정 */
    color: ${({ theme }) => theme.colors.Grey400};
    ${({ theme }) => theme.fonts.Body6}; 
  `,
  ProductStar : styled.span`
    position: absolute;
    right: 2.9rem;
    bottom: 9.4rem;
    
    & > span {
      ${({ theme }) => theme.fonts.Body2};
    }
  `,
  ProductButtons : styled.section`
      display:grid;
      grid-template-columns: 28.7rem 4.2rem;
      grid-gap: 0.7rem;

      height: 4.2rem;
      margin-top: 3rem;

    & > button {
      
      background-color: ${({ theme }) => theme.colors.White};
      border: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
      border-radius: 0.4rem;

      ${({ theme }) => theme.fonts.Body5};
    }
    
  `
}