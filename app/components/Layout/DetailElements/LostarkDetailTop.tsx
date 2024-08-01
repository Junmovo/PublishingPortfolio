'use client';
import React from 'react';

import Detailbedge from './Detailbedge';
import DetailTitle from './DetailTitle';
import DetailSubcontents from './DetailSubContents';
import Image from 'next/image';
import DetailTopImage from './DetailTopImage';
import DetailWrapper from './DetailWrapper';

const LostarkDetailTop = () => {
  return (
    <DetailWrapper>
      <div className="w-full lg:w-[50%]">
        <Detailbedge contents="Frontend" />
        <Detailbedge contents="개인 프로젝트" />
        <DetailTitle subTitle={'게임 전적검색 사이트'} title={'코니콩'} date={'24.06.04 - 24.06.20'} />
        <DetailSubcontents
          HomepageLink="https://junmo-github-io.vercel.app/"
          githubLink="https://github.com/Junmovo/Konikong"
          subContents={
            <>
              로스트아크 OpenAPi를 활용한 캐릭터 정보검색 사이트입니다. <br />
              Axios 및 Axios instance를 활용하여 코드의 가독성을 높이고,
              <br />
              Component 단위로 구성하여 재사용성을 높였습니다.
            </>
          }
        />
      </div>
      <DetailTopImage ImageSrc="/images/Lostark/DetailMainImage.png" />
    </DetailWrapper>
  );
};

export default LostarkDetailTop;
