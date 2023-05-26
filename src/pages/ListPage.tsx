import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import { IcSmallLine } from "../assets/icon/index";
import AddBox from "../components/List/AddBox";
import ProductBox from "../components/List/ProductBox";
import { client } from "../lib/axios";
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

  
  const [productInfo, setProductInfo] = useState([]);

  const [flag, setFlag] = useState('');
  const [sort, setSort] = useState('NEWEST');
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);

  const [update, setUpdate] = useState(false);  
  
  useEffect(() => {
    handleGetInfo();
  }, [flag, sort, update])

  const handleGetInfo = async () => {
    const productList = await getProductData({flag:flag,sort:sort,page:page,size:size});
    setProducts(productList);
  }

  const handleCategory = (e: React.MouseEvent<HTMLElement>) => {
    setFlag(e.currentTarget.id);
  }

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSort(e.currentTarget.value);
  }



  const [ref, inView] = useInView();
  const [products, setProducts] = useState([]);

   // 무한 스크롤
  const productFetch = () => {
    const query = flag === ''?
    `/checklist/list?page=${page}&size=${size}&sort=${sort}` :
    `/checklist/list?flag=${flag}&sort=${sort}&page=${page}&size=${size}`;

    client.get(query)
    .then((res : any) => {
      setProducts([...products, ...res.data.data])
      page===0 ?
        setPage((page : number) => page + 5) :
        setPage((page : number) => page + 6)
      if(size===5) {setSize(6)}

    })
    .catch((err : any) => {console.log(err)});
  };

  useEffect(() => {
    if (inView) {
      console.log(inView, '무한 스크롤 요청 🎃')
      console.log(page,size)

	  // 실행할 함수
      productFetch();
    }
    
  }, [inView]);

  return (
    <St.ListWrapper>
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
          <AddBox/>
          {products.map((info : productResponse)=>
            <ProductBox
              setUpdate={setUpdate}
              productResponse={info}
            />
          )}
        </St.ListBoxes>
      </section>
      <div ref={ref}></div>
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
    min-height: 100vh;

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

    & > article:first-child > svg {
      cursor: pointer;
    }
  `
}