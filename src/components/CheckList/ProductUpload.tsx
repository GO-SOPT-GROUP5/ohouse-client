import styled from 'styled-components';

const ProductUpload = () => {
  return <St.ProductUploadWrapper>매물 정보 등록 컴포넌트</St.ProductUploadWrapper>;
};

export default ProductUpload;

const St = {
  ProductUploadWrapper: styled.section`
    width: 99.8rem;
    height: 35.3rem;

    background-color: ${({ theme }) => theme.colors.White};
  `,
};
