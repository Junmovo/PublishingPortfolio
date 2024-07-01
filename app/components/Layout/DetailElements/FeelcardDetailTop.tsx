import React from 'react';
import Detailbedge from './Detailbedge';
import DetailTitle from './DetailTitle';
import DetailSubcontents from './DetailSubContents';
import DetailTopImage from './DetailTopImage';

const FeelcardDetailTop = () => {
  return (
    <div className="flex justify-between items-end mt-[30px] p-[20px] border-b-[1px] pb-[60px]">
      <div className="">
        <Detailbedge contents="Publisher" />
        <Detailbedge contents="회사 프로젝트" />
        <DetailTitle subTitle={'모바일 청첩장'} title={'필카드'} date={'23.10.01 - 23.12.15'} />
        <DetailSubcontents
          HomepageLink="https://junmo-github-io.vercel.app/"
          subContents={
            <>
              모바일청첩장 필카드를 업데이트 및 기능추가 하였습니다.
              <br /> 기존 노후화된 기능들을 업데이트하며, 사용자를 1.5배 늘린 경험이 있습니다.
            </>
          }
        />
      </div>
      <DetailTopImage ImageSrc="/images/Lostark/konimainimg.png" />
    </div>
  );
};

export default FeelcardDetailTop;
