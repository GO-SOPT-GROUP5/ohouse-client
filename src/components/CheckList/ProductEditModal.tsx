import React, { useState } from 'react';
import styled from 'styled-components';

import { IcAddress, IcCancel, IcTranslate } from '../../assets/icon';

export interface ModalProps {
  isShowing: boolean;
  handleHide: React.MouseEventHandler;
  handleConfirm: React.MouseEventHandler;
}

const CONTRACT_OPTIONS = ['전세', '월세', '매매'];

const ProductEditModal = (props: ModalProps) => {
  const { isShowing, handleHide, handleConfirm } = props;

  const [productName, setProductName] = useState<string>(''); // 체크리스트 생성 시 response의 title로 초기화
  const [dong, setDong] = useState<number>();
  const [hosu, setHosu] = useState<number>();
  const [contract, setContract] = useState<string>('');
  const [price, setPrice] = useState<number>();
  const [size, setSize] = useState<number>();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };
  const handleDongChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDong(Number(e.target.value));
  };
  const handleHosuChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHosu(Number(e.target.value));
  };
  const handleContractSelect = (contractType: string) => {
    if (contractType !== contract) {
      setContract(contractType);
    }
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };
  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(Number(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProductName('');
    // setDong(0);
    // setHosu(0);
    setContract('');
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
              <button type="button">주소변경</button>
            </St.ModalTitle>
            <St.AddressWrapper>
              <IcAddress />
              <p>주소를 등록해주세요</p>
            </St.AddressWrapper>
            <St.ProductForm onSubmit={handleSubmit}>
              <St.ProductName>
                매물이름 (선택)
                <input type="text" value={productName} onChange={handleNameChange} />
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
                  value={hosu}
                  placeholder="호수 입력"
                  onChange={handleHosuChange}
                />
                <span>호</span>
              </St.Hosu>
              <St.ContractWrapper>
                <p>계약형태</p>
                {CONTRACT_OPTIONS.map(option => (
                  <St.ContractBtn
                    key={option}
                    onClick={() => handleContractSelect(option)}
                    disabled={option === contract}
                    active={option === contract}
                  >
                    {option}
                  </St.ContractBtn>
                ))}
              </St.ContractWrapper>
              {contract === '전세' && (
                <>
                  <St.PriceWrapper>
                    전세금 (선택)
                    <input
                      type="number"
                      value={price}
                      placeholder="전세금 입력"
                      onChange={handlePriceChange}
                    />
                    <span>만원</span>
                  </St.PriceWrapper>
                  <St.AreaWrapper>
                    면적 (선택)
                    <St.Area>
                      <input
                        type="number"
                        value={size}
                        placeholder="면적 입력"
                        onChange={handleSizeChange}
                      />
                      <span>㎡</span>
                      <IcTranslate />
                      <input
                        type="number"
                        value={size}
                        placeholder="면적 입력"
                        onChange={handleSizeChange}
                      />
                      <span>평</span>
                    </St.Area>
                  </St.AreaWrapper>
                </>
              )}
              <button type="submit" onClick={handleConfirm}>
                완료
              </button>
            </St.ProductForm>
          </St.Modal>
        </St.ModalWrapper>
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

  ContractWrapper: styled.div`
    & > p {
      margin-bottom: 1.6rem;

      ${({ theme }) => theme.colors.Grey600};
      // 수정필요
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
    }
  `,

  ContractBtn: styled.button<{ active: boolean }>`
    width: 13.3rem;
    height: 4.5rem;
    margin-right: 0.4rem;
    margin-bottom: 3.9rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
    border-radius: 0.5rem;

    ${({ active, theme }) =>
      active
        ? `
        border: 0.1rem solid ${theme.colors.Blue};
        background-color: ${theme.colors.White};
      color: ${theme.colors.Blue};
    `
        : `
        background-color: ${theme.colors.White};
      color: ${theme.colors.Grey600};
    `}
  `,

  PriceWrapper: styled.label`
    width: 100%;
  `,

  AreaWrapper: styled.label`
    /* padding-bottom: 0.4rem; */
    width: 100%;
  `,

  Area: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-top: 0.4rem;

    & > input {
      width: 18.7rem;
      position: relative;
    }

    & > span:nth-child(2) {
      position: absolute;
      left: 15.3rem;
      bottom: 1.1rem;

      ${({ theme }) => theme.colors.Grey500};
      ${({ theme }) => theme.fonts.Body5};
    }

    & > span:last-child {
      position: absolute;
      right: 1.3rem;
      bottom: 1.1rem;

      ${({ theme }) => theme.colors.Grey500};
      ${({ theme }) => theme.fonts.Body5};
    }
  `,
};
