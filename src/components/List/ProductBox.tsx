import React from "react";
import styled from "styled-components";

import { IcListStar, IcMore } from "../../assets/icon";
import { productResponse } from "../../types/product";

export interface ProductBoxProps {
  setSelectedId : any;
  handleModal : React.MouseEventHandler;
  productResponse : productResponse;
}

const ProductBox = ({setSelectedId, handleModal, productResponse} : ProductBoxProps) => {
  
  const {id,grade,good,average,bad,title,image} = productResponse;
  
  return (
  <St.ProductBoxWrapper>
    { image==='' || image===null || image==="string" ?
      <St.Empty>No Image</St.Empty> :
      <img src={image} alt="매물 이미지"/>
    }
    <St.ProductTitle>{title}</St.ProductTitle>
    <St.ProductScore>
      <span>
        좋음<span>{good}</span>
      </span>
      <span>
        · 보통<span>{average}</span>
      </span>
      <span>
        · 나쁨<span>{bad}</span>
      </span>
    </St.ProductScore>
    <St.ProductStar>
      <IcListStar/><span>{grade}</span>
    </St.ProductStar>
    <St.ProductButtons>
      <button type="button">체크리스트 내역 보기</button>
      <button type="button" onClick={() => {
        handleModal();
        setSelectedId(id);  
      }}><IcMore/></button>
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

    & > img {
      width: 34.4rem;
      height: 20.4rem;

      border-radius: 1rem;
    }
  `,
  Empty : styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 34.4rem;
    height: 20.4rem;
    
    background-color: ${({ theme }) => theme.colors.Grey200};
    ${({ theme }) => theme.fonts.Body3};
    color: ${({ theme }) => theme.colors.Grey400};
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

    & > button:nth-child(2) {
      padding-bottom: 0.8rem;
    }
    
  `
}