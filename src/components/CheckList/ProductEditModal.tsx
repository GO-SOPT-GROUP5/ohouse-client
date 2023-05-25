import React, { useState } from 'react';
import Postcode from 'react-daum-postcode';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { IcAddress, IcCancel } from '../../assets/icon';
import { productDataState } from '../../recoil/atom';
import ProductContract from './ProductContract';

interface AddressData {
  address: string;
}

interface ModalProps {
  isShowing: boolean;
  handleHide: React.MouseEventHandler;
}

const ProductEditModal = (props: ModalProps) => {
  const { isShowing, handleHide } = props;

  const [title, setTitle] = useState<string>(''); // 체크리스트 생성 시 response의 title
  const [address, setAddress] = useState<string>('');
  const [dong, setDong] = useState<string>();
  const [ho, setHo] = useState<string>();
  const { description } = useRecoilValue(productDataState);
  const [comment, setComment] = useState<string>(description); // 외부에서 입력한 한줄평가 있을 시 받아오기
  const [modalComment, setModalComment] = useState<string>(comment);

  const [isPostOpen, setIsPostOpen] = useState(false); // 주소 입력창

  const setProduct = useSetRecoilState(productDataState);
  const handleSearchAddress = () => {
    setIsPostOpen(prev => !prev);
  };
  const handleAddress = (data: AddressData) => {
    setAddress(data.address);
    setIsPostOpen(false);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleDongChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDong(e.target.value);
  };
  const handleHosuChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHo(e.target.value);
  };
  const handleModalCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModalComment(e.target.value);
  };
  const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    setComment(modalComment);
    handleHide(e);
    if (dong && ho)
      setProduct(prev => ({
        ...prev,
        title: title,
        address: address,
        dong: +dong,
        ho: +ho,
        description: modalComment,
      }));
  };

  return (
    <>
      {isShowing && (
        <St.ModalWrapper>
          <St.Modal>
            <St.CancelBtn onClick={handleHide}>
              <IcCancel />
            </St.CancelBtn>
            <St.ModalTitle>
              <p>정보수정</p>
              <button type="button" onClick={handleSearchAddress}>
                주소변경
              </button>
            </St.ModalTitle>
            <St.AddressWrapper>
              <IcAddress />
              <p>{address ? address : '주소를 등록해주세요'}</p>
            </St.AddressWrapper>
            <St.ProductForm>
              <St.ProductName>
                매물이름 (선택)
                <input type="text" value={title} onChange={handleNameChange} />
              </St.ProductName>
              <St.Dong>
                동 (선택)
                <input
                  type="number"
                  value={dong}
                  placeholder="동 입력"
                  onChange={handleDongChange}
                />
                <span>동</span>
              </St.Dong>
              <St.Hosu>
                호수 (선택)
                <input
                  type="number"
                  value={ho}
                  placeholder="호수 입력"
                  onChange={handleHosuChange}
                />
                <span>호</span>
              </St.Hosu>
              <ProductContract />
              {description && (
                <St.CommentWrapper>
                  평가 (선택)
                  <input type="string" value={modalComment} onChange={handleModalCommentChange} />
                </St.CommentWrapper>
              )}
              <button type="submit" onClick={handleConfirm}>
                완료
              </button>
            </St.ProductForm>
          </St.Modal>
        </St.ModalWrapper>
      )}

      {isPostOpen && (
        <St.PostModal onClick={handleSearchAddress}>
          <Postcode onComplete={handleAddress} autoClose={false} />
        </St.PostModal>
      )}
    </>
  );
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

  Modal: styled.section`
    display: flex;
    flex-direction: column;

    width: 45.5rem;
    height: fit-content;
    padding: 2.5rem 2.2rem 1.6rem 2.2rem;

    border-radius: 0.6rem;
    background-color: ${({ theme }) => theme.colors.White};
  `,

  CancelBtn: styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    margin-bottom: 1.9rem;

    & > svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  `,

  ModalTitle: styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 1.4rem;

    & > p {
      color: ${({ theme }) => theme.colors.Grey600};
      // 수정필요
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
    }

    & > button {
      color: ${({ theme }) => theme.colors.Grey600};
      // 수정필요
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 22px;
    }
  `,

  AddressWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 0.45rem;

    margin-bottom: 2rem;

    & > p {
      ${({ theme }) => theme.fonts.Body5};
    }
  `,

  ProductForm: styled.form`
    display: flex;
    flex-wrap: wrap;

    & > label {
      display: flex;
      flex-direction: column;
      position: relative;

      margin-bottom: 2.1rem;

      color: ${({ theme }) => theme.colors.Grey400};
      // 수정필요
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 22px;

      & > input,
      & > div > input {
        height: 4.5rem;
        margin-top: 0.4rem;
        padding-left: 1.7rem;

        border: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
        border-radius: 0.5rem;
        ${({ theme }) => theme.fonts.Body5};

        &::placeholder {
          color: ${({ theme }) => theme.colors.Grey300};
          ${({ theme }) => theme.fonts.Body6};
        }
      }

      input[type='number']::-webkit-inner-spin-button,
      input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      & > span {
        position: absolute;
        right: 1.3rem;
        bottom: 1.1rem;

        ${({ theme }) => theme.colors.Grey500};
        ${({ theme }) => theme.fonts.Body5};
      }
    }

    & > button {
      width: 100%;
      height: 4.5rem;

      border-radius: 0.4rem;
      background-color: ${({ theme }) => theme.colors.Blue};
      color: ${({ theme }) => theme.colors.White};
      ${({ theme }) => theme.fonts.Body4};
    }
  `,

  ProductName: styled.label`
    width: 100%;
    margin-bottom: 1.3rem;
  `,

  Dong: styled.label`
    width: 20.3rem;
    margin-right: 0.5rem;
  `,

  Hosu: styled.label`
    width: 20.3rem;
  `,

  CommentWrapper: styled.label`
    width: 100%;

    & > input {
      height: 7.4rem;
    }
  `,

  PostModal: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 30%;

    background-color: rgba(0, 0, 0, 0.5);
  `,
};
