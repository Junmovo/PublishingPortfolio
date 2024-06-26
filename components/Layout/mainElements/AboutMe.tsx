import React from 'react';
import * as S from '@/styles/Detail';
import { SiNextdotjs } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiReactquery } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <div className="h-[100vh]">
      <div className="gap-4 grid-cols-2 grid mb-[60px]">
        <div>
          <div className="text-[40px] font-[800] mb-4">
            안녕하세요!<br></br>프론트엔드 개발자
            <br /> 강준모입니다.
          </div>
          <div className="text-[18px] text-gray-500">
            디자인부터 최신 프론트엔드 기술까지 꾸준히 배워오며,<br></br> 성장에 대한 두려움 없이 책임감 있게 도전하는
            개발자입니다.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="">
          <div>
            <div className="items-center flex gap-4 pl-2 pb-4">
              <SiNextdotjs size={24} />
              <h2 className="text-[24px] font-[500] font-montserrat">Next.js / React</h2>
            </div>
            <S.TitleUnderText>
              <div>SSR을 활용한 작업이 가능합니다.</div>
              <div>컴포넌트를 활용하여 재사용성을 높힙니다.</div>
              <div>성능 최적화를 통한 UX 향상(Throttling과 Debouncing)</div>
              <div>다양한 라이브러리를 활용할 수 있습니다.</div>
            </S.TitleUnderText>
          </div>
        </div>
        <div>
          <div className="">
            <div>
              <div className="items-center flex gap-4 pl-2 pb-4">
                <SiTypescript size={24} />
                <h2 className="text-[24px] font-[500] font-montserrat">TypeScript / JavaScript</h2>
              </div>
              <S.TitleUnderText>
                <div>타입 지정을 통하여 에러에 대한 방지를합니다.</div>
                <div>Axios를 활용한 데이터 동기 비동기처리를 이해하고 있습니다.</div>
                <div>ES6 문법을 활용합니다.</div>
              </S.TitleUnderText>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <div>
              <div className="items-center flex gap-4 pl-2 pb-4">
                <SiReactquery size={24} />
                <h2 className="text-[24px] font-[500] font-montserrat">Zustand / React-Query</h2>
              </div>
              <S.TitleUnderText>
                <div>전역 상태를 이해하고 있습니다.</div>
                <div>데이터 요청에 대한 상태관리를 이용합니다.</div>
              </S.TitleUnderText>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <div className="items-center flex gap-4 pl-2 pb-4">
              <SiTailwindcss size={24} />
              <h2 className="text-[24px] font-[500] font-montserrat">Tailwind / Styled-Components</h2>
            </div>
            <S.TitleUnderText>
              <div>다양한 형태의 레이아웃을 구성할 수 있습니다.</div>
              <div>Props를 통한 동적 스타일링이 가능합니다.</div>
              <div>코드의 재사용성을 높혀 가독성을 올립니다.</div>
            </S.TitleUnderText>
          </div>
        </div>
        <div>
          <div className="items-center flex gap-4 pl-2 pb-4">
            <FaPhp size={30} />
            <h2 className="text-[24px] font-[600] ">PHP / MySql</h2>
          </div>
          <S.TitleUnderText>
            <div>PHP를 통하여 로그인 세션 구현 한 경험이 있습니다.</div>
            <div>AJax를 활용한 CRUD 를 작업한 경험이 있습니다.</div>
            <div>MySql 테이블 관리 및 기획한 경험이 있습니다.</div>
          </S.TitleUnderText>
        </div>
        <div>
          <div className="flex flex-col">
            <div className="font-[600] text-[20px] mb-4">🏆 커리어 및 자격증</div>
            <div className="ml-8">
              <div className="mb-4 flex flex-col gap-1">
                <div className="font-[600]">이젠컴퓨터아카데미</div>
                <div className="text-[14px] text-gray-400">(스마트웹&콘텐츠개발)웹퍼블리셔 전문가 양성과정</div>
                <div className="text-[14px]">2022.03 ~ 2022.09 (6개월)</div>
              </div>
              <div className="mb-2 ">
                <div className="font-[600]">필커뮤니티</div>
                <div className="font-[600]">개발팀 사원 및 리더</div>
                <div className="text-[14px]">2022.10 - 2024.02 (1년 5개월)</div>
              </div>
              <div className=" flex flex-col gap-1 bg-gray-50 p-3 text-[14px] rounded-[10px] mb-2">
                <div>자사몰 6개 및 스마트스토어 유지보수 </div>
                <div>포토샵을 활용한 각종 이벤트 디자인 및 기획</div>
                <div>자사 관리자 페이지 기능 개발 및 모바일 청첩장 기능 개발</div>
                <div>Php 및 Mysql을 활용한 기능개발 </div>
              </div>

              {/* <div className="font-[600] mb-2">🎖 보유 자격증</div>

              <div className="grid grid-cols-3">
                <div className="text-[14px]">정보처리기능사</div>
                <div className="text-[14px]">웹디자인기능사</div>
                <div className="text-[14px]">컴퓨터그래픽스운용기능사</div>
                <div className="text-[14px]">전자출판기능사</div>
                <div className="text-[14px]">컴퓨터활용능력2급</div>
                <div className="text-[14px]">워드프로세서1급</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
