'use client';
import DetailPicture from '@/app/components/Layout/DetailElements/DetailPicture';
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
        <div ref={MainRef} id="Detail">
          <FeelmakerDetailTop />
          <section className="grid grid-cols-2 p-[20px] gap-7 pt-[40px] pb-[80px]">
            <article>
              <div>
                <S.TitleText>👋 프로젝트 소개</S.TitleText>
                <S.TitleUnderText className="ml-[40px]">
                  필메이커는 웨딩 영상 제작 서비스입니다. <br />
                  <br />
                  필메이커 내 각종 오류들을 수정하며, 다양한 이벤트 혜택 배너 및 사용자들의 편의성을 생각하여 디자인을
                  수정하였습니다.
                  <br />
                  이를 통해 사용자들이 전반적인 서비스 만족도가 크게 향상되었습니다.
                </S.TitleUnderText>
              </div>
            </article>
            <article>
              <div>
                <S.TitleText>🤔 어떠한 작업을 하셨나요?</S.TitleText>
                <S.TitleUnderText className="ml-[40px]">
                  <div>
                    스크롤 시 이벤트 배너 생성
                    <p> - 랜덤 배너시 Math.random 및 sort를 활용하여 정수 변환 후 특정 숫자 일 때만 표시</p>
                    <p> - window.scrollTop을 활용한 배너 up/down</p>
                  </div>
                  <div>
                    영상 동의 비동의 고객 할인 로직 수정
                    <p> - 동의 작성 시 결제금액 2,000원 할인 및 페이지 내 동의 고객 리스트 레이아웃 작업</p>
                    <p> - 동의 비동의 값의 정보를 가져와 영상별 filter 구분</p>
                  </div>
                  <div>
                    인기 동영상 인기순 필터정렬
                    <p> - 결제 완료 된 length 를 Workbendch table을 확인하여 정렬 구성</p>
                  </div>
                  <div>
                    각종 이벤트 배너 및 팝업 디자인 기획 및 제작
                    <p> - Photoshop을 통한 이벤트 기획 및 구성</p>
                  </div>
                </S.TitleUnderText>
              </div>
            </article>
          </section>
        </div>

        <div ref={ProjectRef} id="Work-Detail">
          <DetailPicture ImageGroup={ImageFeelmakerGroup} />
        </div>
      </PageDetailWrapper>
    </>
  );
};

export default FeelmakerPage;
