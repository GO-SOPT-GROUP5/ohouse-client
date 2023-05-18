import styled from "styled-components";

import { IcStar } from "../../assets/icon";
import { ImgRoom1 } from "../../assets/image";

const ProductBox = () => {
  return (
  <St.ProductBoxWrapper>
    <ImgRoom1/>
    <St.ProductTitle>2023.05.10 12:11 등록매물</St.ProductTitle>
    <St.ProductScore>
      <span>
        좋음<span>9</span>
      </span>
      <span>
        · 보통<span>3</span>
      </span>
      <span>
        · 나쁨<span>1</span>
      </span>
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
    position: relative;

    height: 42.3rem;
    padding: 2.9rem 2.5rem;

    border-radius: 0.9rem;
    background-color: ${({ theme }) => theme.colors.White};
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.15);
  `,
  ProductTitle : styled.header`
    margin-top: 4.4rem;

    ${({ theme }) => theme.fonts.Body1};
  `,
  ProductScore : styled.p`
    margin-top: 0.6rem;

    color: ${({ theme }) => theme.colors.Grey400};
    
    & span {
      ${({ theme }) => theme.fonts.Body6}; 
    }
    
    & > span > span {
      margin: 0rem 0.4rem;
    }
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
      justify-content: space-between;
      
      height: 4.2rem;
      margin-top: 3rem;

    & > button {
      border: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
      border-radius: 0.4rem;
      background-color: ${({ theme }) => theme.colors.White};
      ${({ theme }) => theme.fonts.Body5};
    }
    
  `
}