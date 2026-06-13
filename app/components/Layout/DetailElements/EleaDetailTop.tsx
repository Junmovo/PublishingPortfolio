import React from 'react';
import Detailbedge from './Detailbedge';
import DetailTitle from './DetailTitle';
import DetailSubcontents from './DetailSubContents';
import DetailTopImage from './DetailTopImage';
import DetailWrapper from './DetailWrapper';

const EleaDetailTop = () => {
  return (
    <DetailWrapper>
      <div className="w-full lg:w-[50%]">
        <Detailbedge contents="Design" />
        <Detailbedge contents="Publisher" />
        <Detailbedge contents="회사 프로젝트" />
        <DetailTitle subTitle={'어학원 프렌차이즈'} title={'엘리아영어'} date={'25.04.01 - 진행중'} />
        <DetailSubcontents
          HomepageLink="https://eleaenglish.com/"
          subContents={
            <>
              엘리아영어 프랜차이즈 홈페이지의 UI/UX , 웹 디자인, 퍼블리싱 작업을 진행하였습니다.<br/> 브랜드 아이덴티티를 반영한 웹 환경을 구축하였으며,<br/>  현재까지 지속적인 기능 개선 및 콘텐츠 업데이트를 통해 운영을 지원하고 있습니다.
            </>
          }
        />
      </div>
      <DetailTopImage ImageSrc="/images/Feelcard/FeelcardDetail.png" />
    </DetailWrapper>
  );
};

export default EleaDetailTop;
