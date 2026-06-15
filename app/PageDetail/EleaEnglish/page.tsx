'use client';
import Progress_Bar from '@/app/components/commons/Progress';
import Detailbedge from '@/app/components/Layout/DetailElements/Detailbedge';
import DetailPicture from '@/app/components/Layout/DetailElements/DetailPicture';
import DetailSection from '@/app/components/Layout/DetailElements/DetailSection';
import EleaDetailTop from '@/app/components/Layout/DetailElements/EleaDetailTop';
import Header from '@/app/components/Layout/Header';
import PageDetailWrapper from '@/app/components/Layout/mainElements/PageDetailWrapper';
import { useThemeObserver } from '@/app/hooks/useThemeObserver';
import { EleaEnglishImageGroup } from '@/app/lib/DetailImgData';
import * as S from '@/app/styles/Detail';
import { MenuItem } from '@/app/types/PortfolioType';
import React, { useState } from 'react';

const EleaEnglishPage = () => {
  const [navNumber, setNavNumber] = useState(1);
  const [MainRef] = useThemeObserver(setNavNumber, 1);
  const [ProjectRef] = useThemeObserver(setNavNumber, 2);
  const MenuList: MenuItem[] = [{ contents: 'Detail' }, { contents: 'Work-Detail' }];
  return (
    <>
      <Header position={navNumber} setNavNumber={setNavNumber} MenuList={MenuList} />
      <PageDetailWrapper>
        <section ref={MainRef} id="Detail">
          <EleaDetailTop />
          <DetailSection>
            <article>
              <div>
                <S.TitleText>👋 프로젝트 소개</S.TitleText>
                <S.TitleUnderText className="md:ml-[40px]">
                  <div>회사 프로젝트</div>
                  <S.ProgressSection>
                    <Progress_Bar per={80} title="기획" />
                    <Progress_Bar per={70} title="디자인" />
                    <Progress_Bar per={100} title="퍼블리싱" />
                  </S.ProgressSection>
                  <div>
                    사용기술
                    <br />
                    <p>
                      <Detailbedge contents="Design" />
                      <Detailbedge contents="Publishing" />
                      <Detailbedge contents="UIUX" />
                    </p>
                  </div>
                  <div>
                    프로젝트 설명
                    <br />
                    <span className="mt-2 inline-block">
                      엘리아영어는 영어 교육 프랜차이즈 브랜드 홈페이지입니다. <br />
                      <br />
                      사용자 중심의 UI/UX 설계를 바탕으로 브랜드 소개, 가맹 상담, 지사장 모집, 이벤트 홍보 등 다양한 목적의 콘텐츠를 효율적으로 제공할 수 있도록 디자인 및 퍼블리싱 작업을 진행하였습니다.<br/><br/> 현재까지 유지보수 및 콘텐츠 업데이트를 통해 안정적으로 운영되고 있습니다.
                    </span>
                  </div>
                </S.TitleUnderText>
              </div>
            </article>
            <article>
              <div>
                <S.TitleText>🤔 어떠한 작업을 하셨나요?</S.TitleText>
                <S.TitleUnderText className="md:ml-[40px]">
                  <div>
                    화면 설계 및 UI/UX 개선
                    <p> - 사용자 동선을 고려한 화면 구조 및 레이아웃 설계</p>
                    <p> - 콘텐츠 전달력을 높이기 위한 UI/UX 개선 작업</p>
                    <p> - 운영 중 사용자 피드백을 반영한 디자인 고도화</p>
                  </div>

                  <div>
                    애니메이션 및 사용자 경험 향상
                    <p> - 스크롤 기반 인터랙션 및 애니메이션 구현</p>
                    <p> - 사용자 집중도를 높이는 모션 효과 적용</p>
                    <p> - 브랜드 이미지에 맞춘 동적 콘텐츠 연출</p>
                  </div>
                  <div>
                    콘텐츠 및 기능 개발
                    <p> - Swiper를 활용한 배너 및 슬라이드 기능 구현</p>
                    <p> - 이벤트 및 프로모션 페이지 제작</p>
                    <p> - 직관적인 정보 전달을 위한 UI 구성 및 개선</p>
                  </div>

                </S.TitleUnderText>
              </div>
            </article>
          </DetailSection>
        </section>

        <section ref={ProjectRef} id="Work-Detail">
          <DetailPicture ImageGroup={EleaEnglishImageGroup} />
        </section>
      </PageDetailWrapper>
    </>
  );
};

export default EleaEnglishPage;
