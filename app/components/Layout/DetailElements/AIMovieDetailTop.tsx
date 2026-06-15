import React from 'react';
import Detailbedge from './Detailbedge';
import DetailTitle from './DetailTitle';
import DetailSubcontents from './DetailSubContents';
import DetailTopImage from './DetailTopImage';
import DetailWrapper from './DetailWrapper';

const AIMovieDetailTop = () => {
  return (
    <DetailWrapper>
      <div className="w-full lg:w-[50%]">
        <Detailbedge contents="ChatGPT" />
        <Detailbedge contents="Higgsfield" />
        <DetailTitle subTitle={'AI 영상 활용'} title={'AI 메인 배너'} />
        
      </div>
      
    </DetailWrapper>
  );
};

export default AIMovieDetailTop;
