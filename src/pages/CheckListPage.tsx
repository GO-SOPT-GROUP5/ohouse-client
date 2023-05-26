import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import Category from '../components/CheckList/Category';
import CheckListIndex from '../components/CheckList/CheckListIndex';
import ProductUpload from '../components/CheckList/ProductUpload';
import { getChecklistData } from '../lib/checklist';
import { productDataState, subCategoryIdState } from '../recoil/atom';
import { productData, subCategoryIdInfo } from '../types/category';

const CheckListPage = () => {
  const { checklistId } = useParams();
  const [subCategoryId, setSubCategoryId] = useRecoilState<subCategoryIdInfo[]>(subCategoryIdState);
  const [productData, setProductData] = useRecoilState<productData>(productDataState);

  const getChecklist = async () => {
    try {
      if (checklistId) {
        const result = await getChecklistData(Number(checklistId));
        if (result) {
          setProductData(result);
        }
        console.log(result);
        return result?.checkListData;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateSubCategoryId = () => {
    if (productData.checkListData) {
      const { indoor, kitchen, livingRoom, bathroom } = productData.checkListData;

      console.log(productData.checkListData);

      const updatedSubCategoryId = {
        SUNLIGHT: indoor[0].id,
        LEAK: indoor[1].id,
        HEATING: indoor[2].id,
        SINK_DRAIN: kitchen[0].id,
        SINK_PRESSURE: kitchen[1].id,
        WALLPAPER: livingRoom[0].id,
        FLOOR: livingRoom[1].id,
        BALCONY: livingRoom[2].id,
        WASHSTAND_STATUS: bathroom[0].id,
        WASHSTAND_DRAIN: bathroom[1].id,
        WASHSTAND_PRESSURE: bathroom[2].id,
        MOLD: bathroom[3].id,
        TOILET: bathroom[4].id,
      };

      setSubCategoryId([updatedSubCategoryId]);
      console.log(subCategoryId);
    }
  };

  useEffect(() => {
    if (productData.checkListData) {
      updateSubCategoryId();
    }
  }, [productData.checkListData, setSubCategoryId]);

  useEffect(() => {
    if (checklistId && productData.id !== Number(checklistId)) {
      getChecklist();
    }
  }, [checklistId, productData.id]);

  return (
    <St.CheckListPageWrapper>
      <ProductUpload />
      <St.CheckListWarpper>
        <Category />
        <CheckListIndex checklistId={Number(checklistId)} />
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
