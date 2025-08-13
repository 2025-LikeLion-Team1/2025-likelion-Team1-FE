// 🖥️ 앱 페이지 전용 토큰
// 로그인 후 대시보드, 실제 서비스 페이지들을 위한 실용적인 토큰들

export const appSpacing = {
  // 앱 레이아웃 기본
  sidebarWidth: '240px',
  headerHeight: '64px',
  contentPadding: '24px',
  
  // 카드/컴포넌트 간격
  cardGap: '16px',
  sectionGap: '32px',
  
  // 폼 관련
  inputHeight: '40px',
  buttonHeight: '36px',
  
  // 테이블/리스트
  rowHeight: '48px',
  columnGap: '16px',
} as const;

export const appTypography = {
  fontSize: {
    // 실용적인 앱 폰트 크기들
    pageTitle: '32px',      // 페이지 메인 타이틀
    sectionTitle: '24px',   // 섹션 타이틀
    cardTitle: '20px',      // 카드 타이틀
    subtitle: '18px',       // 서브타이틀
    body: '16px',          // 본문
    caption: '14px',       // 캡션
    label: '14px',         // 폼 라벨
    tableHeader: '14px',   // 테이블 헤더
    small: '12px',         // 작은 텍스트
  },
} as const;

export const appZIndex = {
  // 앱 UI의 레이어 구조
  content: 0,
  sidebar: 100,
  header: 200,
  dropdown: 300,
  modal: 400,
  toast: 500,
} as const;

export const appBorderRadius = {
  // 앱다운 모던한 radius
  input: '6px',
  card: '8px',
  button: '6px',
  modal: '12px',
} as const;
