
import AdBanner from '../components/Home/AdBanner';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import { IcCleanService, IcNew } from '../assets/icon';
import MenuBox from '../components/Home/MenuBox';
import { HOME_CLEANING_MENU, HOME_MAIN_MENU } from '../constants/homMenuContents';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (e: React.MouseEvent<HTMLElement>) => {
    const target = (e.target as HTMLElement).id;
    if (target === '4') {
      navigate('/list');
    }
  };

  return (
    <St.HomeWrapper>
      <St.MenuWrapper>
        <St.TopSection onClick={handleNavigate}>
          {HOME_MAIN_MENU.map(({ id, title, isNew, content, icon }) => (
            <MenuBox
              key={id}
              id={id}
              title={title}
              isNew={isNew ? <IcNew /> : <></>}
              content={content}
              icon={icon}
            />
          ))}
        </St.TopSection>
        <St.BottomSection>
          <St.BottomTitle>
            <h4>청소서비스</h4>
            <IcCleanService />
          </St.BottomTitle>
          <St.Bottomcontent>
            {HOME_CLEANING_MENU.map(({ id, title, isNew, content, icon, alt }) => (
              <MenuBox
                key={id}
                title={title}
                isNew={isNew ? <IcNew /> : <></>}
                content={content}
                icon={icon}
                alt={alt}
              />
            ))}
          </St.Bottomcontent>
        </St.BottomSection>
      </St.MenuWrapper>
    </St.HomeWrapper>
  );
};

export default HomePage;

const St = {
  HomeWrapper: styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 10rem;

    background-color: ${({ theme }) => theme.colors.Grey100};
  `,
  MenuWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
  `,
  TopSection: styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    gap: 2rem;
    padding: 8.5rem 0 3.9rem 0;
    margin: auto;
  `,
  BottomSection: styled.section`
    display: flex;
    flex-direction: column;
  `,
  BottomTitle: styled.div`
    display: flex;

    & > h4 {
      padding-right: 0.4rem;

      color: ${({ theme }) => theme.colors.Grey600};

      ${({ theme }) => theme.fonts.Title4};
    }
    & > svg {
      width: 4.6rem;
      height: 3.2rem;
    }
  `,
  Bottomcontent: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    padding: 1.6rem 0 4.6rem 0;
    margin: auto;
    gap: 2rem;
  `,
};
