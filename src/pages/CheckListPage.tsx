import styled from 'styled-components';

import Category from '../components/CheckList/Category';
import ProductUpload from '../components/CheckList/ProductUpload';

const CheckListPage = () => {
  return (
    <St.CheckListPageWrapper>
      <ProductUpload />
      <Category />
    </St.CheckListPageWrapper>
  );
};

export default CheckListPage;

const St = {
  CheckListPageWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-top: 9.2rem;
    padding-bottom: 18.3rem;

    background-color: ${({ theme }) => theme.colors.Grey200};
  `,
};
