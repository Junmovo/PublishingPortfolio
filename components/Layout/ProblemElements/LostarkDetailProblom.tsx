import React from 'react';
import * as S from '@/styles/Detail';
import LostarkDetailProblemTitle from './ProblomTitle';
import { useTheme } from 'next-themes';

const LostarkDetailProblem = () => {
  return (
    <article className="p-[20px]">
      <S.TitleText>💥 문제는 없었나요?</S.TitleText>
      <div className="grid grid-cols-2 gap-10 pt-4 ">
        <div className="flex flex-col bg-gray-50 dark:bg-[#2525259d] rounded-[20px] ">
          <LostarkDetailProblemTitle title="페이지 리렌더링마다 데이터 무한 요청" />
          <S.DetailContents color="problem">
            <div>⛔ 문제발생</div>
            useEffect를 활용하여 데이터 요청시, 페이지가 <span>리렌더링 될 때마다 데이터 요청</span>이 되고있음을
            확인하였습니다.<br></br>
            <b className="text-[12px]">에러코드 발생 - Rate Limit Exceeded Code 429</b>
          </S.DetailContents>
          <S.DetailContents color="solution">
            <div>✨ 해결방법</div>
            <span>React-Query</span>를 이용하여 <span>데이터 캐싱처리</span>를 해주면 된다는 것을 확인하였습니다.
            <br></br> 시간을 정해두면 해당 데이터를 받아온 후 정해진 시간동안 재요청시 다시 데이터를 받아오지 않는다.
          </S.DetailContents>
          <S.DetailContents>
            <div>😎 알게된 점</div>
            데이터의 캐싱처리를 해줄 시 사이트의 최적화와 API요청을 최소화 할 수 있다는점을 알았습니다. 또한 전적검색
            사이트에서 전적 갱신이라는 버튼의 이유를 알게 되었습니다.
          </S.DetailContents>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-[#2525259d] rounded-[20px] ">
          <LostarkDetailProblemTitle title={'새로고침 시 전역변수의 값이 사라지네?'} />
          <S.DetailContents color="problem">
            <div>⛔ 문제발생</div> 최근 검색어가 저장되어야 했지만, <span>새로고침시 사라지며</span> 최근 검색어 및
            즐겨찾기가 저장이 되지 않았습니다. 해당 값을 저장하려면 <b>localStorage를 활용</b>하여 데이터가 남아있게
            작업해 주어야했습니다.
          </S.DetailContents>
          <S.DetailContents color="solution">
            <div>✨ 해결방법</div>
            <b>Zustand의 공식 문서</b>를 통해 <span>`persist`</span>라는 localStorage 저장 기능이 있다는 것을
            확인했습니다. 이를 활용하여, localStorage에 저장된 값을 바탕으로 검색한 캐릭터와 최근 검색한 단어를 저장하여
            사용자의 UX를 높혔습니다.
          </S.DetailContents>
          <S.DetailContents>
            <div>😎 알게된 점</div>
            전역변수의 사용성을 알게되였으며, 공식문서를 자세히보면 다양한 사용방법과 여러가지 활용법을 배울 수
            있었습니다.
          </S.DetailContents>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-[#2525259d] rounded-[20px] ">
          <LostarkDetailProblemTitle title="JSON 파싱 후 특정 값 추출 이슈" />
          <S.DetailContents color="problem">
            <div>⛔ 문제발생</div>
            고정된 인덱스로 캐릭터에 접근했을 때 데이터의 위치값이 달라져 다른 캐릭터를 검색하면 undefined가
            발생했습니다. 데이터를 변환 시,
            <span> 사용자마다 다른 인덱스 값</span>을 가진다는 것을 확인했습니다.
          </S.DetailContents>
          <S.DetailContents color="solution">
            <div>✨ 해결방법</div>각 캐릭터의 능력은 타입별로 구분되어 있습니다. 객체 형태의 배열에서
            <span>Object.keys(객체)</span>를 사용하여 키 값을 받아오고, <span>filter()</span> 함수를 사용해 이 키 값들
            중 타입별로 구분합니다. 이후 <span>for 반복문</span>과 <span>includes 함수</span>를 사용하여 원하는 값을
            추출하였습니다.
          </S.DetailContents>
          <S.DetailContents>
            <div>😎 알게된 점</div>
            객체 안 특정된 정보를 얻기 위해 Object.keys와 filter를 활용해 타입별로 구분 방법과 includes 및 for 루프를
            사용하여 데이터를 관리하는 방법을 배웠습니다.
          </S.DetailContents>
        </div>
      </div>
    </article>
  );
};

export default LostarkDetailProblem;
