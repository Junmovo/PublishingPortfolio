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

          <section className="grid grid-cols-2 p-[20px] gap-7 pt-[40px] pb-[80px]">
            <article>
              <div>
                <S.TitleText>👋 프로젝트 소개</S.TitleText>
                <S.TitleUnderText className="ml-[40px]">
                  코니콩은 RPG게임 로스트아크의 전적검색 시스템입니다.
                  <br /> 기존의 로스트아크 전적 검색 사이트의 UI를 개선하였습니다.
                  <br /> 또한 사용자가 더욱 편리하게 이용할 수 있도록 <br />
                  핵심정보를 한눈에 볼 수 있게 수정하였습니다.
                </S.TitleUnderText>
              </div>
            </article>
            <article>
              <div>
                <S.TitleText>🤔 어떠한 기능이 있나요?</S.TitleText>
                <S.TitleUnderText className="ml-[40px]">
                  <div>
                    <span>Axios</span> 및 <span>Axios Instance</span>를 활용한 코드 가독성 향상
                  </div>
                  <div>
                    <span>Zustand의 전역변수</span>를 활용한 <span>최근검색어, 즐겨찾기 기능</span>
                  </div>
                  <div>
                    React-Query를 이용한 <span>데이터 요청 최소화</span>
                  </div>
                  <div>
                    useState를 활용한 공지사항 <span>필터링기능</span>
                  </div>
                  <div>Skeleton UI 를 활용한 사용자 경험 개선</div>
                  <div>다크모드 제공</div>
                  <div>
                    다른사람에게 쉽게 공유 할 수 있는 <span>URL 복사</span> 기능
                  </div>
                </S.TitleUnderText>
              </div>
            </article>
          </section>
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
