import { useState } from 'react';
import styled from 'styled-components';

interface CheckListItemProms {
  checklistId: number;
  subcategory: string;
  checklist: string;
  options: string[];
}

const CheckListItem = ({ checklistId, subcategory, checklist, options }: CheckListItemProms) => {
  const [selectedOption, setSelectedOption] = useState<string>();

  const handleSelectedOption = (select: string) => {
    if (select !== selectedOption) {
      setSelectedOption(select);
    }
  };
  console.log('ddd', checklistId, subcategory, checklist, options);

  return (
    <St.CheckListItemWrapper>
      <p>{checklist}</p>
      <St.OptionWrapper>
        {options.map(option => (
          <St.OptionBtn
            key={option}
            onClick={() => handleSelectedOption(option)}
            disabled={option == selectedOption}
            active={option === selectedOption}
          >
            {option}
          </St.OptionBtn>
        ))}
      </St.OptionWrapper>
    </St.CheckListItemWrapper>
  );
};

export default CheckListItem;

const St = {
  CheckListItemWrapper: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 8.7rem;

    background-color: ${({ theme }) => theme.colors.White};

    & > p {
      color: ${({ theme }) => theme.colors.Grey600};
      // 수정 필요
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
    }
  `,
  OptionWrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,

  OptionBtn: styled.button<{ active: boolean }>`
    width: 17.863rem;
    height: 4.2rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.Grey300};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.Grey400};
    ${({ theme }) => theme.fonts.Body4};

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

    &:hover {
      border: 0.1rem solid ${({ theme }) => theme.colors.Blue};
      background: rgba(51, 197, 239, 0.1);
      color: ${({ theme }) => theme.colors.Blue};
    }
  `,
};
