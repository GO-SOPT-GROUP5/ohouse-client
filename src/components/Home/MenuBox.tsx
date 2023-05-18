import { Component } from 'react';
import styled from 'styled-components';

interface MenuBoxContent {
  title: string;
  isNew: Component;
  content: string;
  icon: Component;
}

const MenuBox = ({ title, isNew, content, icon }: MenuBoxContent) => {
  return (
    <St.MenuBoxWrapper>
      <St.MenuBoxHeader>
        <St.MenuBoxTitle>
          <h3>{title}</h3>
          {isNew}
        </St.MenuBoxTitle>
        <St.MenuBoxContent>{content}</St.MenuBoxContent>
      </St.MenuBoxHeader>
      <St.MenuBoxBottom>
        <St.MenuBoxIcon>{icon}</St.MenuBoxIcon>
      </St.MenuBoxBottom>
    </St.MenuBoxWrapper>
  );
};

export default MenuBox;

const St = {
  MenuBoxWrapper: styled.article`
    position: relative;

    width: 39.2rem;
    height: 18rem;
    padding: 1.8rem;

    background-color: ${({ theme }) => theme.colors.White};

    box-shadow: 0 0.25rem 0.94rem rgba(0, 0, 0, 0.1);
    border-radius: 1.2rem;
  `,
  MenuBoxHeader: styled.header`
    display: flex;
    flex-direction: column;
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

    white-space: pre-line;
    word-break: keep-all;
  `,
  MenuBoxBottom: styled.div`
    padding-top: 0.3rem;
  `,
  MenuBoxIcon: styled.div`
    & > svg {
      position: absolute;
      right: 0;
      bottom: 0;

      margin: 0 1.8rem 1.8rem 0;
    }
  `,
};
