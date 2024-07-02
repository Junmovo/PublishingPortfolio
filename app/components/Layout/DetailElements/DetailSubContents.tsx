import { IDetailSubcontentsType } from '@/app/types/PortfolioType';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';

const DetailSubcontents = ({ HomepageLink, subContents, githubLink }: IDetailSubcontentsType) => {
  return (
    <>
      <div className="text-gray-500 dark:text-gray-400">{subContents}</div>
      <div className="flex gap-4">
        <div className="mt-10 flex  border-black bg-black text-white hover:translate-y-[-5px] transition border rounded-full text-[14px] dark:border-white">
          <Link
            href={HomepageLink}
            target="_blank"
            className="p-[18px] w-[250px] text-center items-center px-[15px] flex justify-center transition"
          >
            홈페이지 바로가기
            <IoIosArrowForward size={16} />
          </Link>
        </div>
        {githubLink ? (
          <div className="mt-10 flex  border-black  border rounded-full text-[14px] dark:border-white">
            <Link href={githubLink} className="flex items-center p-[10px] px-[15px]">
              GitHub
              <FaGithub size={16} className="ml-[5px]" />
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default DetailSubcontents;
