import styled from "styled-components";

import { IcSmallLine } from "../assets/icon/index";
import AddBox from "../components/List/AddBox";
import MoreModal from "../components/List/MoreModal";
import ProductBox from "../components/List/ProductBox";
import useModal from "../hooks/useModal";

const ListPage = () => {
  const category = ['전체', '월세', '전세', '매매'];
  const filter = ['필터', '별점순', '좋아요순'];
  
  const {isShowing, toggle} = useModal();

  return (
    <St.ListWrapper>
      <MoreModal isShowing={isShowing} handleClose={toggle}/>
      <section>
        <St.ListSetting>
          <St.ListCategory>
            {category.map((el)=><><span>{el}</span><IcSmallLine/></>)}
          </St.ListCategory>
          <St.ListCombobox>
            {filter.map((el)=><option>{el}</option>)}
          </St.ListCombobox>
        </St.ListSetting>
        <St.ListBoxes>
          <AddBox />
          <ProductBox toggle={toggle}/>
          <ProductBox />
          <ProductBox />
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