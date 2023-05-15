import styled from 'styled-components';

const ProductBox = () => {
  return <St.ProductBoxWrapper>매물 Box 컴포넌트입니다!</St.ProductBoxWrapper>;
};

export default ProductBox;

const St = {
  ProductBoxWrapper: styled.article`
    width: 39.3rem;

    background-color: ${({ theme }) => theme.colors.White};
    color: ${({ theme }) => theme.colors.Grey600};
    ${({ theme }) => theme.fonts.Body1};
  `,
};
