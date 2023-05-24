import { useEffect, useState } from "react";
import styled from "styled-components";

import { IcSmallLine } from "../assets/icon/index";
import AddBox from "../components/List/AddBox";
import DeleteModal from "../components/List/DeleteModal";
import MoreModal from "../components/List/MoreModal";
import ProductBox from "../components/List/ProductBox";
import useModal from "../hooks/useModal";
import { getProductData } from "../lib/product";
import { productResponse } from "../types/product";

const ListPage = () => {
  const CATEGORY = ['전체', '월세', '전세', '매매'];
  const FILTER = ['필터', '별점순', '좋아요순'];
  
  const {isShowing, toggle, isDeleteShowing, deleteToggle} = useModal();
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    handleGetInfo();
  }, [])

  async function handleGetInfo() {
    const productList = await getProductData({flag:'전체',order:'GRADE',page: 0,size: 5});
    setProductInfo(productList);
  }

  return (
    <St.ListWrapper>
      <DeleteModal isDeleteShowing={isDeleteShowing} handleToggle={deleteToggle}/>
      <MoreModal isShowing={isShowing} handleClose={toggle} handleDelete={deleteToggle}/>
      <section>
        <St.ListSetting>
          <St.ListCategory>
            {CATEGORY.map((el)=><><span>{el}</span><IcSmallLine/></>)}
          </St.ListCategory>
          <St.ListCombobox>
            {FILTER.map((el)=><option>{el}</option>)}
          </St.ListCombobox>
        </St.ListSetting>
        <St.ListBoxes>
          <AddBox />
          {productInfo.map((info : productResponse)=>
            <ProductBox
              handleModal={toggle}
              productResponse={info}
            />
          )}
        </St.ListBoxes>
      </section>
    </St.ListWrapper>
  );
};

export default ListPage;


const St = {
  ListWrapper : styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;

    background-color: ${({ theme }) => theme.colors.Grey200};
  `,
  ListSetting : styled.section`
    display: flex;
    justify-content: space-between;

    width: 100%;
    margin-top: 8.8rem;
  `,
  ListCategory : styled.article`
    display: flex;
    align-items: center;
    gap: 2rem;

    color: ${({ theme }) => theme.colors.Grey400};

    & > span {
      ${({ theme }) => theme.fonts.Body4};
    }

    & > svg:last-child {
      display: none;
    }
  `,
  ListCombobox : styled.select`
    width: 11.7rem;
    height: 3.4rem;

    border: 0rem;
    color: ${({ theme }) => theme.colors.Grey400};

    text-align: center;
  `,
  ListBoxes : styled.section`
    display:grid;
    grid-template-columns: repeat(3, 39.3rem);
    grid-gap: 2rem;
    justify-content: center;

    width: 100%;
    margin-top: 2.2rem;
  `
}