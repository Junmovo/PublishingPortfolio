import React from 'react';
import * as S from '@/app/styles/Detail';
import { SiAdobecreativecloud, SiAdobephotoshop, SiNextdotjs } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiReactquery } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';
import AboutMeCard from './components/AboutMeCard';
import AboutMeCareer from './components/AboutMeCareer';

const AboutMe = () => {
  return (
    <div className="pb-[80px] w-[100%] xl:w-[1300px] p-6 xl:p-0  m-auto ">
      <div className="mb-[60px]">
        <div>
          <div className="text-[40px] font-[800] mb-4">
            안녕하세요!<br></br>웹 퍼블리셔
            <br /> 강준모입니다.
          </div>
          <div className="text-[18px] text-gray-400">
            디자인부터 최신 프론트엔드 기술까지 꾸준히 배워오며,<br></br> 성장에 대한 두려움 없이 책임감 있게 도전하는
            강준모입니다.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 w-full gap-5 mb-20 xl:grid-cols-3 lg:grid-cols-2">
        <AboutMeCard title={'Next.js / React'} icon={<SiNextdotjs size={30} />}>
          <div>SSR을 활용한 작업이 가능합니다.</div>
          <div>컴포넌트를 활용하여 재사용성을 높힙니다.</div>
          <div>성능 최적화를 통한 UX 향상(Throttling과 Debouncing)</div>
          <div>다양한 라이브러리를 활용할 수 있습니다.</div>
        </AboutMeCard>
        <AboutMeCard title={'TypeScript / JavaScript'} icon={<SiTypescript size={26} color="#3178c6" />}>
          <div>타입 지정을 통하여 에러에 대한 방지를합니다.</div>
          <div>Axios를 활용한 데이터 동기 비동기처리를 이해하고 있습니다.</div>
          <div>ES6+ 문법을 활용합니다.</div>
        </AboutMeCard>
        <AboutMeCard title={'Zustand / React-Query'} icon={<SiReactquery size={30} />}>
          <div>전역 상태를 이해하고 있습니다.</div>
          <div>데이터 요청에 대한 상태관리를 이용합니다.</div>
        </AboutMeCard>
        <AboutMeCard
          title={
            <>
              <span>Tailwind /</span>
              <br />
              <span>Styled-Components</span>
            </>
          }
          icon={<SiTailwindcss size={30} color="#38bdf8" />}
        >
          <div>다양한 형태의 레이아웃을 구성할 수 있습니다.</div>
          <div>Props를 통한 동적 스타일링이 가능합니다.</div>
          <div>코드의 재사용성을 높혀 가독성을 올립니다.</div>
        </AboutMeCard>

        <AboutMeCard title={'PHP / MySql'} icon={<FaPhp size={30} color="#777bb4" />}>
          <div>PHP를 통하여 로그인 세션 구현 한 경험이 있습니다.</div>
          <div>AJax를 활용한 CRUD 를 작업한 경험이 있습니다.</div>
          <div>MySql-Workbench 테이블 관리 및 기획한 경험이 있습니다.</div>
        </AboutMeCard>

        <AboutMeCard title={'Design Tools'} icon={<SiAdobecreativecloud size={30} color="#d32525" />}>
          <div>Photoshop 기능을 활용하여 다양한 디자인을 구성할 수 있습니다.</div>
          <div>AdobeXD를 활용한 UI 구성을 합니다.</div>
          <div>Illustrator를 통한 간단한 이미지 작업이 가능합니다.</div>
        </AboutMeCard>
      </div>
      <AboutMeCareer />
    </div>
  );
};

export default AboutMe;
