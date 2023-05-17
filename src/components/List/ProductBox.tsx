import styled from "styled-components";

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

      background-color: ${({ theme }) => theme.colors.White};
      border-radius: 0.9rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  `,
  ProductTitle : styled.header`
    ${({ theme }) => theme.fonts.Body1};
  `,
  ProductScore : styled.p`
    /* 폰트 임의 지정 */
    color: ${({ theme }) => theme.colors.Grey400};
    ${({ theme }) => theme.fonts.Body6}; 
  `,
  ProductStar : styled.span`
    
  `,
  ProductButtons : styled.section`
    
  `
}