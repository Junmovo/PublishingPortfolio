import { IDetailTitleType } from '@/types/PortfolioType';
import React from 'react';

const DetailTitle = ({ title, subTitle, date }: IDetailTitleType) => {
  return (
    <>
      <div>
        <span className=" text-[32px] text-gray-600">{subTitle}</span>
        <h1 className="font-[800] text-[64px] mb-5">{title}</h1>
      </div>
      <div>
        <div className="mb-2">{date}</div>
      </div>
    </>
  );
};

export default DetailTitle;
