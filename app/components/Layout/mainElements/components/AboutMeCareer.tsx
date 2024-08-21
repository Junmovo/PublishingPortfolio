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
              <div className="font-[600] mb-1">개발팀 사원</div>
              <div className="text-[14px] text-gray-400">2022.10 - 2024.02 (1년 5개월)</div>
            </div>
            <div className=" flex flex-col gap-1  text-[16px] ">
              <div className="font-[600] text-[18px] mb-2">필커뮤니티</div>
              <div>
                <S.TitleUnderText>
                  <div>
                    <span>웹디자인, 퍼블리싱, 사이트 유지보수 등 전반적인 사이트 제작업무를 담당하였습니다.</span>
                  </div>
                  <div>
                    <span>
                      자사 관리자 페이지 기능 개발을 하였으며, 매출 및 판매량을 종합하여 쉽게 파악할 수 있는 UI로
                      변경하였습니다.
                    </span>
                  </div>
                  <div>
                    <span>포토샵을 활용한 각종 이벤트 디자인 및 기획을 담당하였습니다.</span>
                  </div>
                  <div>
                    <span>PHP 및 MySql-Workbench을 활용하여 기능을 개발하였습니다.</span>
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
                      <span>(스마트웹&콘텐츠개발)반응형 UI/UX 웹퍼블리셔 전문가 양성과정</span>
                    </div>
                    <div>
                      <span>사용자의 UI/UX를 고려하여, 사용성을 높혔습니다.</span>
                    </div>
                    <div>
                      <span>웹표준을 준수하여 작업하는 방법을 배웠습니다.(HMTL5/CSS)</span>
                    </div>
                    <div>
                      <span>JavaScript & jQuery 사용법을 배웠습니다.</span>
                    </div>
                    <div>
                      <span>웹디자인기능사 자격증을 취득하였습니다.</span>
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
