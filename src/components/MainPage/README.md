# MainPage 컴포넌트

피그마에서 추출한 main_page를 현재 프로젝트 구조에 맞게 포팅한 컴포넌트입니다.

## 주요 변경사항

### 1. 컴포넌트 분리
- 하나의 큰 Main 컴포넌트를 여러 개의 작은 컴포넌트로 분리
- 재사용 가능하고 유지보수하기 쉬운 구조로 개선

### 2. 스타일 시스템 적용
- 하드코딩된 색상값을 `colors.ts`의 design system 색상으로 변환
- `#204efb`, `#18181b`, `#eaeaea` 등의 색상을 토큰화

### 3. 컴포넌트 구조

```
MainPage/
├── MainPage.tsx          # 메인 페이지 컴포넌트
├── Header.tsx           # 상단 헤더 (로고, 프로필)
├── BannerSection.tsx    # 배너 섹션 (사자 이모지, 환영 메시지)
├── QuestionInputSection.tsx # 질문 입력 섹션
├── PostItem.tsx         # 포스트 아이템 (공지, Q&A, HOT 토픽)
├── DashboardCard.tsx    # 대시보드 카드 (신뢰도, 답변시간 등)
├── AIAnalysisCard.tsx   # AI 분석 현황 카드
├── SectionHeader.tsx    # 섹션 헤더 (제목, 더보기 버튼)
└── index.ts            # export 파일
```

### 4. 사용 방법

```tsx
import { MainPage } from './components/MainPage';

function App() {
  return <MainPage />;
}
```

### 5. 이미지 파일
- `main_page/public/`의 모든 이미지 파일을 프로젝트의 `public/` 폴더로 복사
- 이미지 경로를 절대 경로(`/div0.svg`)로 수정

### 6. 스타일 특징
- Tailwind CSS 기반
- 반응형 디자인 고려
- Design system 색상 토큰 사용
- 재사용 가능한 컴포넌트 구조

### 7. 추가 개선 가능 사항
- TypeScript interface 강화
- 상태 관리 (질문 입력, 좋아요 등)
- 애니메이션 효과 추가
- 모바일 반응형 최적화
- 라우팅 연동
