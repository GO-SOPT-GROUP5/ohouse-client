import styled from "styled-components";

import Help from "../components/Help/Help";

const HelpPage = () => {
  return (
    <Wrapper>
      <Help />;
    </Wrapper>
  );
};

export default HelpPage;

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.Grey200};

`