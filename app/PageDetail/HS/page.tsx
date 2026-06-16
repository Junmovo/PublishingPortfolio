'use client';
import Progress_Bar from '@/app/components/commons/Progress';
import Detailbedge from '@/app/components/Layout/DetailElements/Detailbedge';
import DetailPicture from '@/app/components/Layout/DetailElements/DetailPicture';
import DetailSection from '@/app/components/Layout/DetailElements/DetailSection';
import HSDetailTop from '@/app/components/Layout/DetailElements/HSDetailTop';
import Header from '@/app/components/Layout/Header';
import PageDetailWrapper from '@/app/components/Layout/mainElements/PageDetailWrapper';
import { useThemeObserver } from '@/app/hooks/useThemeObserver';
import { HSImageGroup } from '@/app/lib/DetailImgData';
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
          <HSDetailTop />
          <DetailSection>
            <article>
              <div>
                <S.TitleText>👋 프로젝트 소개</S.TitleText>
                <S.TitleUnderText className="md:ml-[40px]">
                  <div>회사 프로젝트</div>
                  <S.ProgressSection>
                    <Progress_Bar per={100} title="기획" />
                    <Progress_Bar per={100} title="디자인" />
                  </S.ProgressSection>
                  <div>
                    사용기술
                    <br />
                    <p>
                      <Detailbedge contents="UI/UX" />
                      <Detailbedge contents="Design" />
                      <Detailbedge contents="Figma" />
                      <Detailbedge contents="Illustrator" />
                    </p>
                  </div>
                  <div>
                    프로젝트 설명
                    <br />
                    <span className="mt-2 inline-block text-[15px]">
                      외대HS어학원 프랜차이즈 브랜드의 온·오프라인 홍보 디자인을 담당하였습니다.<br/><br/>
                      전단지, X배너, 홍보물 등 다양한 마케팅 콘텐츠를 제작하였으며, 각 지점의 니즈와 타겟층을 고려한 맞춤형 디자인을 제공하였습니다.
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
                    오프라인 마케팅 디자인
                    <p>- 전단지, X배너, 현수막 등 홍보물 디자인 제작</p>
                    <p>- 지점별 특성과 원장님의 요구사항을 반영한 맞춤형 디자인 진행</p>
                    <p>- 정보 전달력과 시인성을 고려한 레이아웃 및 콘텐츠 구성</p>
                    <p>- 디자인 개선을 통한 브랜드 이미지 강화 및 모집 홍보 효과 향상</p>
                  </div>
                  <div>
                    랜딩페이지 및 모집 프로모션 디자인
                    <p>- 학원별 모집 시즌에 맞춘 랜딩페이지 및 홍보 페이지 디자인 제작</p>
                    <p>- 학부모 기반으로 한 콘텐츠 구성 및 UI/UX 설계</p>
                    <p>- 디자인 개선을 통한 상담 문의 증가 및 모집 홍보 효과 향상</p>
                  </div>

                </S.TitleUnderText>
              </div>
            </article>
          </DetailSection>
        </section>

        <section ref={ProjectRef} id="Work-Detail">
          <DetailPicture ImageGroup={HSImageGroup} />
        </section>
      </PageDetailWrapper>
    </>
  );
};

export default Korean;
