'use client';
import LostarkDetailTop from '@/components/Layout/DetailElements/LostarkDetailTop';
import * as S from '@/styles/Detail';

export default function LostArkDetail(): JSX.Element {
  return (
    <>
      <LostarkDetailTop />
      <section className="grid grid-cols-2 p-[20px] gap-7">
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
                useState를 활용한 공지사항 <span>필터링기능</span>
              </div>
              <div>엔터(Enter)를 활용한 UI/UX 향상</div>
              <div>Skeleton UI 를 활용한 사용자 경험 개선</div>
              <div>다크모드 제공</div>
              <div>
                다른사람에게 쉽게 공유 할 수 있는 <span>URL 복사</span> 기능
              </div>
            </S.TitleUnderText>
          </div>
        </article>
      </section>
      <div>
        <S.TitleText>💥 문제는 없었나요?</S.TitleText>
        <div>
          <div className="text-[18px] font-[600]">JSON.Parse 이후 특정값 추출의 난항</div>
          <div className="text-gray-600">
            문제발생 : 문자형태의 객체 데이터를 JSON.Parse로 변환 이후 사용자마다 다른 값을 가지고있다.( 레벨에 따른
            장비의 강화 수, 기타 추가 능력치 등 ) 객체 안 타입별로 구분이 되었지만, 고정 숫자로 구분시 위치가 달라져
            undefinded 에러발생
          </div>
          <div className="font-[600]">
            해결방법 : 캐릭터마다의 능력은 Type별로 구분된다는 것을 확인, 객체형태의 배열을 Object.keys(객체)를 활용하여
            Key값을 받아온 후, Filter() 함수를 통한 Key안에 있는 Type으로 구분, 이후 for 반복문과 includes를 통한 원하는
            값 추출
          </div>
          {/* <div>새로고침 시 Zustand 값이 사라지네?</div>
          <div>
            문제발생 : 데이터 값을 저장을 했지만, 새로고침시 사라지며 최근 검색어 및 즐겨찾기가 저장이 되지 않았다. 해당
            값을 저장하려면 로컬스토리지를 활용하여 데이터가 남아있게 작업해 주어야했다.
          </div>
          <div>
            해결방법 : Zustand 내부기능에는 persist라는 로컬스토리지 저장기능이 있다는걸 공식문서를 통해 확인하였다.
            로컬스트리지에 저장했던 값을 바탕으로 검색했던 캐릭터의 값과 내가 검색한 단어를 저장하여 최근검색어에
            배치하였다.
          </div> */}
        </div>
      </div>
    </>
  );
}
