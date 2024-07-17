'use client';
import * as S from '@/app/styles/Detail';
import DetailPicture from '@/app/components/Layout/DetailElements/DetailPicture';
import { MyPortfolioImageGroup } from '@/app/lib/DetailImgData';
import Header from '@/app/components/Layout/Header';
import { useState } from 'react';
import { useThemeObserver } from '@/app/hooks/useThemeObserver';
import PageDetailWrapper from '@/app/components/Layout/mainElements/PageDetailWrapper';
import DetailSection from '@/app/components/Layout/DetailElements/DetailSection';
import MyPortfolioDetailTop from '@/app/components/Layout/DetailElements/myPortfolioDetailTop';
import MyportfolioProblem from '@/app/components/Layout/ProblemElements/MyportfolioProblem';
import Detailbedge from '@/app/components/Layout/DetailElements/Detailbedge';

export default function Myportfolio(): JSX.Element {
  const [navNumber, setNavNumber] = useState(1);
  const [MainRef] = useThemeObserver(setNavNumber, 1);
  const [ProblemRef] = useThemeObserver(setNavNumber, 2);
  const [ProjectRef] = useThemeObserver(setNavNumber, 3);
  const MenuList = [{ contents: 'Detail' }, { contents: 'Problem & Solution' }, { contents: 'Work-Detail' }];

  return (
    <>
      <Header position={navNumber} setNavNumber={setNavNumber} MenuList={MenuList} />
      <PageDetailWrapper>
        <div ref={MainRef} id="Detail">
          <MyPortfolioDetailTop />

          <DetailSection>
            <article>
              <div>
                <S.TitleText>👋 프로젝트 소개</S.TitleText>
                <S.TitleUnderText className="md:ml-[40px]">
                  <div>개인 프로젝트(1인)</div>
                  <div>
                    사용기술
                    <br />
                    <p>
                      <Detailbedge contents="Next14" />
                      <Detailbedge contents="Typescript" />
                      <Detailbedge contents="Tailwind" />
                      <Detailbedge contents="Styled-Components" />
                      <Detailbedge contents="반응형" />
                    </p>
                  </div>
                  <div>
                    프로젝트 설명
                    <br />
                    <span className="mt-2 inline-block">
                      Next.js와 Typescript를 활용하여 제작한 포트폴리오입니다.
                      <br /> 큰 텍스트와 채도를 이용한 컬러 조합으로 가독성을 높혔으며,
                      <br /> 각종 기능 및 디자인을 직접 구현하고 만든 포트폴리오입니다.
                    </span>
                  </div>
                </S.TitleUnderText>
              </div>
            </article>
            <article>
              <div>
                <S.TitleText>🤔 어떠한 기능이 있나요?</S.TitleText>
                <S.TitleUnderText className="md:ml-[40px]">
                  <div>
                    이미지 미리보기 및 preload 구현
                    <p> - Next/Image 태그 및 Antd 라이브러리를 활용하여 제작</p>
                    <p> - preload를 통한 대용량 이미지 우선 다운</p>
                  </div>
                  <div>
                    이미지 더보기 및 필터링
                    <p> - filter를 활용한 이미지 type 구별</p>
                    <p> - slice를 활용한 이미지 더보기 구현</p>
                  </div>
                  <div>
                    IntersectionObserver를 활용한 상태 바 구현
                    <p> - Hooks를 통한 재사용성 향상</p>
                    <p> - 클릭 시 해당 위치로 스크롤 구현</p>
                  </div>
                  <div>
                    Components 활용으로 재사용성 향상
                    <p> - props로 값을 넘겨주며 일관된 디자인 사용구현</p>
                    <p> - 클릭 시 해당 위치로 스크롤 구현</p>
                  </div>
                </S.TitleUnderText>
              </div>
            </article>
          </DetailSection>
        </div>
        <div ref={ProblemRef} id="Problem & Solution">
          <MyportfolioProblem />
        </div>
        <div ref={ProjectRef} id="Work-Detail">
          <DetailPicture ImageGroup={MyPortfolioImageGroup} />
        </div>
      </PageDetailWrapper>
    </>
  );
}
