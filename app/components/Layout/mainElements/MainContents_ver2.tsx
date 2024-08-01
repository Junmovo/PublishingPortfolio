'use client';

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import * as S from '@/app/styles/mainStyles';
import MainWrapper from './MainWrapper';

export default function MainContents_ver2(): JSX.Element {
  const el = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Design', 'UI/UX', 'Publisher', 'JavaScript', 'React'],
      typeSpeed: 50,
      loop: true,
      smartBackspace: true,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <MainWrapper>
      <S.FrontEndText>FrontEnd</S.FrontEndText>
      <S.CodeText>{'</>'}</S.CodeText>
      <S.NextJsText>Publisher</S.NextJsText>
      <S.TypeScript>UI/UX</S.TypeScript>
      <div className="flex flex-col text-center lg:text-left">
        <div className="text-[14px] text-gray-400">JM PortFolio</div>
        <h1 className="text-[60px] font-[800] sm:text-[80px] ">
          만나서
          <br className="lg:hidden" /> 반가워 <span className="hidden lg:inline">👋</span>
        </h1>
        <div className="h-[124px]">
          <S.TypedText ref={el} />
        </div>
        <div className="flex gap-2 mt-[10px]">
          <span className="text-[14px] py-[10px] px-[20px] border rounded-full font-montserrat inline-block mb-[10px] dark:border-gray-500">
            Design
          </span>
          <span className="text-[14px] py-[10px] px-[20px] border rounded-full font-montserrat inline-block mb-[10px] dark:border-gray-500">
            Publisher
          </span>
          <span className="text-[14px] py-[10px] px-[20px] border rounded-full font-montserrat inline-block mb-[10px] dark:border-gray-500">
            UI/UX
          </span>
        </div>
      </div>
    </MainWrapper>
  );
}
