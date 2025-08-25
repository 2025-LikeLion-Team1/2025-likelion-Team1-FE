# QnAHub Dashboard

리팩토링된 QnAHub 대시보드 프로젝트입니다. 하드코딩된 값들을 제거하고 토큰화된 디자인 시스템을 적용했습니다.

## 🚀 주요 개선사항

### ✅ 하드코딩 제거
- **텍스트 콘텐츠**: 질문, 브랜드명, URL 등을 설정 파일로 분리
- **색상 값**: 토큰 시스템으로 관리
- **레이아웃 값**: 일관된 spacing 및 layout 토큰 적용
- **타이포그래피**: 폰트, 크기, 두께 등을 토큰으로 관리

### 🎨 토큰화된 디자인 시스템
- **색상 토큰**: `src/tokens/colors.ts`
- **공간 토큰**: `src/tokens/spacing.ts`
- **타이포그래피 토큰**: `src/tokens/typography.ts`
- **그림자 토큰**: `src/tokens/shadows.ts`

### 🧩 컴포넌트 구조 개선
- **재사용 가능한 컴포넌트**: Button, QuestionCard, Header, Sidebar, QuestionGrid
- **타입 안정성**: TypeScript 인터페이스로 props 정의
- **관심사 분리**: 데이터, 설정, 스타일 분리

### 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── Button.tsx
│   ├── QuestionCard.tsx
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── QuestionGrid.tsx
│   └── index.ts
├── tokens/              # 디자인 토큰
│   ├── colors.ts
│   ├── spacing.ts
│   ├── typography.ts
│   ├── shadows.ts
│   └── index.ts
├── types/               # TypeScript 타입 정의
│   └── index.ts
├── config/              # 설정 파일
│   ├── app.ts
│   └── environment.ts
├── data/                # 목 데이터
│   └── mockData.ts
├── hooks/               # 커스텀 훅
│   ├── useQuestions.ts
│   ├── useNavigation.ts
│   └── index.ts
├── utils/               # 유틸리티 함수
│   ├── questionUtils.ts
│   ├── helpers.ts
│   └── index.ts
└── QnAHubDashBoard/     # 메인 컴포넌트
    └── QnAHubDashBoard.tsx
```

### 🔧 기능 개선
- **정렬 기능**: HOT, D-DAY 순 정렬
- **상태 관리**: 커스텀 훅으로 로직 분리
- **타입 안정성**: 완전한 TypeScript 지원
- **환경 설정**: 개발/프로덕션 환경 분리

## 💻 개발 환경

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프리뷰
npm run preview
```

## 🎯 향후 개선사항
- [ ] API 연동
- [ ] 로딩 상태 관리
- [ ] 에러 처리
- [ ] 반응형 디자인
- [ ] 접근성 개선
- [ ] 테스트 코드 추가
- [ ] 국제화(i18n)

## 📋 기술 스택
- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **디자인 토큰 시스템**

이제 모든 하드코딩된 값들이 제거되고, 확장 가능하고 유지보수하기 쉬운 구조로 리팩토링되었습니다.
