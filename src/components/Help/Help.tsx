import styled from 'styled-components';
import { IcLeftSmall } from '../../assets/icon';

const Help = () => {
  return (
    <St.HelpWrapper>
      <IcLeftSmall />
      Help 컴포넌트입니다!
    </St.HelpWrapper>
  );
};

export default Help;

const St = {
  HelpWrapper: styled.section`
    width: 63rem;

    background-color: ${({ theme }) => theme.colors.White};
    color: ${({ theme }) => theme.colors.Grey600};
    ${({ theme }) => theme.fonts.Title1};
  `,
};
