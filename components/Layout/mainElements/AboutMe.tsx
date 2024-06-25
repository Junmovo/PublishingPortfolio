import React from 'react';
import * as S from '@/styles/Detail';
import { SiNextdotjs } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';

const AboutMe = () => {
  return (
    <div className="h-[100vh]">
      <div className="gap-4 grid-cols-2 grid mb-[60px]">
        <div>
          <div className="text-[40px] font-[800] mb-4">
            안녕하세요!👋<br></br>프론트엔드 개발자
            <br /> 강준모입니다.
          </div>
          <div className="text-[18px] text-gray-500">
            디자인부터 최신 프론트엔드 기술까지 꾸준히 배워오며,<br></br> 성장에 대한 두려움 없이 책임감 있게 도전하는
            개발자입니다.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <div className="gap-4 col-span-3 grid grid-cols-2">
          <div>
            <div className="items-center flex gap-4 pl-2 pb-4">
              <SiNextdotjs size={24} />
              <h2 className="text-[24px] font-[500] font-montserrat">Next.js</h2>
            </div>
            <S.TitleUnderText>
              <div>SSR을 활용한 작업이 가능합니다.</div>
              <div>컴포넌트를 활용하여 재사용성을 높힙니다.</div>
              <div>Zustand를 이용한 전역 상태관리를 이해하고 있습니다.</div>
              <div>디바운싱, 쓰로틀링을 활용한 최적화에 노력합니다.</div>
              <div>다양한 라이브러리를 활용할 수 있습니다.</div>
            </S.TitleUnderText>
          </div>
          <div>
            <div className="items-center flex gap-4 pl-2 pb-4">
              <SiTypescript size={24} />
              <h2 className="text-[20px] font-montserrat">TypeScript,JavaScript</h2>
            </div>
            <S.TitleUnderText>
              <div>타입 지정을 통하여 에러에 대한 방지를합니다.</div>
              <div>Axios를 활용한 데이터 동기 비동기처리를 합니다.</div>
              <div>Zustand를 이용한 전역 상태관리를 이해하고 있습니다.</div>
              <div>디바운싱, 쓰로틀링을 활용한 최적화에 노력합니다.</div>
              <div>다양한 라이브러리를 활용할 수 있습니다.</div>
            </S.TitleUnderText>
          </div>
        </div>

        <div>
          <div className="">
            <div className="font-[600] text-[18px]">🏆 자격증</div>
            <div>웹디자인기능사</div>
            <div>컴퓨터그래픽스운용기능사</div>
            <div>정보처리기능사</div>
            <div>전자출판기능사</div>
            <div>워드프로세서1급</div>
            <div>컴퓨터활용능력2급</div>
          </div>
        </div>
        <div>
          <div className="">right</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
