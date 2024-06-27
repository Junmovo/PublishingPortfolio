import { IDetailContentsType } from '@/types/PortfolioType';
import React from 'react';

const Detailbedge = ({ contents }: IDetailContentsType) => {
  return <span className="text-[12px] mr-2 rounded-full border py-[5px] px-[10px] inline-block mb-2">{contents}</span>;
};

export default Detailbedge;
