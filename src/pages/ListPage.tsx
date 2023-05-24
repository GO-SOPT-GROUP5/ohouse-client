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
  const CATEGORY = {
    '전체':'',
    '월세':'MONTHLY', 
    '전세':'JEONSE', 
    '매매':'SALE'
  };
  const FILTER = ['필터', '별점순', '좋아요순'];
  
  const {isShowing, toggle, isDeleteShowing, deleteToggle} = useModal();
  const [productInfo, setProductInfo] = useState([]);

  const [flag, setFlag] = useState('');
  const [sort, setSort] = useState('NEWEST');
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);

  useEffect(() => {
    handleGetInfo();
  }, [])

  async function handleGetInfo() {
    const productList = await getProductData({flag:flag,sort:sort,page:page,size:size});
    setProductInfo(productList);
    console.log(productList);
  }

  // 여기 타입스크립트로 다 하고 싶은데 대체 이런 e 요런애들 정확한 타입 어케 아나요....... 마우스 올려도 any만 떠요... 
  const handleCategory = (e) => {
    console.log(e.currentTarget.id);
  }

  return (
    <St.ListWrapper>
      <DeleteModal isDeleteShowing={isDeleteShowing} handleToggle={deleteToggle}/>
      <MoreModal isShowing={isShowing} handleClose={toggle} handleDelete={deleteToggle}/>
      <section>
        <St.ListSetting>
          <St.ListCategory>
            {Object.keys(CATEGORY).map((el)=><><span id={CATEGORY[el]} onClick={handleCategory}>{el}</span><IcSmallLine/></>)}
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
  `
}