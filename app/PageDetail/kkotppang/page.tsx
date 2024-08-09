'use client';
import Progress_Bar from '@/app/components/commons/Progress';
import Detailbedge from '@/app/components/Layout/DetailElements/Detailbedge';
import DetailPicture from '@/app/components/Layout/DetailElements/DetailPicture';
import DetailSection from '@/app/components/Layout/DetailElements/DetailSection';
import KkotppangDetailTop from '@/app/components/Layout/DetailElements/KkotppangDetailTop';
import Header from '@/app/components/Layout/Header';
import PageDetailWrapper from '@/app/components/Layout/mainElements/PageDetailWrapper';
import { useThemeObserver } from '@/app/hooks/useThemeObserver';
import { ImageFeelmakerGroup, KkotppangImageGroup } from '@/app/lib/DetailImgData';
import * as S from '@/app/styles/Detail';
import { MenuItem } from '@/app/types/PortfolioType';
import React, { useState } from 'react';

const FeelmakerPage = () => {
  const [navNumber, setNavNumber] = useState(1);
  const [MainRef] = useThemeObserver(setNavNumber, 1);
  const [ProjectRef] = useThemeObserver(setNavNumber, 2);
  const MenuList: MenuItem[] = [{ contents: 'Detail' }, { contents: 'Work-Detail' }];
  return (
    <>
      <Header position={navNumber} setNavNumber={setNavNumber} MenuList={MenuList} />
      <PageDetailWrapper>
        <div ref={MainRef} id="Detail">
          <KkotppangDetailTop />
          <DetailSection>
            <article>
              <div>
                <S.TitleText>👋 프로젝트 소개</S.TitleText>
                <S.TitleUnderText className="md:ml-[40px]">
                  <div>개인 프로젝트</div>
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
                      <Detailbedge contents="Design" />
                      <Detailbedge contents="Publising" />
                      <Detailbedge contents="Javascript" />
                      <Detailbedge contents="cafe24" />
                    </p>
                  </div>
                  <div>
                    프로젝트 설명
                    <span className="mt-2 inline-block">
                      (주)꽃빵은 메이크업 브랜드 회사입니다. <br />
                      <br />
                      이미지 중심적인 디자인을 채택한 사이트로, 실 사용자의 리뷰와 베스트 상품을 나열하여 소비자들이
                      더욱 쉽게 구매 결정을 내릴 수 있도록 유도했습니다.
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
                    팝업 기능 및 슬라이드 배너 추가
                    <p> - Swiper를 이용한 메인 배너 기능 추가</p>
                    <p> - Javascript의 Date와 Time 을 이용한 오늘 하루 보지 않기 구현</p>
                  </div>
                  <div>
                    플로팅 액션 버튼
                    <p> - 사용자의 편의를 위해 Top 이동버튼 추가</p>
                    <p> - Javascript를 이용하여 클릭 시 소셜미디어 리스트 추가</p>
                  </div>
                  <div>
                    상품 상세페이지 UI 변경
                    <p> - 상품의 제목 및 가격표의 강약을 조절하여 가독성 향상</p>
                    <p> - 가격과 버튼의 크기를 조정하여 UI 향상</p>
                  </div>
                  <div>
                    로그인 및 회원가입 디자인
                    <p> - 네이버 및 카카오 로그인 기능 구현</p>
                    <p> - 사용자 편의를 위한 직관적이고 간편한 UI 제공</p>
                  </div>
                </S.TitleUnderText>
              </div>
            </article>
          </DetailSection>
        </div>

        <div ref={ProjectRef} id="Work-Detail">
          <DetailPicture ImageGroup={KkotppangImageGroup} />
        </div>
      </PageDetailWrapper>
    </>
  );
};

export default FeelmakerPage;
