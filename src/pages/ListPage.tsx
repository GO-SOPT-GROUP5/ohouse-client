import styled from "styled-components";

import AddBox from "../components/List/AddBox";
import ProductBox from "../components/List/ProductBox";

const ListPage = () => {
  return (
    <St.ListWrapper>
      <AddBox />
      <ProductBox />
    </St.ListWrapper>
  );
};

export default ListPage;

const St = {
  ListWrapper : styled.section`
    
    width: 100%;
    height: 100%;

    background-color: ${({ theme }) => theme.colors.Grey200};

  `
}