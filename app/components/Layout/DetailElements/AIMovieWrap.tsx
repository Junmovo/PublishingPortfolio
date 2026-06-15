'use client';

import React, { useRef, useState } from 'react';
import { IAIMovieProps } from '@/app/types/PortfolioType';

interface ImageVideoItemProps {
  item: IAIMovieProps;
}

const ImageVideoItem = ({ item }: ImageVideoItemProps) => {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleChangeVideo = () => {
    if (isPlay) return;

    setIsPlay(true);

    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <div className={`video-item ${isPlay ? 'active' : ''}`}>
      <div className="section-title">
        <span>{item.category}</span>
        <h3>{item.title}</h3>
      </div>

      <div className="content-wrap">
        <div className="info-area">
          <div className="sample-img">
            <img src={item.imageSrc} alt={`${item.title} 샘플 이미지`} />
            <span className="sample-label">원본 이미지</span>
          </div>

          <div className="prompt-box">
            <span>프롬프트</span>
            <p>{item.prompt}</p>
          </div>
        </div>

        <div className="media-box" onClick={handleChangeVideo}>
          <img
            src={item.imageSrc}
            alt={`${item.title} 변환 전 이미지`}
            className="before-img"
          />

          <video
            ref={videoRef}
            src={item.videoSrc}
            className="after-video"
            muted
            loop
            playsInline
            preload="metadata"
          />

          <div className="media-text">
            <span>AI를 활용해 정적인 이미지를 영상으로 변경하였습니다.</span>
            <strong>클릭하면 변환된 영상을 확인할 수 있습니다.</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageVideoItem;