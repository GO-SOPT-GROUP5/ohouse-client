import { useState } from 'react';
import styled from 'styled-components';

import { IcTranslate } from '../../assets/icon';

const CONTRACT_OPTIONS = ['전세', '월세', '매매'];

const ProductContract = () => {
  const [contract, setContract] = useState<string>('');
  const [price, setPrice] = useState<string>(''); // 전세금 or 보증금 or 매매가
  const [monthlyRent, setMonthlyRent] = useState<string>(''); // 월세
  const [area, setArea] = useState<string>(''); // 제곱미터
  const [size, setSize] = useState<string>(''); // 평수

  const handleContractSelect = (contractType: string) => {
    if (contractType !== contract) {
      setContract(contractType);
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleMonthlyRentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonthlyRent(e.target.value);
  };

  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputArea = e.target.value;
    setArea(inputArea);
    const convertedArea = Math.floor(Number(inputArea) / 3.3).toString();
    setSize(convertedArea);
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputArea = e.target.value;
    setSize(inputArea);
    const convertedArea = Math.floor(Number(inputArea) * 3.3).toString();
    setArea(convertedArea);
  };

  return (
    <>
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
      {(contract === '전세' || contract === '월세' || contract === '매매') && (
        <>
          <St.PriceWrapper>
            {contract === '월세' ? '보증금' : contract === '매매' ? '매매가' : '전세금'} (선택)
            <input
              type="number"
              value={contract === '월세' ? monthlyRent : price}
              placeholder={
                contract === '월세'
                  ? '보증금 입력'
                  : contract === '매매'
                  ? '매매가 입력'
                  : '전세금 입력'
              }
              onChange={e => handlePriceChange(e)}
            />
            <span>만원</span>
          </St.PriceWrapper>
          {contract === '월세' && (
            <St.MonthlyRentWrapper>
              월세 (선택)
              <input
                type="number"
                value={monthlyRent}
                placeholder="월세 입력"
                onChange={e => handleMonthlyRentChange(e)}
              />
              <span>만원</span>
            </St.MonthlyRentWrapper>
          )}
          <St.AreaWrapper>
            면적 (선택)
            <St.Area>
              <input
                type="number"
                value={area}
                placeholder="면적 입력"
                onChange={handleAreaChange}
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
    </>
  );
};

export default ProductContract;

const St = {
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

  MonthlyRentWrapper: styled.label`
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
