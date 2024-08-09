'use client';
import Progress_Bar from '@/app/components/commons/Progress';
import Detailbedge from '@/app/components/Layout/DetailElements/Detailbedge';
import DetailPicture from '@/app/components/Layout/DetailElements/DetailPicture';
import DetailSection from '@/app/components/Layout/DetailElements/DetailSection';
import FeelcardDetailTop from '@/app/components/Layout/DetailElements/FeelcardDetailTop';
import Header from '@/app/components/Layout/Header';
import PageDetailWrapper from '@/app/components/Layout/mainElements/PageDetailWrapper';
import { useThemeObserver } from '@/app/hooks/useThemeObserver';
import { ImageFeelCardGroup } from '@/app/lib/DetailImgData';
import * as S from '@/app/styles/Detail';
import { MenuItem } from '@/app/types/PortfolioType';
import React, { useState } from 'react';

const FeelcardPage = () => {
  const [navNumber, setNavNumber] = useState(1);
  const [MainRef] = useThemeObserver(setNavNumber, 1);
  const [ProjectRef] = useThemeObserver(setNavNumber, 2);
  const MenuList: MenuItem[] = [{ contents: 'Detail' }, { contents: 'Work-Detail' }];
  return (
    <>
      <Header position={navNumber} setNavNumber={setNavNumber} MenuList={MenuList} />
      <PageDetailWrapper>
        <div ref={MainRef} id="Detail">
          <FeelcardDetailTop />
          <DetailSection>
            <article>
              <div>
                <S.TitleText>👋 프로젝트 소개</S.TitleText>
                <S.TitleUnderText className="md:ml-[40px]">
                  <div>회사 프로젝트</div>
                  <S.ProgressSection>
                    <Progress_Bar per={60} title="기획" />
                    <Progress_Bar per={100} title="개발" />
                    <Progress_Bar per={70} title="디자인" />
                    <Progress_Bar per={90} title="퍼블리싱" />
                  </S.ProgressSection>
                  <div>
                    사용기술
                    <br />
                    <p>
                      <Detailbedge contents="Design" />
                      <Detailbedge contents="Publishing" />
                      <Detailbedge contents="Javascript" />
                      <Detailbedge contents="PHP" />
                      <Detailbedge contents="MySql-Workbench" />
                    </p>
                  </div>
                  <div>
                    프로젝트 설명
                    <br />
                    <span className="mt-2 inline-block">
                      필카드는 모바일 청첩장 제작 에디터입니다. <br />
                      <br />
                      기존의 여러 모바일 청첩장에서 찾아볼 수 없는 기능들을 추가한 에디터 플러스(Editor Plus+)를
                      도입하여 사용자 경험(UX)을 대폭 개선했습니다.
                      <br></br>실시간 미리보기와 다양한 커스터마이징 옵션을 제공하여 사용성을 향상시키고,<br></br> 그
                      결과 기존 사용률보다 1.5배 높은 성과를 달성한 바 있습니다.
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
                    청첩장 내 편의성 UI 추가
                    <p> - 한 화면에 같은 종류의 기능 묶음(메인, 이펙트)</p>
                    <p> - 실시간 미리보기 및 테마 설정 기능</p>
                    <p> - 사용자의 편의성을 위해 한 페이지 안에서 스킨 변경</p>
                  </div>

                  <div>
                    컬러피커( Color Picker ) 를 통하여커스터마이징 색상 가능
                    <p> - color Picker 자바스크립트 라이브러리 이용</p>
                    <p> - Docs를 활용한 Change값 감지 및 청첩장 적용</p>
                  </div>
                  <div>
                    다이렉트 카드 제휴 사이트 디자인 및 기능 관리
                    <p> - Swiper를 활용한 슬라이드 기능 구현</p>
                    <p> - 간결하고 직관적인 UI로 확인 가능하게 디자인</p>
                  </div>
                  <div>
                    D-Day 테마 , 캘린더 테마 설정 기능 추가 ( 한국어 영어 일반 등 )
                    <p> - 날짜 변경 시 변경날짜 감지 후 load()를 이용하여 캘린더 리로딩</p>
                    <p> - 한글 캘린더로 설정했을 경우 숫자 한글로 변환 및 발음에 따라 특정 받침 추가 로직 생성</p>
                  </div>
                </S.TitleUnderText>
              </div>
            </article>
          </DetailSection>
        </div>

        <div ref={ProjectRef} id="Work-Detail">
          <DetailPicture ImageGroup={ImageFeelCardGroup} />
        </div>
      </PageDetailWrapper>
    </>
  );
};

export default FeelcardPage;
