import styled from 'styled-components';

export const TitleText = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 600;
`;
export const TitleUnderText = styled.div`
  div {
    padding-bottom: 15px;
    padding-left: 15px;
    position: relative;
    span {
      font-weight: 600;
    }
  }
  div::after {
    content: '';
    width: 5px;
    height: 5px;
    position: absolute;
    background-color: #ddd;
    border-radius: 50%;
    left: 0;
    top: 10px;
  }
`;

export const AboutMeUnderText = styled.div`
  div {
    padding-bottom: 15px;
    position: relative;
    :last-child {
      padding-bottom: 0;
    }
    span {
      font-weight: 600;
    }
  }
`;
