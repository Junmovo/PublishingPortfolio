import React from 'react';
import * as S from '@/app/styles/Detail';

interface IProblemSectionProps {
  title: string;
}

const ProblemTitle = ({ title }: IProblemSectionProps) => {
  return (
    <>
      <div className="flex flex-col text-[18px] font-[600] bg-[#333]  text-white text-center p-4 rounded-[10px]">
        {title}
      </div>
    </>
  );
};

export default ProblemTitle;
