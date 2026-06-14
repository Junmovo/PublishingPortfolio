import React from 'react';
import Detailbedge from './Detailbedge';
import DetailTitle from './DetailTitle';
import DetailSubcontents from './DetailSubContents';
import DetailTopImage from './DetailTopImage';
import DetailWrapper from './DetailWrapper';

const KoreanDetailTop = () => {
  return (
    <DetailWrapper>
      <div className="w-full lg:w-[50%]">
        <Detailbedge contents="Design" />
        <Detailbedge contents="Publisher" />
        <Detailbedge contents="회사 프로젝트" />
        <DetailTitle subTitle={'어린이 학습프로그램'} title={'국어하다'} date={'24.12.01 - 25.03.01'} />
        <DetailSubcontents
          HomepageLink="https://www.koreahada.com/"
          subContents={
            <>
              어린이 대상 교육 콘텐츠 랜딩페이지 구축과 관리자 대시보드 디자인 및<br/> 퍼블리싱을 담당하였으며, 사용자 편의성을 고려한 UI/UX 개선 작업을 수행하였습니다.
            </>
          }
        />
      </div>
      <DetailTopImage ImageSrc="/images/Korean/KoreanDetail.png" />
    </DetailWrapper>
  );
};

export default KoreanDetailTop;
