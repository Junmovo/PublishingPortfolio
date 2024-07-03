import React from 'react';
import Detailbedge from './Detailbedge';
import DetailTitle from './DetailTitle';
import DetailSubcontents from './DetailSubContents';
import DetailTopImage from './DetailTopImage';

const BarunbojungDetailTop = () => {
  return (
    <div className="flex justify-between items-end mt-[30px] p-[20px] border-b-[1px] pb-[60px]">
      <div className=" w-[50%]">
        <Detailbedge contents="Publisher" />
        <Detailbedge contents="Design" />
        <Detailbedge contents="회사 프로젝트" />
        <DetailTitle subTitle={'프리미엄 사진보정'} title={'바른보정'} date={'22.11.01 - 22.12.16'} />
        <DetailSubcontents
          HomepageLink="https://barunbojung.com/"
          subContents={
            <>
              사진보정 전문업체 바른보정의 웹사이트를 새롭게 리뉴얼하였습니다.
              <br />
              <br />
              직관적인 UI 환경을 통해 전화번호와 이름만 입력하면 간편하게 신청이 가능하며, <br></br>이를 통해 고객
              만족도를 크게 향상시켰습니다.
            </>
          }
        />
      </div>
      <DetailTopImage ImageSrc="/images/barunbojung/DetailMainImage.png" />
    </div>
  );
};

export default BarunbojungDetailTop;
