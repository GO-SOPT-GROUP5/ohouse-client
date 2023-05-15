import styled from 'styled-components';
import { IcLeftSmall } from '../../assets/icon';

const Help = () => {
  return (
    <St.HelpWrapper>
      <IcLeftSmall />
      MenuBox 컴포넌트입니다!
    </St.HelpWrapper>
  );
};

export default Help;

const St = {
  HelpWrapper: styled.section`
    color: green;
  `,
};
