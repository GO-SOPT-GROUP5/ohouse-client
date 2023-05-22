import { styled } from 'styled-components';

import MenuBox from '../components/Home/MenuBox';

const HomePage = () => {
  return (
    <>
      홈 페이지입니다!
      <MenuBox />
      <Test>테스트용 호마ㅕㄴ !~~~</Test>
      <Test2>테스트용 호마ㅕㄴ !~~~</Test2>
    </>
  );
};

export default HomePage;

const Test = styled.div`
  background-color: pink;
  height: 100vh;
`;

const Test2 = styled.div`
  background-color: yellow;
  height: 100vh;
`;
