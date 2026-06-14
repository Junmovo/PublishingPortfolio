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
        <Detailbedge contents="UIUX" />
        <Detailbedge contents="회사 프로젝트" />
        <DetailTitle subTitle={'아동용 학습화면'} title={'ELAVERSE'} date={'25.03.01 - 진행중'} />
        <DetailSubcontents
          HomepageLink="https://eleaenglish.com/"
          subContents={
            <>
              엘리아영어의 학습 세계관을 시각적으로 구현한 아동용 학습 화면입니다.<br/> 연령층의 이해도를 고려하여 UI/UX를 설계하였으며,<br/> 학습에 대한 흥미와 집중도를 높일 수 있는 디자인을 적용하였습니다.
            </>
          }
        />
      </div>
      <DetailTopImage ImageSrc="/images/Elaverse/ElaverseDetail.png" />
    </DetailWrapper>
  );
};

export default EleaDetailTop;
