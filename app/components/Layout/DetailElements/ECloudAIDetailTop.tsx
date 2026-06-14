import React from 'react';
import Detailbedge from './Detailbedge';
import DetailTitle from './DetailTitle';
import DetailSubcontents from './DetailSubContents';
import DetailTopImage from './DetailTopImage';
import DetailWrapper from './DetailWrapper';

const ECloudAIDetailTop = () => {
  return (
    <DetailWrapper>
      <div className="w-full lg:w-[50%]">
        <Detailbedge contents="Design" />
        <Detailbedge contents="Publisher" />
        <Detailbedge contents="회사 프로젝트" />
        <DetailTitle subTitle={'본사 홈페이지'} title={'E-Cloud AI'} date={'26.06.01 - 리뉴얼 진행중'} />
        <DetailSubcontents
          HomepageLink="https://e-cloud.ai/company.html"
          subContents={
            <>
              E-Cloud AI 공식 홈페이지의 디자인 리뉴얼 및 퍼블리싱을 진행하였으며,<br/> 최신 디자인 트렌드를 반영한 심플한 레이아웃과 반응형 웹 구조를 적용하였습니다.
            </>
          }
        />
      </div>
      <DetailTopImage ImageSrc="/images/ECloudAI/ECLOUDAIDetail.png" />
    </DetailWrapper>
  );
};

export default ECloudAIDetailTop;
