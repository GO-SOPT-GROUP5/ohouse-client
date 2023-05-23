import React from "react";
import styled from "styled-components";

export interface ModalProps {
    isShowing : boolean;
}

const MoreModal = ({ isShowing }: ModalProps) => {
    

  return (
    <St.ListModalWrapper>
        <St.ListModal>
            <p>더보기</p>
            <i>X</i>
            <button type="button">수정하기</button>
            <button type="button">삭제하기</button>
        </St.ListModal>
    </St.ListModalWrapper>
  )
}

export default MoreModal

const St = {
    ListModalWrapper : styled.section`
    
    `,
    ListModal : styled.article`
        
    `,

}