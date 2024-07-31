<<<<<<< HEAD
# 프론트엔드 강준모 포트폴리오

![githubimage](https://github.com/user-attachments/assets/e7b265f3-639e-4de0-a4c5-4987203dca9d)

- Next.js와 Typescript를 이용한 프론트엔드 포트폴리오입니다.
  <br/>
- **`작업 기간 :`** 24.06.04 - 진행중
- **`배포 링크 :`** [Junmo's Portfolio](https://junmo-portfolio.vercel.app/)
- **`Tech Stacks :`** <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/> <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
  <br/>
  <br/>

## 목차

- [홈페이지 설명](#홈페이지-설명)
- [작업 내용](#작업내용)
- [트러블 슈팅](#트러블-슈팅)
- [추가 기능](<#추가-기능(예정)>)
- [작업 화면](#작업화면)
  <br/>
  <br/>

## 홈페이지 설명

디자인 기획부터 기능까지 직접 작업한 포트폴리오 입니다.  
<br/>
블랙 & 화이트로 심플함을 더했으며, Component의 재활용을 높힌 포트폴리오 입니다.
큰 텍스트와 채도를 이용한 컬러 조합으로 가독성을 높혔으며,
각종 기능 및 디자인을 직접 구현하고 만든 포트폴리오입니다.

- 카테고리 별 빠른 이동이 가능합니다.
- 원하는 분류의 이미지를 볼 수 있는 필터기능을 제공합니다.
- 라이트모드 / 다크모드를 지원합니다.
  <br/>
  <br/>

## 작업내용

- Components의 재활용성을 위해 동일 형태의 디자인은 props를 통하여 구분지어 주었습니다.
- IntersectionObserver와 scrollIntoView를 활용하여 카테고리별 이동 및 현재위치 UI를 구성하였습니다.
- 각종 라이브러리를 활용하여 이미지 미리보기 및 텍스트 타이핑 기능을 구현하였습니다.
- Preload와 Priority를 활용한 이미지의 우선순위를 구분하여 불편함 없이 콘텐츠를 감상할 수 있도록 구현하였습니다.
  <br/>
  <br/>

## 트러블 슈팅

💥 **문제 발생**  
스크롤 시 특정 페이지에 도달했을 때 UI를 구현하는 과정에서 어려움이 있었습니다.`window.scrollTop()`을 사용해 고정된 값을 부여해 보았지만, 반응형 디자인에서는 값이 달라지는 문제가 발생했습니다.
<br/>
👏 **해결방법**  
IntersectionObserver API를 활용하여 해당 요소를 감시하여 값이 도달 하였을때 작동되게 구현하였습니다. foreach와 setState를 활용하여 번호를 메겨주었고 Tailwind merge를 통한 조건부 렌더링이 되게 구현하였습니다.

```typescript
export const useThemeObserver = (
  setState: React.Dispatch<React.SetStateAction<number>>,
  stateNumber: number
): React.MutableRefObject<HTMLDivElement | null>[] => {
  const isRef = useRef<HTMLDivElement | null>(null);
  const option = { threshold: 0, rootMargin: `-500px 0px` };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setState(stateNumber);
        }
      });
    }, option);

    if (isRef.current) {
      observer.observe(isRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return [isRef];
};
```

## 추가 기능(예정)

- [ ] 추가되는 프로젝트 구현하기

## 작업화면

### Main

#### Main 화면

![darkmode](https://github.com/user-attachments/assets/e2dd9027-8634-49ad-9138-7798355b655b)

- 다크모드 구현
- Type.js를 활용한 타이핑 애니메이션
- 다양한 디바이스에서 원활하게 이용 가능하도록 반응형 디자인 적용

### 스크롤 UI

![scroll](https://github.com/user-attachments/assets/ad632af7-884e-451b-a2fd-557b814031f8)

- 최상단으로 이동할 수 있는 버튼
- 스크롤 시 IntersectionObserver 활용한 UI 상태 변경
- 클릭 시 해당 카테고리로 이동

### 이미지 미리보기

![gallery](https://github.com/user-attachments/assets/8548146d-1652-4144-a304-0a28233ed41b)

- Antd 라이브러리를 활용한 이미지 미리보기
- filter, slice를 활용한 이미지 필터링 및 이미지 더보기 기능 구현
=======
# PublishingPortfolio
>>>>>>> 99196c3522b74373a5614ff3c0b531fa00e13373
