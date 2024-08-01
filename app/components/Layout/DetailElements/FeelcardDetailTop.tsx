import React from 'react';
import Detailbedge from './Detailbedge';
import DetailTitle from './DetailTitle';
import DetailSubcontents from './DetailSubContents';
import DetailTopImage from './DetailTopImage';
import DetailWrapper from './DetailWrapper';

const FeelcardDetailTop = () => {
  return (
    <DetailWrapper>
      <div className="w-full lg:w-[50%]">
        <Detailbedge contents="Publisher" />
        <Detailbedge contents="회사 프로젝트" />
        <DetailTitle subTitle={'모바일 청첩장'} title={'필카드'} date={'23.10.01 - 23.12.15'} />
        <DetailSubcontents
          HomepageLink="https://smartstore.naver.com/feelframe/products/6804568774?"
          subContents={
            <>
              모바일 청첩장을 간단하게 만들 수 있는 에디터 필카드입니다.
              <br /> 기존 노후화된 기능들을 업데이트하며, 다양한 커스터마이징 옵션을 제공하여
              <br />
              사용성을 향상시키고, 사용자를 1.5배 늘린 경험이 있습니다.
            </>
          }
        />
      </div>
      <DetailTopImage ImageSrc="/images/Feelcard/FeelcardDetail.png" />
    </DetailWrapper>
  );
};

export default FeelcardDetailTop;
