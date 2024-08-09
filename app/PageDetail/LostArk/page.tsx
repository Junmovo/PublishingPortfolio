'use client';
import LostarkDetailProblem from '@/app/components/Layout/ProblemElements/LostarkDetailProblom';
import LostarkDetailTop from '@/app/components/Layout/DetailElements/LostarkDetailTop';
import * as S from '@/app/styles/Detail';
import DetailPicture from '@/app/components/Layout/DetailElements/DetailPicture';
import { ImageGroup } from '@/app/lib/DetailImgData';
import Header from '@/app/components/Layout/Header';
import { useState } from 'react';
import { useThemeObserver } from '@/app/hooks/useThemeObserver';
import PageDetailWrapper from '@/app/components/Layout/mainElements/PageDetailWrapper';
import DetailSection from '@/app/components/Layout/DetailElements/DetailSection';
import Detailbedge from '@/app/components/Layout/DetailElements/Detailbedge';
import Progress_Bar from '@/app/components/commons/Progress';

export default function LostArkDetail(): JSX.Element {
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
          <LostarkDetailTop />

          <DetailSection>
            <article>
              <div>
                <S.TitleText>👋 프로젝트 소개</S.TitleText>
                <S.TitleUnderText className="md:ml-[40px]">
                  <div>개인 프로젝트(1인)</div>
                  <S.ProgressSection>
                    <Progress_Bar per={100} title="기획" />
                    <Progress_Bar per={100} title="개발" />
                    <Progress_Bar per={100} title="디자인" />
                    <Progress_Bar per={100} title="퍼블리싱" />
                  </S.ProgressSection>
                  <div>
                    사용기술
                    <br />
                    <p>
                      <Detailbedge contents="OpenAPI" />
                      <Detailbedge contents="Next.js(v14)" />
                      <Detailbedge contents="Typescript" />
                      <Detailbedge contents="Tailwind" />
                      <Detailbedge contents="Zustand" />
                      <Detailbedge contents="React-Query" />
                    </p>
                  </div>
                  <div>
                    프로젝트 설명
                    <br />
                    <span className="mt-2 inline-block">
                      코니콩은 RPG게임 로스트아크의 전적검색 시스템입니다.
                      <br />
                      기존의 로스트아크 전적 검색 사이트의 UI를 대폭 개선하여,
                      <br /> 사용자가 핵심 정보를 한눈에 볼 수 있도록 편리하게 재구성하였습니다.
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
                    Axios 및 Axios Instance를 활용한 코드 가독성 향상
                    <p> - Axios baseURL을 활용하여 불필요 코드 제거</p>
                  </div>
                  <div>
                    Zustand의 전역변수를 활용한 최근검색어, 즐겨찾기 기능
                    <p> - persist를 활용한 로컬스토리지 저장</p>
                    <p> - 검색 시 Axios 요청으로 해당 캐릭터 데이터 값 저장</p>
                  </div>
                  <div>
                    React-Query를 이용한 데이터 요청 최소화
                    <p> - 데이터 캐싱의 강점을 이용하여 반복적인 데이터 요청 최소화</p>
                    <p> - 같은요청 반복 시 gcTime 및 staleTime을 이용하여 데이터 캐싱</p>
                  </div>
                  <div>
                    useState를 활용한 공지사항 필터링기능
                    <p> - slice 함수와 reduce를 활용하여 10개씩 타입 분류</p>
                  </div>
                  <div>
                    ShadCN 라이브러리를 활용한 사용자 경험 개선
                    <p> - DarkMode 구현</p>
                    <p> - 데이터 로딩 시 Skeleton UI 작업</p>
                  </div>
                  <div>
                    다른사람에게 쉽게 공유 할 수 있는 URL 복사 기능
                    <p> - ToastUI 를 활용한 정보 제공</p>
                    <p> - clipboard를 활용한 현재 복사</p>
                  </div>
                </S.TitleUnderText>
              </div>
            </article>
          </DetailSection>
        </div>
        <div ref={ProblemRef} id="Problem & Solution">
          <LostarkDetailProblem />
        </div>
        <div ref={ProjectRef} id="Work-Detail">
          <DetailPicture ImageGroup={ImageGroup} />
        </div>
      </PageDetailWrapper>
    </>
  );
}
