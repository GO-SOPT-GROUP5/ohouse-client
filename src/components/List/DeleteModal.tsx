import React from "react";
import styled from "styled-components";

import { deleteProduct } from "../../lib/product";

export interface DeleteModalProps {
    selectedId : number;
    setUpdate : any;
    isDeleteShowing : boolean;
    handleToggle : React.MouseEventHandler;
}

const DeleteModal = ({ selectedId, setUpdate, isDeleteShowing, handleToggle }: DeleteModalProps) => {
    
    const handleDelete = async () => {
        await deleteProduct(selectedId);
        setUpdate((prev) => !prev); // DeleteModal에서 매물 삭제 시, 재정렬(리렌더링)되는 플로우 구현하기 위해 사용 
        console.log('삭제 완료');
    }


  return (
    <>
    {isDeleteShowing && (
        <St.DeleteModalWrapper>
            <St.DeleteModal>
                <St.Text>
                작성하신 내역을 삭제하시겠습니까?<br/>삭제 후에는 복구할 수 없습니다.
                </St.Text>
                <St.Buttons>
                    <St.RevokeBtn type="button" onClick={handleToggle}>취소</St.RevokeBtn>
                    <St.ConfirmBtn type="button" onClick={() => {
                        handleToggle();
                        handleDelete();
                    }}>확인</St.ConfirmBtn>
                </St.Buttons>
            </St.DeleteModal>
        </St.DeleteModalWrapper>
    )}
    </>
  )
}

export default DeleteModal

const St = {
    DeleteModalWrapper : styled.section`
        display: flex;
        justify-content: center;
        align-items: center;

        position: fixed;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-color: rgba(47, 52, 56, 0.4);

        z-index: 1;
    `,
    DeleteModal : styled.article`
        display: flex;
        flex-direction: column;
        align-items: center;

        position: relative;

        width: 42.8rem;
        padding: 2.3rem 2rem;
        
        border-radius: 0.9rem;
        background-color: ${({ theme }) => theme.colors.White};
        
    `,
    Text : styled.p`
        ${({ theme }) => theme.fonts.Body6};

        text-align: center;
    `,
    Buttons : styled.div`
        display: flex;
        gap:0.8rem;

        width: 100%;
        margin-top: 1.8rem;

        & > button {
            width: 100%;
            height: 4.8rem;

            border-radius: 0.4rem;
        }
        
    `,
    RevokeBtn : styled.button`
        border: 0.1rem solid ${({ theme }) => theme.colors.Grey300};;
        background-color: ${({ theme }) => theme.colors.White};
    `,
    ConfirmBtn : styled.button`
        background-color: ${({ theme }) => theme.colors.Blue};
        color: ${({ theme }) => theme.colors.White};
    `

}