'use client';
import Progress_Bar from '@/app/components/commons/Progress';
import Detailbedge from '@/app/components/Layout/DetailElements/Detailbedge';
import DetailPicture from '@/app/components/Layout/DetailElements/DetailPicture';
import DetailSection from '@/app/components/Layout/DetailElements/DetailSection';
import ELAVERSEDetailTop from '@/app/components/Layout/DetailElements/ELAVERSEDetailTop';
import Header from '@/app/components/Layout/Header';
import PageDetailWrapper from '@/app/components/Layout/mainElements/PageDetailWrapper';
import { useThemeObserver } from '@/app/hooks/useThemeObserver';
import { ElaverseImageGroup } from '@/app/lib/DetailImgData';
import * as S from '@/app/styles/Detail';
import { MenuItem } from '@/app/types/PortfolioType';
import React, { useState } from 'react';

const Elaverse = () => {
  const [navNumber, setNavNumber] = useState(1);
  const [MainRef] = useThemeObserver(setNavNumber, 1);
  const [ProjectRef] = useThemeObserver(setNavNumber, 2);
  const MenuList: MenuItem[] = [{ contents: 'Detail' }, { contents: 'Work-Detail' }];
  return (
    <>
      <Header position={navNumber} setNavNumber={setNavNumber} MenuList={MenuList} />
      <PageDetailWrapper>
        <section ref={MainRef} id="Detail">
          <ELAVERSEDetailTop />
          <DetailSection>
            <article>
              <div>
                <S.TitleText>👋 프로젝트 소개</S.TitleText>
                <S.TitleUnderText className="md:ml-[40px]">
                  <div>회사 프로젝트</div>
                  <S.ProgressSection>
                    <Progress_Bar per={60} title="기획" />
                    <Progress_Bar per={80} title="디자인" />
                  </S.ProgressSection>
                  <div>
                    사용기술
                    <br />
                    <p>
                      <Detailbedge contents="UIUX" />
                      <Detailbedge contents="Design" />
                      <Detailbedge contents="Figma" />
                      <Detailbedge contents="After Effect" />
                    </p>
                  </div>
                  <div>
                    프로젝트 설명
                    <br />
                    <span className="mt-2 inline-block">
                      ELAVERSE는 학습 세계관을 시각적으로 구현한 아동용 학습화면입니다. <br />
                      <br />
                      아동 학습 콘텐츠의 연령별 특성을 반영한 UI/UX 설계 프로젝트입니다. After Effects를 활용한 모션 그래픽 및 애니메이션 제작을 진행하였으며, 학습 화면, 리포트 페이지, 상세 페이지 등 다양한 서비스 화면을 팀 협업을 통해 구축하였습니다.
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
                    화면 설계 및 UI/UX 기획 디자인
                    <p> - 아동 학습 서비스 특성을 고려한 화면 구조 및 레이아웃 설계</p>
                    <p> - 콘텐츠 전달력을 높이기 위한 UI/UX 개선 작업</p>
                    <p> - 운영 중 사용자 피드백을 반영한 디자인 고도화</p>
                  </div>

                  <div>
                    모션 그래픽 및 인터랙션 디자인
                    <p>- After Effects를 활용한 로딩 애니메이션 및 다양한 효과 제작</p>
                    <p>- 터치 모션 효과 및 효과음을 적용하여 사용자 몰입도 향상</p>
                  </div>

                  <div>
                    학습 메인 페이지 및 리포트 화면 디자인
                    <p> - 학습 현황, 성취도, 리포트 등 교육 콘텐츠 화면 UI/UX 설계 및 디자인</p>
                    <p> - 학부모 사용자를 고려한 직관적이고 간결한 UI/UX 설계</p>
                  </div>

                  <div>
                    협업 및 운영 디자인
                    <p>- 기획자, 개발자와의 협업을 통해 서비스 요구사항을 반영한 디자인 진행</p>
                    <p>- 디자인 가이드 및 컴포넌트 관리로 화면 일관성 유지</p>
                    <p>- 서비스 운영 과정에서 발생하는 UI 개선 및 유지보수 업무 수행</p>
                  </div>

                </S.TitleUnderText>
              </div>
            </article>
          </DetailSection>
        </section>

        <section ref={ProjectRef} id="Work-Detail">
          <DetailPicture ImageGroup={ElaverseImageGroup} />
        </section>
      </PageDetailWrapper>
    </>
  );
};

export default Elaverse;
