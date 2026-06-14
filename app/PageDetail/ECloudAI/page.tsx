'use client';
import Progress_Bar from '@/app/components/commons/Progress';
import Detailbedge from '@/app/components/Layout/DetailElements/Detailbedge';
import DetailPicture from '@/app/components/Layout/DetailElements/DetailPicture';
import DetailSection from '@/app/components/Layout/DetailElements/DetailSection';
import ECloudAIDetailTop from '@/app/components/Layout/DetailElements/ECloudAIDetailTop';
import Header from '@/app/components/Layout/Header';
import PageDetailWrapper from '@/app/components/Layout/mainElements/PageDetailWrapper';
import { useThemeObserver } from '@/app/hooks/useThemeObserver';
import { ImageFeelCardGroup } from '@/app/lib/DetailImgData';
import * as S from '@/app/styles/Detail';
import { MenuItem } from '@/app/types/PortfolioType';
import React, { useState } from 'react';

const ECloudAI = () => {
  const [navNumber, setNavNumber] = useState(1);
  const [MainRef] = useThemeObserver(setNavNumber, 1);
  const [ProjectRef] = useThemeObserver(setNavNumber, 2);
  const MenuList: MenuItem[] = [{ contents: 'Detail' }, { contents: 'Work-Detail' }];
  return (
    <>
      <Header position={navNumber} setNavNumber={setNavNumber} MenuList={MenuList} />
      <PageDetailWrapper>
        <section ref={MainRef} id="Detail">
          <ECloudAIDetailTop />
          <DetailSection>
            <article>
              <div>
                <S.TitleText>👋 프로젝트 소개</S.TitleText>
                <S.TitleUnderText className="md:ml-[40px]">
                  <div>회사 프로젝트</div>
                  <S.ProgressSection>
                    <Progress_Bar per={100} title="기획" />
                    <Progress_Bar per={80} title="디자인" />
                    <Progress_Bar per={100} title="퍼블리싱" />
                  </S.ProgressSection>
                  <div>
                    사용기술
                    <br />
                    <p>
                      <Detailbedge contents="UIUX" />
                      <Detailbedge contents="Design" />
                      <Detailbedge contents="Figma" />
                      <Detailbedge contents="Publishing" />
                    </p>
                  </div>
                  <div>
                    프로젝트 설명
                    <br />
                    <span className="mt-2 inline-block">
                      E-Cloud AI 기업 기술 홈페이지 리뉴얼 프로젝트입니다.<br/><br/>
                      투자사 유치를 위한 최신 웹 디자인 트렌드를 반영하여 UI/UX를 개선하였습니다.<br/>다양한 인터랙션 요소와 반응형 웹 환경을 고려한 설계를 통해 사용자 경험을 향상시키고, 기업의 기술력과 핵심 가치를 효과적으로 전달할 수 있도록 디자인을 진행하고 있습니다.
                      
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
                    기업 홈페이지 및 서브페이지 구축
                    <p>- 회사 소개 및 채용 페이지 UI/UX 설계 및 디자인</p>
                    <p>- 기업 브랜드 아이덴티티를 반영한 반응형 웹 페이지 제작</p>
                    <p>- 정보 전달력과 사용자 경험을 고려한 콘텐츠 구조 설계</p>
                    <p>- 유지보수 및 확장성을 고려한 홈페이지 구조 구축</p>
                  </div>

                  <div>
                    AI 기반 메인 히어로 배너 영상 제작
                    <p>- AI 생성 도구(Higgsfield, ChatGPT)를 활용한 영상 콘셉트 기획 및 프롬프트 설계</p>
                    <p>- 브랜드 메시지와 서비스 방향성에 맞는 AI 영상 콘텐츠 제작</p>
                    <p>- Photoshop을 활용한 후반 보정 및 합성 작업으로 완성도 향상</p>
                  </div>

                  <div>
                    반응형 웹 기반 UI/UX 설계 (진행 중)
                    <p>- 최신 웹 트렌드를 반영한 심플하고 직관적인 UI/UX 설계</p>
                    <p>- 투자자 및 기업 고객을 고려한 정보 중심의 콘텐츠 구조 설계</p>
                    <p>- 다양한 디바이스 환경에 최적화된 반응형 웹 디자인 구축</p>
                  </div>

                </S.TitleUnderText>
              </div>
            </article>
          </DetailSection>
        </section>

        <section ref={ProjectRef} id="Work-Detail">
          <DetailPicture ImageGroup={ImageFeelCardGroup} />
        </section>
      </PageDetailWrapper>
    </>
  );
};

export default ECloudAI;
