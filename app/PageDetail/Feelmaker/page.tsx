'use client';
import Progress_Bar from '@/app/components/commons/Progress';
import Detailbedge from '@/app/components/Layout/DetailElements/Detailbedge';
import DetailPicture from '@/app/components/Layout/DetailElements/DetailPicture';
import DetailSection from '@/app/components/Layout/DetailElements/DetailSection';
import FeelmakerDetailTop from '@/app/components/Layout/DetailElements/FeelmakerDetailTop';
import Header from '@/app/components/Layout/Header';
import PageDetailWrapper from '@/app/components/Layout/mainElements/PageDetailWrapper';
import { useThemeObserver } from '@/app/hooks/useThemeObserver';
import { ImageFeelmakerGroup } from '@/app/lib/DetailImgData';
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
        <section ref={MainRef} id="Detail">
          <FeelmakerDetailTop />
          <DetailSection>
            <article>
              <div>
                <S.TitleText>👋 프로젝트 소개</S.TitleText>
                <S.TitleUnderText className="md:ml-[40px]">
                  <div>회사 프로젝트</div>
                  <S.ProgressSection>
                    <Progress_Bar per={80} title="기획" />
                    <Progress_Bar per={40} title="개발" />
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
                    </p>
                  </div>
                  <div>
                    프로젝트 설명
                    <span className="mt-2 inline-block">
                      필메이커는 웨딩 영상 제작 서비스입니다. <br />
                      <br />
                      필메이커 내 각종 오류들을 수정하며, 다양한 이벤트 혜택 배너 및 사용자들의 편의성을 생각하여
                      디자인을 수정하였습니다.
                      <br />
                      이를 통해 사용자들이 전반적인 서비스 만족도가 크게 향상되었습니다.
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
                    각종 이벤트 배너 및 팝업 디자인 제작
                    <p> - Photoshop을 통한 이벤트 기획 및 구성</p>
                  </div>
                  <div>
                    메인 배너 및 랜딩 페이지 기획 및 제작
                    <p> - Photoshop을 활용하여 랜딩페이지 구성</p>
                    <p> - 공통적인 레이아웃을 통하여 통일감 구성</p>
                  </div>
                  <div>
                    Swiper를 활용한 메인배너 반응형 구현
                    <p> - BreakPoint를 활용하여 반응형 추가</p>
                    <p> - 디바이스마다 다른 배너의 형태를 가짐</p>
                  </div>
                  <div>
                    스크롤 시 이벤트 배너 생성
                    <p> - 미디어쿼리와 자바스크립트를 활용하여 스크롤 디바이스 감지</p>
                    <p> - window.scrollTop을 활용한 배너 up/down</p>
                  </div>
                </S.TitleUnderText>
              </div>
            </article>
          </DetailSection>
        </section>

        <section ref={ProjectRef} id="Work-Detail">
          <DetailPicture ImageGroup={ImageFeelmakerGroup} />
        </section>
      </PageDetailWrapper>
    </>
  );
};

export default FeelmakerPage;
