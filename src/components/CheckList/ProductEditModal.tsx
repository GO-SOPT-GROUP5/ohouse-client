import React from 'react';
import styled from 'styled-components';

export interface ModalProps {
  isShowing: boolean;
  handleHide: React.MouseEventHandler;
  handleConfirm: React.MouseEventHandler;
}

const ProductEditModal = (props: ModalProps) => {
  const { isShowing, handleHide, handleConfirm } = props;
  return <>{isShowing && <St.ModalWrapper></St.ModalWrapper>}</>;
};

export default ProductEditModal;

const St = {
  ModalWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(47, 52, 56, 0.4);
  `,

  Modal: styled.section``,
};
