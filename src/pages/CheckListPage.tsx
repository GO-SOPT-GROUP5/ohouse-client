import { useEffect } from 'react';
import styled from 'styled-components';

import Category from '../components/CheckList/Category';
import CheckListIndex from '../components/CheckList/CheckListIndex';
import ProductUpload from '../components/CheckList/ProductUpload';
import { SKELETON_CHECKLIST } from '../constants/skeletonCheckList';
import { postCheckListData } from '../lib/category';

const CheckListPage = () => {
  useEffect(() => {
    const postCheckList = async () => {
      const data = await postCheckListData(SKELETON_CHECKLIST);
      console.log(data.id);
    };
    postCheckList();
  }, []);

  return (
    <St.CheckListPageWrapper>
      <ProductUpload />
      <St.CheckListWarpper>
        <Category />
        <CheckListIndex />
      </St.CheckListWarpper>
    </St.CheckListPageWrapper>
  );
};

export default CheckListPage;

const St = {
  CheckListPageWrapper: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-top: 9.2rem;
    padding-bottom: 18.3rem;

    background-color: ${({ theme }) => theme.colors.Grey200};
  `,

  CheckListWarpper: styled.section`
    display: flex;
    gap: 1.7rem;

    margin-top: 1.5rem;
  `,
};
