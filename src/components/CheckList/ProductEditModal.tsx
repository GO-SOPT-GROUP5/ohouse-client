import React, { useState } from 'react';
import styled from 'styled-components';

import { IcAddress, IcCancel } from '../../assets/icon';

export interface ModalProps {
  isShowing: boolean;
  handleHide: React.MouseEventHandler;
  handleConfirm: React.MouseEventHandler;
}

const CONTRACT_OPTIONS = ['전세', '월세', '매매'];

const ProductEditModal = (props: ModalProps) => {
  const { isShowing, handleHide, handleConfirm } = props;

  const [productName, setProductName] = useState<string>('');
  const [dong, setDong] = useState<number>(0);
  const [hosu, setHosu] = useState<number>(0);
  const [contract, setContract] = useState<string>('');

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProductName('');
    setDong(0);
    setHosu(0);
    setContract('');
  };

  return (
    <>
      {isShowing && (
        <St.ModalWrapper>
          <St.Modal>
            <IcCancel />
            <p>정보수정</p>
            <button type="button">주소변경</button>
            <div>
              <IcAddress />
              <p>주소를 등록해주세요</p>
            </div>
            <form onSubmit={handleSubmit}>
              <label>
                매물이름 (선택)
                <input type="text" value={productName} onChange={handleNameChange} />
              </label>
              <label>
                동 (선택)
                <input type="number" value={dong} onChange={handleDongChange} />
              </label>
              <label>
                호수 (선택)
                <input type="number" value={hosu} onChange={handleHosuChange} />
              </label>
              <div>
                {CONTRACT_OPTIONS.map(option => (
                  <St.ContractBtn
                    key={option}
                    onClick={() => handleContractSelect(option)}
                    disabled={contract === option}
                  >
                    {option}
                  </St.ContractBtn>
                ))}
              </div>
              <button type="submit">완료</button>
            </form>
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

    background-color: ${({ theme }) => theme.colors.White};
    border-radius: 0.6rem;
  `,

  ContractBtn: styled.button`
    width: 13.3rem;
    height: 4.5rem;

    background: transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
    border-radius: 0.5rem;
  `,
};
