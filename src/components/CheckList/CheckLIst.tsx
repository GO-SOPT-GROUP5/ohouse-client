import styled from 'styled-components';

import CheckListItem from './CheckListItem';

const CheckLIst = () => {
  return (
    <St.CheckList>
      <CheckListItem />
    </St.CheckList>
  );
};

export default CheckLIst;

const St = {
  CheckList: styled.section`
    width: 63.2rem;
    height: fit-content;
    padding: 3.9rem;

    background-color: ${({ theme }) => theme.colors.White};
  `,
};
