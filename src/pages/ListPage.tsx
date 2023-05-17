import styled from "styled-components";

import { IcSmallLine } from "../assets/icon/index";
import AddBox from "../components/List/AddBox";
import ProductBox from "../components/List/ProductBox";

const ListPage = () => {
  return (
    <St.ListWrapper>
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
      </St.ListBoxes>
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
    height: 100%;

    background-color: ${({ theme }) => theme.colors.Grey200};

  `,
  ListSetting : styled.section`
    display: flex;
    justify-content: space-between;

    padding: 0rem 35rem;
    margin-top: 8.8rem;
    
    width: 100%;
    
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

    text-align: center;
    color: ${({ theme }) => theme.colors.Grey400};

  `,
  ListBoxes : styled.section`

    width: 100%;

    background-color: red;
    
  `
}