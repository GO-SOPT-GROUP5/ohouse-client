import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Category from '../components/CheckList/Category';
import CheckListIndex from '../components/CheckList/CheckListIndex';
import ProductUpload from '../components/CheckList/ProductUpload';
import { getChecklistData } from '../lib/checklist';

const CheckListPage = () => {
  const { checklistId } = useParams();

  const getChecklist = async () => {
    try {
      if (checklistId) {
        const result = await getChecklistData(Number(checklistId));
        console.log(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getChecklist();
    // getChecklist에서 받아온 데이터 리코일에 저장
  }, [checklistId]);

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
