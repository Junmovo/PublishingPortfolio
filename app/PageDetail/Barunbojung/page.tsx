'use client';
import Progress_Bar from '@/app/components/commons/Progress';
import BarunbojungDetailTop from '@/app/components/Layout/DetailElements/BarunbojungDetailTop';
import Detailbedge from '@/app/components/Layout/DetailElements/Detailbedge';
import DetailPicture from '@/app/components/Layout/DetailElements/DetailPicture';
import DetailSection from '@/app/components/Layout/DetailElements/DetailSection';
import Header from '@/app/components/Layout/Header';
import PageDetailWrapper from '@/app/components/Layout/mainElements/PageDetailWrapper';
import { useThemeObserver } from '@/app/hooks/useThemeObserver';
import { ImageBarunbojungGroup } from '@/app/lib/DetailImgData';
import * as S from '@/app/styles/Detail';
import { MenuItem } from '@/app/types/PortfolioType';
import React, { useState } from 'react';

const BarunbojungPage = () => {
  const [navNumber, setNavNumber] = useState(1);
  const [MainRef] = useThemeObserver(setNavNumber, 1);
  const [ProjectRef] = useThemeObserver(setNavNumber, 2);
  const MenuList: MenuItem[] = [{ contents: 'Detail' }, { contents: 'Work-Detail' }];
  return (
    <>
      <Header position={navNumber} setNavNumber={setNavNumber} MenuList={MenuList} />
      <PageDetailWrapper>
        <div ref={MainRef} id="Detail">
          <BarunbojungDetailTop />
          <DetailSection>
            <article>
              <div>
                <S.TitleText>👋 프로젝트 소개</S.TitleText>
                <S.TitleUnderText className="sm:ml-[40px]">
                  <div>회사 프로젝트</div>
                  <S.ProgressSection>
                    <Progress_Bar per={70} title="기획" />
                    <Progress_Bar per={60} title="개발" />
                    <Progress_Bar per={70} title="디자인" />
                    <Progress_Bar per={100} title="퍼블리싱" />
                  </S.ProgressSection>
                  <div>
                    사용기술
                    <br />
                    <p>
                      <Detailbedge contents="Design" />
                      <Detailbedge contents="Publising" />
                      <Detailbedge contents="Tistory" />
                      <Detailbedge contents="JavaScript" />
                    </p>
                  </div>
                  <div>
                    프로젝트 설명
                    <br />
                    <span className="mt-2 inline-block">
                      바른보정은 사진보정 전문 서비스입니다. <br />
                      <br />
                      기존 시스템은 파일 업로드 기능 없이 이메일을 통해 주고받는 방식이었습니다. <br />
                      시스템을 최신화하여 사용자 친화적인 UI/UX로 재구성함으로써, 전화번호와 이름만으로 보다 직관적이고
                      편리한 이용 환경을 제공하게 되었습니다. <br />
                      <br />
                      이를 통해 사용자들이 더욱 효율적으로 작업을 진행할 수 있으며, 전반적인 서비스 만족도가 크게
                      향상되었습니다.
                    </span>
                  </div>
                </S.TitleUnderText>
              </div>
            </article>

            <article>
              <div>
                <S.TitleText>🤔 어떠한 작업을 하셨나요?</S.TitleText>
                <S.TitleUnderText className="ml-[40px]">
                  <div>
                    바른보정 메인 페이지 레이아웃 구성
                    <p> - 텍스트 및 그리드를 활용한 레이아웃 작성</p>
                  </div>
                  <div>
                    바른보정 샘플신청 디자인 및 구성
                    <p> - input:file 업로드 시 미리보기 구현</p>
                    <p> - 리뷰 동의를 통한 사용자 구분</p>
                  </div>
                  <div>
                    각종 이벤트 및 스마트스토어 상세페이지 기획 및 제작
                    <p> - Photoshop을 통한 이벤트 기획 및 구성</p>
                  </div>
                  <div>
                    관리자페이지 전체 UI/UX 구성
                    <p> - 신청자 요약건수 및 진행상황 UI 구성</p>
                    <p> - 공통적인 스타일로 일관성 유지</p>
                  </div>
                  <div>
                    LottieFiles를 활용한 JSON Loading 구성
                    <p> - gif였던 로딩을 Lotties를 활용하여 최적화 진행</p>
                  </div>
                </S.TitleUnderText>
              </div>
            </article>
          </DetailSection>
        </div>

        <div ref={ProjectRef} id="Work-Detail">
          <DetailPicture ImageGroup={ImageBarunbojungGroup} />
        </div>
      </PageDetailWrapper>
    </>
  );
};

export default BarunbojungPage;
