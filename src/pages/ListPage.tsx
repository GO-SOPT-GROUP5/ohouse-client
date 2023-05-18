import styled from "styled-components";

import { IcSmallLine } from "../assets/icon/index";
import AddBox from "../components/List/AddBox";
import ProductBox from "../components/List/ProductBox";

const ListPage = () => {
  return (
    <St.ListWrapper>
      <section>
        <St.ListSetting>
          <St.ListCategory>
            <span>전체</span>
            <IcSmallLine/>
            <span>월세</span>
            <IcSmallLine/>
            <span>전세</span>
            <IcSmallLine/>
            <span>매매</span>
          </St.ListCategory>
          <St.ListCombobox>
            <option>필터</option>
            <option>별점순</option>
            <option>좋아요순</option>
          </St.ListCombobox>
        </St.ListSetting>
        <St.ListBoxes>
          <AddBox />
          <ProductBox />
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