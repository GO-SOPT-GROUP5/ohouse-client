import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import Category from '../components/CheckList/Category';
import CheckListIndex from '../components/CheckList/CheckListIndex';
import ProductUpload from '../components/CheckList/ProductUpload';
import { SKELETON_CHECKLIST } from '../constants/skeletonCheckList';
import { postCheckListData } from '../lib/category';
import { productDataState } from '../recoil/atom';
import ErrorPage from './ErrorPage';

const CheckListPage = () => {
  const setProduct = useSetRecoilState(productDataState);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const postCheckList = async () => {
      const { data, isError } = await postCheckListData(SKELETON_CHECKLIST);
      setProduct(prevValue => ({
        ...prevValue,
        id: data.id,
        title: data.title,
      }));
      if (isError) {
        setIsError(true);
      }
    };
    postCheckList();
  }, []);

  if (isError) {
    navigate('/error');
  }
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
