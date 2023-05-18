import { useState } from 'react';
import styled from 'styled-components';

interface CategoryItemProps {
  categoryName: string;
  subCategoryNum: number;
}

const CategoryItem = (props: CategoryItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Wrapper>
      <Title>Categories</Title>
      <ExpandButton onClick={toggleExpand}>{expanded ? 'Collapse' : 'Expand'}</ExpandButton>
      {expanded && (
        <CategoryContainer>
          <Category>Category 1</Category>
          <Category>Category 2</Category>
          <Category>Category 3</Category>
          <Category>Category 4</Category>
        </CategoryContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f8f8f8;
  padding: 16px;
`;

const Title = styled.h2`
  margin-bottom: 8px;
`;

const ExpandButton = styled.button`
  background-color: #589bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CategoryContainer = styled.div`
  margin-top: 16px;
`;

const Category = styled.div`
  background-color: #fff;
  padding: 8px;
  margin-bottom: 8px;
`;

export default CategoryItem;
