'use client';
import React from 'react';

import Detailbedge from './Detailbedge';
import DetailTitle from './DetailTitle';
import DetailSubcontents from './DetailSubContents';
import Image from 'next/image';
import DetailTopImage from './DetailTopImage';
import DetailWrapper from './DetailWrapper';

const MyPortfolioDetailTop = () => {
  return (
    <DetailWrapper>
      <div className="w-full lg:w-[50%]">
        <Detailbedge contents="Frontend" />
        <Detailbedge contents="개인 프로젝트" />
        <DetailTitle subTitle={'개인 포트폴리오'} title={'포트폴리오'} date={'2024-06-04 ~'} />
        <DetailSubcontents
          HomepageLink="/"
          githubLink="https://github.com/Junmovo/JunmoPortfolio"
          subContents={
            <>
              Next.js 와 Typescript를 활용한 포트폴리오 페이지입니다.
              <br /> 디자인부터 기능까지 직접 작업하였으며, 각 컴포넌트는 재사용성을 고려하여 구성하였습니다.
            </>
          }
        />
      </div>
      <DetailTopImage ImageSrc="/images/myPortfolio/DetailMainImage.png" />
    </DetailWrapper>
  );
};

export default MyPortfolioDetailTop;
