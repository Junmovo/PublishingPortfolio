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

export const DetailTitle = styled.div``;

export const DetailContents = styled.div`
  color: #4b5563;
  padding: 24px;
  & div {
    font-size: 14px;
    margin-bottom: 5px;
    color: ${(props) => {
      if (props.color === 'problem') {
        return '#f87171';
      } else if (props.color === 'solution') {
        return '#60a5fa';
      } else {
        return '#f59e0b';
      }
    }};
  }
  & span {
    border-radius: 10px;
    margin-bottom: 10px;
    /* font-weight: 600; */
    color: ${(props) => {
      if (props.color === 'problem') {
        return '#f87171';
      } else if (props.color === 'solution') {
        return '#60a5fa';
      } else {
        return '#f59e0b';
      }
    }};
  }
`;
