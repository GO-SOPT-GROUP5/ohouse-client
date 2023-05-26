import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import Category from "../components/CheckList/Category";
import CheckListIndex from "../components/CheckList/CheckListIndex";
import ProductUpload from "../components/CheckList/ProductUpload";
import { getChecklistData } from "../lib/checklist";
import {
  clientSubCategoryIdState,
  productDataState,
  subCategoryIdState
} from "../recoil/atom";
import { productData, subCategoryIdInfo } from "../types/category";

const CheckListEditPage = () => {
  const { checklistId } = useParams();
  const [subCategoryId, setSubCategoryId] = useRecoilState<subCategoryIdInfo[]>(subCategoryIdState);
  const [productData, setProductData] = useRecoilState<productData>(productDataState);
  const [clientSubCategoryId, setClientSubCategoryId] =
    useRecoilState<categoryIdList[]>(clientSubCategoryIdState);

  const fetchSubCategoryId = () => {
    const { indoor, kitchen, livingRoom, bathroom } = productData.checkListData;

    const updatedState = clientSubCategoryId.map(item => {
      let fetchedId, state;

      switch (item.name) {
        case 'SUNLIGHT':
          fetchedId = indoor[0].id;
          state = indoor[0].state;
          break;
        case 'LEAK':
          fetchedId = indoor[1].id;
          state = indoor[1].state;
          break;
        case 'HEATING':
          fetchedId = indoor[2].id;
          state = indoor[2].state;
          break;
        case 'SINK_DRAIN':
          fetchedId = kitchen[0].id;
          state = kitchen[0].state;
          break;
        case 'SINK_PRESSURE':
          fetchedId = kitchen[1].id;
          state = kitchen[1].state;
          break;
        case 'WALLPAPER':
          fetchedId = livingRoom[0].id;
          state = livingRoom[0].state;
          break;
        case 'FLOOR':
          fetchedId = livingRoom[1].id;
          state = livingRoom[1].state;
          break;
        case 'BALCONY':
          fetchedId = livingRoom[2].id;
          state = livingRoom[2].state;
          break;
        case 'WASHSTAND_STATUS':
          fetchedId = bathroom[0].id;
          state = bathroom[0].state;
          break;
        case 'WASHSTAND_DRAIN':
          fetchedId = bathroom[1].id;
          state = bathroom[1].state;
          break;
        case 'WASHSTAND_PRESSURE':
          fetchedId = bathroom[2].id;
          state = bathroom[2].state;
          break;
        case 'MOLD':
          fetchedId = bathroom[3].id;
          state = bathroom[3].state;
          break;
        case 'TOILET':
          fetchedId = bathroom[4].id;
          state = bathroom[4].state;
          break;
        default:
          fetchedId = null;
          state = null;
      }

      return { ...item, fetchedId, state };
    });

    setClientSubCategoryId(updatedState);
  };
  const getChecklist = async () => {
    try {
      if (checklistId) {
        const result = await getChecklistData(Number(checklistId));
        if (result) {
          setProductData(result);
        }
        return result?.checkListData;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateSubCategoryId = () => {
    if (productData.checkListData) {
      const { indoor, kitchen, livingRoom, bathroom } = productData.checkListData;

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
      subCategoryId;
    }
  };

  useEffect(() => {
    if (productData.checkListData) {
      fetchSubCategoryId();
    }
  }, [productData.checkListData, setClientSubCategoryId]);

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

export default CheckListEditPage;

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
