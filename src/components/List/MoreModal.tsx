import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { IcBack } from '../../assets/icon';

export interface ModalProps {
  selectedId: number;
  isShowing: boolean;
  handleClose: React.MouseEventHandler;
  handleDelete: React.MouseEventHandler;
}

const MoreModal = ({ selectedId, isShowing, handleClose, handleDelete }: ModalProps) => {
  const navigate = useNavigate();

    return (
    <>
      {isShowing && (
        <St.ListModalWrapper>
          <St.ListModal>
            <St.Header>더보기</St.Header>
            <St.CloseBtn onClick={handleClose}>
              <IcBack />
            </St.CloseBtn>
            <St.ModalBtn
              type="button"
              onClick={() => {
                navigate(`/checklist/${selectedId}/edit`);
              }}
            >
              수정하기
            </St.ModalBtn>
            <St.ModalBtn
              type="button"
              onClick={() => {
                handleDelete();
                handleClose();
              }}
            >
              삭제하기
            </St.ModalBtn>
          </St.ListModal>
        </St.ListModalWrapper>
      )}
    </>
  );
};

export default MoreModal;

const St = {
  ListModalWrapper: styled.section`
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
  ListModal: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    position: relative;

    width: 42.8rem;
    height: 20.2rem;
    padding: 2.3rem 1.7rem 2.8rem 1.7rem;

    border-radius: 0.9rem;
    background-color: ${({ theme }) => theme.colors.White};
  `,
  Header: styled.h1`
    margin-bottom: 0.8rem;

    ${({ theme }) => theme.fonts.Title3};
  `,
  CloseBtn: styled.i`
    position: absolute;
    top: 0;
    right: 0;

    margin: 2.4rem 2.7rem;

    cursor: pointer;
  `,
  ModalBtn: styled.button`
    width: 100%;
    height: 4.8rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
    border-radius: 0.4rem;

    ${({ theme }) => theme.fonts.Body4};
  `,
};
