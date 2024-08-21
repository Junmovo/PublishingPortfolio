import styled, { keyframes } from 'styled-components';
// 고정 이너
export const HeaderWrapper = styled.header`
  width: 100%;
  display: block;
  justify-content: center;
  background-color: inherit;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 9;
  margin: 0px auto;
  background-color: rgba(255, 255, 255, 0.8); /* 헤더 배경을 반투명하게 설정 */
  backdrop-filter: blur(10px); /* 블러 효과 적용 */
  border-bottom: 1px;
  /* box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.06); */
`;

export const HeaderInner = styled.nav`
  width: 1300px;
  height: 60px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1280px) {
    width: 100%;
  }
`;

export const InnerMenuWrap = styled.ul`
  display: flex;
  align-items: center;
  height: 60px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const InnerMenu = styled.li`
  font-family: 'montserrat';
  font-weight: 400;
  a {
    padding: 10px;
  }
`;
