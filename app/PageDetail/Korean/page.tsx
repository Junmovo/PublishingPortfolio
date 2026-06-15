'use client';
import Progress_Bar from '@/app/components/commons/Progress';
import Detailbedge from '@/app/components/Layout/DetailElements/Detailbedge';
import DetailPicture from '@/app/components/Layout/DetailElements/DetailPicture';
import DetailSection from '@/app/components/Layout/DetailElements/DetailSection';
import KoreanDetailTop from '@/app/components/Layout/DetailElements/KoreanDetailTop';
import Header from '@/app/components/Layout/Header';
import PageDetailWrapper from '@/app/components/Layout/mainElements/PageDetailWrapper';
import { useThemeObserver } from '@/app/hooks/useThemeObserver';
import { KoreanImageGroup } from '@/app/lib/DetailImgData';
import * as S from '@/app/styles/Detail';
import { MenuItem } from '@/app/types/PortfolioType';
import React, { useState } from 'react';

const Korean = () => {
  const [navNumber, setNavNumber] = useState(1);
  const [MainRef] = useThemeObserver(setNavNumber, 1);
  const [ProjectRef] = useThemeObserver(setNavNumber, 2);
  const MenuList: MenuItem[] = [{ contents: 'Detail' }, { contents: 'Work-Detail' }];
  return (
    <>
      <Header position={navNumber} setNavNumber={setNavNumber} MenuList={MenuList} />
      <PageDetailWrapper>
        <section ref={MainRef} id="Detail">
          <KoreanDetailTop />
          <DetailSection>
            <article>
              <div>
                <S.TitleText>👋 프로젝트 소개</S.TitleText>
                <S.TitleUnderText className="md:ml-[40px]">
                  <div>회사 프로젝트</div>
                  <S.ProgressSection>
                    <Progress_Bar per={100} title="기획" />
                    <Progress_Bar per={100} title="디자인" />
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
                      국어하다는 어린이를 위한 국어 학습 프로그램 프로젝트입니다.<br/><br/>
                      학부모를 주요 사용자로 고려한 서비스 랜딩페이지 및 프로모션 페이지를 제작하였으며, 어린이 연령층의 특성을 반영한 학습 화면 UI/UX를 설계하였습니다.
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
                    어린이 학습 콘텐츠 UI/UX 디자인
                    <p>- 연령대별 사용자 특성을 반영한 학습 화면 및 인터페이스 디자인</p>
                    <p>- 학습 흐름을 고려한 직관적 UI/UX 설계로 사용 편의성 향상</p>
                    <p>- 디자인 일관성 및 확장성을 위한 컴포넌트 기반 화면 구조 구축</p>
                  </div>

                  <div>
                    선생님 · 관리자 페이지 UI/UX 설계
                    <p>- 사용자 역할에 맞는 정보 구조(IA) 설계 및 화면 구성</p>
                    <p>- 중요 정보의 우선순위를 고려한 시각적 계층 구조 구축</p>
                    <p>- 직관적인 데이터 관리 및 업무 처리를 위한 UI/UX 개선</p>
                  </div>

                  <div>
                    각종 이벤트 랜딩페이지 및 마케팅 디자인
                    <p>- 프로모션 목적에 맞춘 이벤트 페이지 기획 및 디자인 제작</p>
                    <p>- 사용자 참여를 유도하는 배너, 카드뉴스 및 마케팅 콘텐츠 디자인</p>
                    <p>- 온라인 광고 및 SNS 홍보용 마케팅 소재 제작</p>
                  </div>

                </S.TitleUnderText>
              </div>
            </article>
          </DetailSection>
        </section>

        <section ref={ProjectRef} id="Work-Detail">
          <DetailPicture ImageGroup={KoreanImageGroup} />
        </section>
      </PageDetailWrapper>
    </>
  );
};

export default Korean;
