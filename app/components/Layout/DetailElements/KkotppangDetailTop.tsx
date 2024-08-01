import React from 'react';
import Detailbedge from './Detailbedge';
import DetailTitle from './DetailTitle';
import DetailSubcontents from './DetailSubContents';
import DetailTopImage from './DetailTopImage';
import DetailWrapper from './DetailWrapper';

const KkotppangDetailTop = () => {
  return (
    <DetailWrapper>
      <div className="w-full lg:w-[50%]">
        <Detailbedge contents="Design" />
        <Detailbedge contents="Publisher" />
        <Detailbedge contents="cafe24" />
        <Detailbedge contents="개인 프로젝트" />
        <DetailTitle subTitle={'색조 전문 브랜드'} title={'(주)꽃빵'} date={'22.11.01 - 22.12.16'} />
        <DetailSubcontents
          HomepageLink="https://kkotppang.com/"
          subContents={
            <>
              색조 메이크업 브랜드 꽃빵 사이트를 디자인 하였습니다.
              <br />
              카페24의 기능을 활용하여 추가적인 기능과 사용자 인터페이스를 개선하였습니다.
            </>
          }
        />
      </div>
      <DetailTopImage ImageSrc="/images/portfolio2022/DetailMainImage.png" />
    </DetailWrapper>
  );
};

export default KkotppangDetailTop;
