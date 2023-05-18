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

    border-radius: 0.9rem;
    background-color: ${({ theme }) => theme.colors.White};
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.15);
  `
}