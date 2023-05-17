import styled from "styled-components";

const AddBox = () => {
  return (
    <St.AddBoxWrapper>

    </St.AddBoxWrapper>
  )
}

export default AddBox

const St = {
    AddBoxWrapper : styled.article`
        
        width: 39.3rem;
        height: 42.3rem;

        background-color: ${({ theme }) => theme.colors.White};
        border-radius: 0.9rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    `
}