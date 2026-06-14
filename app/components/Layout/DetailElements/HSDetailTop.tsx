import React from 'react';
import Detailbedge from './Detailbedge';
import DetailTitle from './DetailTitle';
import DetailSubcontents from './DetailSubContents';
import DetailTopImage from './DetailTopImage';
import DetailWrapper from './DetailWrapper';

const HSDetailTop = () => {
  return (
    <DetailWrapper>
      <div className="w-full lg:w-[50%]">
        <Detailbedge contents="Design" />
        <Detailbedge contents="Offline" />
        <Detailbedge contents="회사 프로젝트" />
        <DetailTitle subTitle={'회사 프렌차이즈'} title={'외대HS어학원'} date={'24.10.01 - 25.06.01'} />
        <DetailSubcontents
          HomepageLink=""
          subContents={
            <>
              외대HS 랜딩페이지 및 이벤트 페이지 제작을 담당하였으며, 전단지, X배너 등 <br/>다양한 온·오프라인 홍보물 디자인을 통해 마케팅 및 프로모션 활동을 지원하였습니다.
            </>
          }
        />
      </div>
      <DetailTopImage ImageSrc="/images/Feelcard/FeelcardDetail.png" />
    </DetailWrapper>
  );
};

export default HSDetailTop;
