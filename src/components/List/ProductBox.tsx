import styled from "styled-components";

const ProductBox = () => {
  return <St.ProductBoxWrapper>매물 Box 컴포넌트입니다!</St.ProductBoxWrapper>;
};

export default ProductBox;

const St = {
  ProductBoxWrapper : styled.article`
      height: 42.3rem;

      background-color: ${({ theme }) => theme.colors.White};
      border-radius: 0.9rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  `
}