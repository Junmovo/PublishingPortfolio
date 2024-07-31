import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa6';
import * as S from '@/app/styles/mainStyles';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="xl:w-[1300px] w-full p-4 flex flex-col items-center justify-center h-[100vh] m-auto relative  text-center  overflow-hidden lg:overflow-visible">
      <div className="text-center text-[50px] font-[800] font-montserrat">Thank you for Watching </div>
      <div className="text-center text-[40px] font-[400]">봐주셔서 감사합니다!😁 </div>
      <div className=" mt-4 leading-6 text-gray-700 dark:text-gray-300">
        새로운 기술에 대한 두려움을 극복하고 끊임없이 성장하는 퍼블리셔가 되고 싶습니다. <br></br>변화와 도전을
        두려워하지 않으며, 항상 배우고 발전하는 자세로 나아가겠습니다.
      </div>
      <div className="flex text-[14px] mt-[40px] gap-4 flex-col lg:flex-row">
        <div className="py-2 px-4 border border-gray-400 flex gap-4 items-center rounded-full text-[14px]">
          <FaPhoneVolume size={12} />
          010-3750-4096
        </div>
        <div>
          <div className="py-2 px-4 border border-gray-400 flex gap-4 items-center rounded-full text-[14px]">
            <IoIosMail size={18} /> maneya71@naver.com
          </div>
        </div>
        <div>
          <Link
            href={'https://github.com/Junmovo'}
            target="_blank"
            className="py-2 px-4 border border-gray-400 flex gap-4 items-center rounded-full text-[14px] hover:bg-black hover:text-white transition"
          >
            <FaGithub /> Github
          </Link>
        </div>
        <S.FrontEndText>FrontEnd</S.FrontEndText>
        <S.CodeText>{'</>'}</S.CodeText>
        <S.NextJsText>Pubulisher</S.NextJsText>
        <S.TypeScript>UI/UX</S.TypeScript>
      </div>
    </div>
  );
};

export default Contact;
