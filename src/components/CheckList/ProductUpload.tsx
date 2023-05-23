import { useState } from 'react';
import styled from 'styled-components';

import { IcCamera, IcEdit, IcStar } from '../../assets/icon';
import useModal from '../../hooks/useModal';
import ProductEditModal from './ProductEditModal';

const ProductUpload = () => {
  const { isShowing, toggle } = useModal();
  const [comment, setComment] = useState('');

  const handleConfirm = () => {
    toggle();
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return (
    <St.ProductUploadWrapper>
      <St.ProductName>2023.01.10 12:11 등록매물</St.ProductName>
      <St.Address>주소를 등록해주세요</St.Address>
      <St.EditBtn type="button" onClick={toggle}>
        <IcEdit />
      </St.EditBtn>
      <ProductEditModal isShowing={isShowing} handleHide={toggle} handleConfirm={handleConfirm} />
      <St.ProductInfo>
        <St.UploadPicture type="button">
          <IcCamera />
          <p>사진 올리기</p>
        </St.UploadPicture>
        <St.ProductDetail>
          <St.ProductTag>
            <li>월세</li>
            <li>1000/50</li>
            <li>30평</li>
          </St.ProductTag>
          <St.Grade>
            <IcStar />
            <IcStar />
            <IcStar />
            <IcStar />
            <IcStar />
          </St.Grade>
          <St.Description
            type="string"
            value={comment}
            placeholder="집의 상태, 주변환경, 가격 등을 고려해서 한 줄 평가를 입력해주세요."
            onChange={handleCommentChange}
          ></St.Description>
        </St.ProductDetail>
      </St.ProductInfo>
    </St.ProductUploadWrapper>
  );
};

export default ProductUpload;

const St = {
  ProductUploadWrapper: styled.section`
    position: relative;

    width: 99.8rem;
    height: 35.3rem;
    padding: 3.7rem 3.3rem 3.6rem 4.4rem;

    background-color: ${({ theme }) => theme.colors.White};
  `,

  ProductName: styled.p`
    margin-bottom: 1.1rem;

    ${({ theme }) => theme.fonts.Title3};
  `,

  Address: styled.p`
    margin-bottom: 2.9rem;

    color: ${({ theme }) => theme.colors.Grey300};
    ${({ theme }) => theme.fonts.Body4};
  `,

  EditBtn: styled.button`
    position: absolute;
    top: 3.5rem;
    right: 3.3rem;

    border: none;
    background: transparent;
  `,

  ProductInfo: styled.article`
    display: flex;
    gap: 5.4rem;
  `,

  ProductDetail: styled.div`
    display: flex;
    flex-direction: column;
  `,

  UploadPicture: styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    width: 31rem;
    height: 18.6rem;
    margin-top: 1.2rem;

    border: none;
    border-radius: 1.1rem;
    background-color: ${({ theme }) => theme.colors.Grey200};

    & > p {
      color: ${({ theme }) => theme.colors.Grey500};
      ${({ theme }) => theme.fonts.Body4};
    }
  `,

  ProductTag: styled.ul`
    display: flex;
    gap: 1rem;

    margin-bottom: 1.2rem;

    & > li {
      padding: 0.7rem 2.3rem;
      height: 3.9rem;

      border: 0.2rem solid ${({ theme }) => theme.colors.Blue};
      border-radius: 3.9rem;
      color: ${({ theme }) => theme.colors.Blue};
      ${({ theme }) => theme.fonts.Body2};
    }
  `,

  Grade: styled.div`
    margin-bottom: 2.7rem;
  `,

  Description: styled.input`
    width: 55.4rem;
    height: 5.6rem;
    padding: 1.5rem 2.5rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
    border-radius: 0.4rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.Grey300};
      ${({ theme }) => theme.fonts.Body2};
    }

    & > p {
      color: ${({ theme }) => theme.colors.Grey600};
      ${({ theme }) => theme.fonts.Body2};
    }
  `,
};
