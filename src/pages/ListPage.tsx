import React, { useEffect, useState } from "react";
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
  const CATEGORY = {
    '전체':'',
    '월세':'MONTHLY', 
    '전세':'JEONSE', 
    '매매':'SALE'
  };
  const FILTER = {
    '필터':'NEWEST', 
    '별점순':'GRADE', 
    '좋아요순':'LIKE'
  };
  
  const {isShowing, toggle, isDeleteShowing, deleteToggle} = useModal();
  const [productInfo, setProductInfo] = useState([]);

  const [flag, setFlag] = useState('');
  const [sort, setSort] = useState('NEWEST');
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  // 이친구들은 나중에 무한 스크롤 구현 시 만져줄 예정!

  const [selectedId, setSelectedId] = useState(); // 사용자가 '더보기'버튼을 클릭한 매물의 id -> 이건 나중에 recoil로 관리...
  const [update, setUpdate] = useState(false);  
  
  useEffect(() => {
    handleGetInfo();
  }, [flag,sort, update])

  async function handleGetInfo() {
    const productList = await getProductData({flag:flag,sort:sort,page:page,size:size});
    setProductInfo(productList);
  }

  const handleCategory = (e: React.MouseEvent<HTMLElement>) => {
    setFlag(e.currentTarget.id);
  }

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSort(e.currentTarget.value);
  }

  return (
    <St.ListWrapper>
      <DeleteModal selectedId={selectedId} setUpdate={setUpdate} isDeleteShowing={isDeleteShowing} handleToggle={deleteToggle}/>
      <MoreModal isShowing={isShowing} handleClose={toggle} handleDelete={deleteToggle}/>
      <section>
        <St.ListSetting>
          <St.ListCategory>
            {Object.keys(CATEGORY).map((el)=><><span id={CATEGORY[el]} onClick={handleCategory}>{el}</span><IcSmallLine/></>)}
          </St.ListCategory>
          <St.ListCombobox onChange={handleFilter}>
            {Object.keys(FILTER).map((el)=><option value={FILTER[el]}>{el}</option>)}
          </St.ListCombobox>
        </St.ListSetting>
        <St.ListBoxes>
          <AddBox />
          {productInfo.map((info : productResponse)=>
            <ProductBox
              setSelectedId={setSelectedId}
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

      cursor: pointer;
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
    margin-bottom: 8rem;
  `
}