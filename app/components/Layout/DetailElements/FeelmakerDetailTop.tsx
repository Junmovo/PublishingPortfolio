import React from 'react';
import Detailbedge from './Detailbedge';
import DetailTitle from './DetailTitle';
import DetailSubcontents from './DetailSubContents';
import DetailTopImage from './DetailTopImage';
import DetailWrapper from './DetailWrapper';

const FeelmakerDetailTop = () => {
  return (
    <DetailWrapper>
      <div className=" w-[50%]">
        <Detailbedge contents="Publisher" />
        <Detailbedge contents="Design" />
        <Detailbedge contents="회사 프로젝트" />
        <DetailTitle subTitle={'웨딩 영상 제작'} title={'필메이커'} date={'22.11.01 - 22.12.16'} />
        <DetailSubcontents
          HomepageLink="https://feelmaker.co.kr/"
          subContents={
            <>
              웨딩 영상 전문 제작 필메이커 사이트를 유지보수 하였습니다.
              <br />
              오류를 수정하고, 페이지 기획 및 이벤트 디자인을 담당하였습니다.
            </>
          }
        />
      </div>
      <DetailTopImage ImageSrc="/images/feelmaker/DetailMainImage.png" />
    </DetailWrapper>
  );
};

export default FeelmakerDetailTop;
