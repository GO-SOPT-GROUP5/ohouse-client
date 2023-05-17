import styled from "styled-components";

import AddBox from "../components/List/AddBox";
import ProductBox from "../components/List/ProductBox";

const ListPage = () => {
  return (
    <St.ListWrapper>
      <St.ListSetting>
        <St.ListCategory>
          전체 | 월세
        </St.ListCategory>
        <St.ListCombobox>
          전체
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

    width: 100%;
    height: 3.4rem;

    background-color: black;
    
  `,
  ListCategory : styled.article`
    
  `,
  ListCombobox : styled.select`
    
  `,
  ListBoxes : styled.section`

    width: 100%;

    background-color: red;
    
  `
}