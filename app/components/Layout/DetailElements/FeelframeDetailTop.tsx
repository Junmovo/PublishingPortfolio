import React from 'react';
import Detailbedge from './Detailbedge';
import DetailTitle from './DetailTitle';
import DetailSubcontents from './DetailSubContents';
import DetailTopImage from './DetailTopImage';

const FeelFrameDetailTop = () => {
  return (
    <div className="flex justify-between items-end mt-[30px] p-[20px] border-b-[1px] pb-[60px]">
      <div className=" w-[50%]">
        <Detailbedge contents="Publisher" />
        <Detailbedge contents="회사 프로젝트" />
        <DetailTitle subTitle={'또 다른 감성액자'} title={'필프레임'} date={'23.06.01 - 24.01.01'} />
        <DetailSubcontents
          HomepageLink="https://feelframe.co.kr/"
          subContents={
            <>
              기존의 카페24를 사용하던 사이트를 새롭고 세련된 디자인으로 리뉴얼하고,
              <br /> 관리자 페이지와 사용자 인터페이스를 개선하여 사용 편의성을 한층 높였습니다.
            </>
          }
        />
      </div>
      <DetailTopImage ImageSrc="/images/feelframe/DetailMainImage.png" />
    </div>
  );
};

export default FeelFrameDetailTop;
