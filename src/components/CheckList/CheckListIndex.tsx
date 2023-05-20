import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { ImgEmpty } from '../../assets/image';
import { CATEGORY_LIST } from '../../constants/category';
import { selectedSubcategoriesState, showIndexState } from '../../recoil/atom';
import CheckListItem from './CheckListItem';

const CheckListIndex = () => {
  const [selectedSubcategories, setSelectedSubcategories] = useRecoilState(
    selectedSubcategoriesState,
  );
  const [showIndex] = useRecoilState(showIndexState);

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

  const showSubcategories = selectedSubcategories.filter(
    subcategory => subcategory >= showIndex[0] && subcategory <= showIndex[1],
  );

  console.log('selectedSubcategories', selectedSubcategories);
  console.log('showSubcategories', showSubcategories);
  console.log('showIndex', showIndex);

  return (
    <St.CheckList>
      {showSubcategories.length ? (
        showSubcategories.map(id => {
          const { subcategory, checklist, options } = getCategoryInfo(id) || {};
          return (
            subcategory &&
            checklist &&
            options && (
              <CheckListItem
                key={id}
                subcategory={subcategory}
                checklist={checklist}
                options={options}
              />
            )
          );
        })
      ) : (
        <ImgEmpty />
      )}
    </St.CheckList>
  );
};

export default CheckListIndex;

const St = {
  CheckList: styled.section`
    display: flex;
    flex-direction: column;
    gap: 3.6rem;

    width: 63.2rem;
    /* width: 63.2rem; */
    /* height: fit-content; */
    padding: 3.9rem;

    background-color: ${({ theme }) => theme.colors.White};
  `,
};
