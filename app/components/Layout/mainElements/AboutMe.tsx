import React from 'react';
import { SiAdobephotoshop } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa';
import { FaFigma } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import AboutMeCard from './components/AboutMeCard';
import AboutMeCareer from './components/AboutMeCareer';
import { FaHtml5 } from 'react-icons/fa';
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";

const AboutMe = () => {
  return (
    <article className="pb-[80px] w-[100%] xl:w-[1300px] p-6 xl:p-0  m-auto ">
      <div className="mb-[60px]">
        <div className="text-[32px] font-[800] mb-8 lg:text-[40px]">
          안녕하세요!<br></br>성장을 두려워하지 않는
          <br /> 웹 디자이너 강준모입니다.
        </div>

        <div className="text-[16px] mt-3 text-gray-400 leading-7">
          디자인부터 최신 프론트엔드 기술까지 꾸준히 배워오며,
          <br /> 사용자의 경험을 우선으로 생각하여 UI/UX를 더욱 고민하고 최상의 경험을 제공하기 위해 노력합니다.
          <br />
          좋아하면 더욱 잘 한다는 마음가짐으로 꾸준하게 성장하고 있습니다.
        </div>
      </div>
      <div className="grid grid-cols-1 w-full gap-5 mb-20 xl:grid-cols-3 lg:grid-cols-2">
        <AboutMeCard title={'Photoshop / Illustrator'} icon={<SiAdobephotoshop size={30} color="#31A8FF" />}>
          <div>각종 랜딩페이지 및 배너 디자인을 작업합니다.</div>
          <div>Photoshop을 활용한 이미지 보정, 합성 및 그래픽 디자인이 가능합니다.</div>
          <div>Illustrator를 활용하여 전단지, X배너, 리플릿 등 인쇄물을 제작한 경험이 있습니다.</div>
        </AboutMeCard>
        <AboutMeCard title={'Figma'} icon={<FaFigma size={30} />}>
          <div>컴포넌트 기반으로 유지보수가 용이한 UI를 설계합니다</div>
          <div>Auto Layout을 활용한 반응형 디자인 및 협업이 가능합니다.</div>
          <div>팀원들과 실시간 피드백 및 디자인 시스템을 공유하며 협업한 경험이 있습니다.</div>
        </AboutMeCard>

        <AboutMeCard title={'After Effects / Premiere Pro'} icon={<SiAdobeaftereffects size={30} color="#777bb4" />}>
          <div>모션 그래픽 및 UI 인터랙션 영상을 제작한 경험이 있습니다.</div>
          <div>키프레임, 마스크를 활용한 애니메이션 작업이 가능합니다.</div>
          <div>Lottie 애니메이션을 활용한 작업이 가능합니다.</div>
        </AboutMeCard>

        <AboutMeCard title={'HTML / CSS'} icon={<FaHtml5 size={30} color="#d86f21" />}>
          <div>웹표준 & 웹접근성을 고려하여 시맨틱 태그를 적극 활용합니다.</div>
          <div>미디어쿼리 이용 반응형 웹 제작합니다.</div>
          <div>웹 사이트 구축 및 디자인을 기획 및 제작합니다.</div>
          <div>Flex, Grid 등 다양한 레이아웃을 구성할 수 있습니다.</div>
        </AboutMeCard>
        <AboutMeCard title={'Javascript'} icon={<IoLogoJavascript size={26} color="#F7DF1E" />}>
          <div>라이브러리를 활용한 다양한 기능을 구현할 수 있습니다.</div>
          <div>JQuery를 활용한 기능을 구현할 수 있습니다.</div>
          <div>인터렉티브한 효과를 구현할 수 있습니다.</div>
          <div>ES6+ 문법을 활용합니다.</div>
        </AboutMeCard>
        
        <AboutMeCard title={'React / Next.js'} icon={<FaReact size={30} color="#61DAFB" />}>
          <div>SSR을 활용한 작업이 가능합니다.</div>
          <div>컴포넌트를 활용하여 재사용성을 높힙니다.</div>
          <div>성능 최적화를 통한 UX 향상(Throttling과 Debouncing)</div>
        </AboutMeCard>

        {/* <AboutMeCard title={'PHP / MySql'} icon={<FaPhp size={30} color="#777bb4" />}>
          <div>PHP를 통하여 사이트와 카페24를 관리하였습니다.</div>
          <div>AJax를 활용한 CRUD 를 작업한 경험이 있습니다.</div>
          <div>MySql-Workbench 테이블 관리 및 기획한 경험이 있습니다.</div>
        </AboutMeCard> */}

      </div>
      <AboutMeCareer />
    </article>
  );
};

export default AboutMe;
