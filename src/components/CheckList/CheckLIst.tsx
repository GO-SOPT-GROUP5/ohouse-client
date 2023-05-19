import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { CATEGORY_LIST } from '../../constants/category';
import { selectedSubcategoriesState } from '../../recoil/atom';
import CheckListItem from './CheckListItem';

const CheckLIst = () => {
  const [selectedSubcategories, setSelectedSubcategories] = useRecoilState(
    selectedSubcategoriesState,
  );
  console.log(selectedSubcategories);

  const getCategoryInfo = (id: number) => {
    for (const category of CATEGORY_LIST) {
      const subcategory = category.subcategories.find(subcategory => subcategory.id === id);
      if (subcategory) {
        const { subcategory: subcategoryName, checklist, options } = subcategory;
        return { subcategory: subcategoryName, checklist, options };
      }
    }

    return null;
  };

  return (
    <St.CheckList>
      {selectedSubcategories.map(id => {
        const { subcategory, checklist, options } = getCategoryInfo(id) || {};
        return subcategory && checklist && options ? (
          <CheckListItem
            key={id}
            subcategory={subcategory}
            checklist={checklist}
            options={options}
          />
        ) : null;
      })}
    </St.CheckList>
  );
};

export default CheckLIst;

const St = {
  CheckList: styled.section`
    display: flex;
    flex-direction: column;
    gap: 3.6rem;

    width: 63.2rem;
    height: fit-content;
    padding: 3.9rem;

    background-color: ${({ theme }) => theme.colors.White};
  `,
};
