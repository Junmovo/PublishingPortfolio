import React from 'react';
import * as S from '@/app/styles/Detail';

const AboutMeCareer = () => {
  return (
    <article>
      <div className="flex flex-col">
        <div className="font-[600] text-[24px] mb-8">🏆 커리어 및 자격증</div>
        <div className="md:ml-10">
          
        <div className="md:flex mb-10 md:gap-4">
            <div className="md:mb-2 md:w-[30%] mb-[30px]">
              <div className="font-[600] mb-3 text-[20px]">Web Publisher</div>
              <div className="font-[600] mb-1">디자인팀 사원</div>
              <div className="text-[14px] text-gray-400">2024.09 - 재직중</div>
            </div>
            <div className=" flex flex-col gap-1  text-[16px] ">
              <div className="font-[600] text-[18px] mb-2">E-Cloud AI</div>
              <div>
                <S.TitleUnderText>
                  <div>
                    <span>AI 학습 콘텐츠 및 교육 서비스 UI/UX 디자인</span>
                  </div>
                  <div>
                    <span>
                      프로모션 페이지, 광고 소재 등 브랜드 홍보 및 프로모션 운영 지원
                    </span>
                  </div>
                  <div>
                    <span>
                      웹 디자인 및 퍼블리싱을 통한 웹 서비스 전반의 구축 및 운영
                    </span>
                  </div>
                </S.TitleUnderText>
              </div>
            </div>
          </div>

          <div className="md:flex mb-10 md:gap-4">
            <div className="md:mb-2 md:w-[30%] mb-[30px]">
              <div className="font-[600] mb-3 text-[20px]">Web Publisher</div>
              <div className="font-[600] mb-1">개발팀 사원</div>
              <div className="text-[14px] text-gray-400">2022.10 - 2024.02 (1년 5개월)</div>
            </div>
            <div className=" flex flex-col gap-1  text-[16px] ">
              <div className="font-[600] text-[18px] mb-2">필커뮤니티</div>
              <div>
                <S.TitleUnderText>
                  <div>
                    <span>웹디자인, 퍼블리싱, 사이트 유지보수 등 전반적인 사이트 제작 업무 담당</span>
                  </div>
                  <div>
                    <span>
                      관리자 페이지 기능 개발 및 UI 고도화<br />
                      매출·판매 데이터 모니터링을 위한 대시보드 구조 개선
                    </span>
                  </div>
                  <div>
                    <span>Photoshop을 활용한 이벤트 디자인 및 기획 담당</span>
                  </div>
                  <div>
                    <span>PHP 및 MySQL Workbench를 활용한 기능 개발</span>
                  </div>
                </S.TitleUnderText>
              </div>
            </div>
          </div>

          <div className="mb-4 flex flex-col gap-1">
            <div className="md:flex mb-10 md:gap-4">
              <div className="md:mb-2 md:w-[30%] mb-[30px]">
                <div className="font-[600] mb-3 text-[20px]">교육이수</div>
                <div className="font-[600] mb-1">(국비) 웹퍼블리셔 전문가 양성과정</div>
                <div className="text-[14px] text-gray-400">2022.03 ~ 2022.09 (6개월)</div>
              </div>
              <div className=" flex flex-col gap-1  text-[16px] ">
                <div className="font-[600] text-[18px] mb-2">이젠컴퓨터아카데미</div>
                <div>
                  <S.TitleUnderText>
                    <div>
                      <span>(스마트웹&콘텐츠개발) 반응형 UI/UX 웹퍼블리셔 전문가 양성과정</span>
                    </div>
                    <div>
                      <span>UI/UX를 고려한 사용성 중심의 화면 설계 학습</span>
                    </div>
                    <div>
                      <span>웹표준 기반 HTML5/CSS 퍼블리싱 학습</span>
                    </div>
                    <div>
                      <span>JavaScript 및 jQuery 기본 문법과 활용법 학습</span>
                    </div>
                    <div>
                      <span>웹디자인기능사 자격증 취득</span>
                    </div>
                  </S.TitleUnderText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutMeCareer;
