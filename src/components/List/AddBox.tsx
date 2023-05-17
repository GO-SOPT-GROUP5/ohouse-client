import styled from "styled-components";

import { IcPlus } from "../../assets/icon";

const AddBox = () => {
  return (
    <St.AddBoxWrapper>
      <IcPlus/>
    </St.AddBoxWrapper>
  )
}

export default AddBox

const St = {
  AddBoxWrapper : styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 39.3rem;
    height: 42.3rem;

    background-color: ${({ theme }) => theme.colors.White};
    border-radius: 0.9rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  `
}