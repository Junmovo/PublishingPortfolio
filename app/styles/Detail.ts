import styled from 'styled-components';

export const TitleText = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 800;
`;
export const TitleUnderText = styled.div`
  div {
    padding-bottom: 15px;
    padding-left: 15px;
    position: relative;
    font-weight: 600;
    span {
      font-weight: 400;
    }
    p {
      margin-top: 10px;
      margin-left: 5px;
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 400;
    }
    :not() {
      display: none;
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
  padding: 24px;
  & div {
    font-size: 14px;
    margin-bottom: 5px;
    color: ${({ color }) => {
      if (color === 'problem') {
        return '#f87171';
      } else if (color === 'solution') {
        return '#60a5fa';
      } else {
        return '#f59e0b';
      }
    }};
  }
  & span {
    border-radius: 10px;
    margin-bottom: 10px;
    color: ${({ color }) => {
      if (color === 'problem') {
        return '#f87171';
      } else if (color === 'solution') {
        return '#60a5fa';
      } else {
        return '#f59e0b';
      }
    }};
  }
`;
export const ProgressSection = styled.section`
  margin-bottom: 30px;

  div {
    ::after {
      display: none;
    }
    padding: 0%;
  }
  .ant-progress-bg {
    transition: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .ant-progress-text {
    width: 50px !important;
    color: #b4b4b4;
  }
  article {
    ::after {
      display: none;
    }
  }
`;
export const ImageVideoSection = styled.section`
  margin-top: 40px;
  margin-bottom: 120px;

  .video-item {
    margin-bottom: 120px;

    :last-child {
      margin-bottom: 0;
    }

    ::after {
      display: none;
    }
  }

  .section-title {
    padding:0px 20px;
    margin: 0 auto 24px;

    ::after {
      display: none;
    }

    span {
      display: block;
      margin-bottom: 6px;
      font-size: 13px;
      font-weight: 700;
      color: #999;
      letter-spacing: 0.08em;
    }

    h3 {
      margin: 0;
      font-size: 28px;
      font-weight: 800;
      color: #111;
    }
  }

  .content-wrap {
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 32px;
    padding:0 20px;
    margin: 0 auto;
    align-items: start;
  }

  .info-area {
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 0;

    ::after {
      display: none;
    }
  }

  .sample-img {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 18px;
    background: #111;

    ::after {
      display: none;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }

    .sample-label {
      position: absolute;
      top: 12px;
      left: 12px;
      z-index: 2;
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(0, 0, 0, 0.55);
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      line-height: 1;
      backdrop-filter: blur(6px);
    }
  }

  .prompt-box {
    max-height: 240px;
    overflow-y: auto;
    padding: 18px;
    border-radius: 18px;
    background: #f6f6f6;
    color: #222;

    ::after {
      display: none;
    }

    span {
      display: block;
      margin-bottom: 10px;
      font-size: 13px;
      font-weight: 700;
      color: #888;
      letter-spacing: 0.06em;
    }

    p {
      margin: 0;
      font-size: 14px;
      line-height: 1.6;
      color: #444;
      word-break: keep-all;
      white-space: pre-line;
    }

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #cfcfcf;
    }
  }

  .media-box {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    height: auto;
    overflow: hidden;
    border-radius: 24px;
    background: #111;
    cursor: pointer;

    ::after {
      display: none;
    }
  }

  .before-img,
  .after-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1.2s ease, transform 1.5s ease;
  }

  .before-img {
    z-index: 2;
    opacity: 1;
    transform: scale(1);
  }

  .after-video {
    z-index: 1;
    opacity: 0;
    transform: scale(1.04);
  }

  .media-text {
    position: absolute;
    left: 28px;
    bottom: 24px;
    z-index: 3;
    color: #fff;
    transition: opacity 0.5s ease, transform 0.5s ease;

    ::after {
      display: none;
    }

    span {
      display: block;
      margin-bottom: 6px;
      font-size: 14px;
      opacity: 0.75;
    }

    strong {
      font-size: 24px;
      font-weight: 700;
    }
  }

  .video-item.active {
    .before-img {
      opacity: 0;
      transform: scale(1.06);
      pointer-events: none;
    }

    .after-video {
      opacity: 1;
      transform: scale(1);
    }

    .media-text {
      opacity: 0;
      transform: translateY(10px);
      pointer-events: none;
    }

    .media-box {
      cursor: default;
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 80px;

    .video-item {
      margin-bottom: 80px;
    }

    .section-title {
      margin-bottom: 18px;

      h3 {
        font-size: 24px;
      }
    }

    .content-wrap {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .media-box {
      order: 1;
      border-radius: 16px;
    }

    .info-area {
      order: 2;
    }

    .sample-img {
      border-radius: 14px;
    }

    .prompt-box {
      max-height: 220px;
      padding: 16px;
      border-radius: 14px;
    }

    .media-text {
      left: 18px;
      bottom: 18px;

      span {
        font-size: 13px;
      }

      strong {
        font-size: 20px;
      }
    }
  }
`;