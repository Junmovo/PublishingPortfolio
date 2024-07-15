import React from 'react';
import Detailbedge from './Detailbedge';
import DetailTitle from './DetailTitle';
import DetailSubcontents from './DetailSubContents';
import DetailTopImage from './DetailTopImage';

const DesignDetailTop = () => {
  return (
    <div className="flex w-full mt-[30px] p-[20px]">
      <div className="w-full ">
        <Detailbedge contents="Design" />
        <Detailbedge contents="Photoshop" />
        <Detailbedge contents="Illustrator" />
        <DetailTitle subTitle={'그래픽 디자인'} title={'디자인 작업물'} />
      </div>
    </div>
  );
};

export default DesignDetailTop;
