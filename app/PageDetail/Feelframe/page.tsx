'use client';
import DetailPicture from '@/app/components/Layout/DetailElements/DetailPicture';
import FeelFrameDetailTop from '@/app/components/Layout/DetailElements/FeelframeDetailTop';
import Header from '@/app/components/Layout/Header';
import PageDetailWrapper from '@/app/components/Layout/mainElements/PageDetailWrapper';
import { useThemeObserver } from '@/app/hooks/useThemeObserver';
import { ImageFeelFrameGroup } from '@/app/lib/DetailImgData';
import * as S from '@/app/styles/Detail';
import { MenuItem } from '@/app/types/PortfolioType';
import Link from 'next/link';
import React, { useState } from 'react';
import { RiShareBoxFill } from 'react-icons/ri';

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
          <FeelFrameDetailTop />
          <section className="grid grid-cols-2 p-[20px] gap-7 pt-[40px] pb-[40px]">
            <article>
              <div>
                <S.TitleText>👋 프로젝트 소개</S.TitleText>
                <S.TitleUnderText className="ml-[40px]">
                  필프레임은 웨딩액자 전문 홈페이지입니다. <br />
                  <br />
                  쇼핑몰의 취지에 맞는 기본적인 UI 디자인을 맡아, 사용자들이 쉽게 인지하고 사용할 수 있도록
                  구성하였습니다. 또한, 담당자 전용 기능과 사용자 편의 기능까지 꼼꼼히 고민하여 만들어진 페이지입니다.
                  <br />
                  <br />
                  사용자들이 보다 편리하게 이용할 수 있도록 기존의 불편한 기능들을 개선하여 새롭게 리뉴얼하였습니다.
                </S.TitleUnderText>
              </div>
            </article>
            <article>
              <div>
                <S.TitleText>🤔 어떠한 작업을 하셨나요?</S.TitleText>
                <S.TitleUnderText className="ml-[40px]">
                  <div>
                    회원가입 비밀번호 유효성 검사 및 팝빌을 활용한 인증번호 전송
                    <p className=""> - test 함수와 Ajax를 활용하여 유효성 검사 및 회원가입 절차 제작</p>
                    <p className="">- 팝빌 API를 활용하여 공통 함수 제작을 통하여 재사용성을 높힘</p>
                  </div>
                  <div>
                    공동구매 생성 로직 및 가입 절차 제작
                    <p className=""> - Workbench Group 테이블 기획 및 생성</p>
                    <p className=""> - MySql-WorkBench 테이블을 활용하여 핸드폰 번호와 이름을 매칭시켜 유효성 확인</p>
                  </div>
                  <div>
                    <Link
                      href={'https://feelframe.co.kr/page?dir=prop&view=chfr'}
                      target="_blank"
                      className="flex items-center hover:underline underline-offset-8 w-[50%]"
                    >
                      액자교체 시스템 디자인 기획 및 개발 <RiShareBoxFill size={18} className="ml-1" />
                    </Link>
                    <p className=""> - QR코드를 통한 배달 및 회수 시스템</p>
                    <p className="">
                      - 휴대폰 및 결제 번호를 통한 정보 수집 및 입력된 정보를 바탕으로 관리자 확인 가능
                    </p>
                  </div>
                  <div>
                    액자 추천 서비스 기능
                    <p className=""> - 원하는 분위기 및 공간을 이용하여 액자 추천 서비스 구현</p>
                    <p className="">- 관리자 페이지 내 선택 로직에 대한 값 변경 가능</p>
                    <p className="">- LottieFiles 를 활용한 loading 페이지 구현</p>
                  </div>
                  <div>
                    관리자 페이지 Chart.js 를 활용한 월 단위 일 단위 매출 계산
                    <p> - 라이브러리 Chart.js 활용 및 데이터 값 계산 후 표시</p>
                  </div>
                  <div>
                    관리자 페이지 공지사항 업로드 및 배너 변경
                    <p> - 업로드와 세부 내용 및 타이틀을 설정할 수 있게 변경</p>
                    <p> - 공지사항 고정 및 최신 글 강조표시</p>
                  </div>
                </S.TitleUnderText>
              </div>
            </article>
          </section>
        </div>

        <div ref={ProjectRef} id="Work-Detail">
          <DetailPicture ImageGroup={ImageFeelFrameGroup} />
        </div>
      </PageDetailWrapper>
    </>
  );
};

export default FeelcardPage;
