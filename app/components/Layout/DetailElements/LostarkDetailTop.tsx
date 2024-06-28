'use client';
import React from 'react';

import Detailbedge from './Detailbedge';
import DetailTitle from './DetailTitle';
import DetailSubcontents from './DetailSubContents';
import Image from 'next/image';

const LostarkDetailTop = () => {
  return (
    <div className="flex justify-between items-end mt-[30px] p-[20px] border-b-[1px] pb-[40px]">
      <div>
        <div className="">
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
      </div>
      <div className="w-[600px] h-[400px] bg-gray-400 rounded-[20px] overflow-hidden  mt-3 p-[20px]  shadow-[0_2px_30px_0_rgba(0,0,0,.06)] dark:bg-[#2525259d] relative">
        <Image src={'/images/Lostark/konimainimg.png'} fill alt="코니메인이미지" />
      </div>
    </div>
  );
};

export default LostarkDetailTop;
