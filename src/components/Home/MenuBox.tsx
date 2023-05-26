import { Component } from "react";
import styled from "styled-components";

interface MenuBoxContent {
  id: number;
  title: string;
  isNew: Component;
  content: string;
  icon: string;
  alt: string;
}

const MenuBox = ({ id, title, isNew, content, icon, alt }: MenuBoxContent) => {
  return (
    <St.MenuBoxWrapper>
      <St.MenuBoxContainer id={id}>
        <St.MenuBoxHeader>
          <St.MenuBoxTitle>
            <h3>{title}</h3>
            {isNew}
          </St.MenuBoxTitle>
          <St.MenuBoxContent>{content}</St.MenuBoxContent>
        </St.MenuBoxHeader>
        <St.MenuBoxBottom>
          <St.MenuBoxIcon>
            <img src={require(icon)} alt={alt} />
          </St.MenuBoxIcon>
        </St.MenuBoxBottom>
      </St.MenuBoxContainer>
    </St.MenuBoxWrapper>
  );
};

export default MenuBox;

const St = {
  MenuBoxWrapper: styled.article`
    width: 39.2rem;
    height: 18rem;
    padding: 1.8rem;

    background-color: ${({ theme }) => theme.colors.White};

    box-shadow: 0 0.25rem 0.94rem rgba(0, 0, 0, 0.1);
    border-radius: 1.2rem;
  `,
  MenuBoxContainer: styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    cursor: pointer;
  `,

  MenuBoxHeader: styled.header`
    display: flex;
    flex-direction: column;

    width: fit-content;
  `,
  MenuBoxTitle: styled.div`
    display: flex;
    align-items: center;
    padding: 0.1rem 0 0.6rem 0;

    & > h3 {
      ${({ theme }) => theme.fonts.Title3};
      color: ${({ theme }) => theme.colors.Grey500};
      padding-right: 0.4rem;
    }
  `,
  MenuBoxContent: styled.p`
    ${({ theme }) => theme.fonts.Body6};
    color: ${({ theme }) => theme.colors.Grey400};

    width: fit-content;

    white-space: pre-line;
    word-break: keep-all;
  `,
  MenuBoxBottom: styled.div`
    padding-top: 0.3rem;
  `,
  MenuBoxIcon: styled.i`
    & img {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  `,
};
