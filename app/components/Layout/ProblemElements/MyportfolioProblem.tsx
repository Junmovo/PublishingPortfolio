import React from 'react';
import * as S from '@/app/styles/Detail';
import LostarkDetailProblemTitle from './ProblomTitle';
import { useTheme } from 'next-themes';

const MyportfolioProblem = () => {
  return (
    <article className="p-[20px] mb-[80px]">
      <S.TitleText>💥 문제는 없었나요?</S.TitleText>
      <div className="grid md:grid-cols-2 gap-10 pt-4 ">
        <div className="flex flex-col bg-gray-50 dark:bg-[#2525259d] rounded-[20px] ">
          <LostarkDetailProblemTitle title="용량이 큰 이미지 GIF 처리 시 로딩" />
          <S.DetailContents color="problem">
            <div>⛔ 문제발생</div>
            GIF처럼 많은 용량의 이미지를 불러와야 하는 경우, GIF를 사용하여 예시 영상을 업로드할 때{' '}
            <span>파일 용량이 커져 로딩 시간이 길어지고</span> 빈 화면이 표시되는 문제가 발생하였습니다.
          </S.DetailContents>
          <S.DetailContents color="solution">
            <div>✨ 해결방법</div>
            <span>GIF 압축 기법</span>을 통해 1차적으로 용량을 줄이고, <span>Preload</span>를 활용하여 로딩 시 GIF
            이미지를 우선적으로 불러오도록 하였습니다. 이로 인해 사용자가 GIF를 클릭하면 끊김 없이 원활한 사용이
            가능해졌습니다.
          </S.DetailContents>
          <S.DetailContents>
            <div>😎 알게된 점</div>큰 이미지를 미리 불러오는 preload 기법을 통해 로딩 시간을 크게 줄여, 사용자에게 더
            빠르고 원활한 경험을 제공하였습니다. 이를 통해 사용자가 불편함 없이 콘텐츠를 감상할 수 있도록 구현했습니다.
          </S.DetailContents>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-[#2525259d] rounded-[20px] ">
          <LostarkDetailProblemTitle title={'신기술 IntersectionObserver '} />
          <S.DetailContents color="problem">
            <div>⛔ 문제발생</div>
            스크롤 시 특정 페이지에 도달했을 때 UI를 구현하는 과정에서 어려움이 있었습니다.`window.scrollTop()`을 사용해
            고정된 값을 부여해 보았지만, 반응형 디자인에서는 값이 달라지는 문제가 발생했습니다.
          </S.DetailContents>
          <S.DetailContents color="solution">
            <div>✨ 해결방법</div>
            <span>IntersectionObserver API</span>를 활용하여 해당 요소를 감시하여 값이 도달 하였을때 작동되게
            구현하였습니다. foreach와 setState를 활용하여 번호를 메겨주었고 Tailwind merge를 통한 조건부 렌더링이 되게
            구현하였습니다.
          </S.DetailContents>
          <S.DetailContents>
            <div>😎 알게된 점</div>
            요소를 감시할 수 있는 IntersectionObserver API를 활용하여 다양한 스크롤 애니메이션 및 기능 구현을 할 수
            있다는점을 배웠습니다.
          </S.DetailContents>
        </div>
      </div>
    </article>
  );
};

export default MyportfolioProblem;
