import React from 'react';
import * as S from '@/styles/Detail';

import { SiNextdotjs } from 'react-icons/si';
import IconButton from '@/components/commons/IconButton';

interface AboutCardProps {
  children: React.ReactNode;
  title: string | React.ReactNode;
  icon: React.ReactNode;
}

const AboutMeCard = ({ children, title, icon }: AboutCardProps) => {
  return (
    <div className=" rounded-[10px] p-8 bg-slate-50 dark:bg-[#2525259d]">
      <div>
        <div className="mb-4 border flex bg-white dark:bg-[#121212] dark:border-black rounded-full w-[50px] h-[50px] items-center justify-center">
          {icon}
        </div>
        <div className="items-center flex gap-4  pb-4">
          <h2 className="text-[24px] font-[500] font-montserrat">{title}</h2>
        </div>
        <S.AboutMeUnderText className="ml-[0px]">{children}</S.AboutMeUnderText>
      </div>
    </div>
  );
};

export default AboutMeCard;
