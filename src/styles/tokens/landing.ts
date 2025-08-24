// 🎨 랜딩페이지 전용 토큰
// 마케팅 페이지의 특수한 레이아웃, 거대한 폰트, 복잡한 포지셔닝 등

export const landingSpacing = {
  // 헤더 관련
  header: '60px',
  headerMargin: '20px',
  headerPadding: '6px',
  logoGap: '9px',
  logoSize: '30px',
  
  // 히어로 섹션 전용
  heroHeight: '1004px',
  heroLogoGap: '59px',
  heroBottomMargin: '110px', // 사용자가 조정한 값
  heroLogoSize: '236px',
  
  // 슬로건 섹션
  sloganHeight: '180px',
  
  // 피처 섹션
  featureGap: '280px',
  
  // 이미지들
  imageHeight: '284px',
  
  // 전체 레이아웃
  totalHeight: '3401px',
} as const;

export const landingPositions = {
  // 복잡한 absolute positioning (랜딩페이지만의 특징)
  aiTextTop: '1739px',
  aiDescTop: '1745px',
  partnerTitleTop: '2580px',
  partnerImagesTop: '2700px',
  featureLeft: 'calc(50% - 689px)',
  featureTop: 'calc(50% - 516.5px)',
  aiTextLeft: 'calc(50% - 235px)',
} as const;

export const landingTypography = {
  fontSize: {
    // 마케팅 페이지만의 거대한 폰트들
    hero: '156px',        // QnAHub 메인 타이틀 - 마케팅 임팩트용
    feature: '150px',     // 질문/답변 섹션 - 시각적 임팩트
    
    // 슬로건 전용 (혼합 크기 시스템)
    slogan: '60px',       // 기존 슬로건 (deprecated, 호환용)
    sloganBlue: '64px',   // "질문", "신뢰" - 강조용
    sloganWhite: '42px',  // "으로", "를 만듭니다" - 보조용
    
    // 기타 랜딩 전용
    partner: '40px',      // AI 텍스트
    '5xl': '48px',        // 파트너십 타이틀 등
  },
} as const;

export const landingMaxWidth = {
  // 랜딩페이지의 특수한 섹션 크기들
  hero: '930px',
  slogan: '586px',
  partner: '950px',
  partnerTitle: '451px',
  featureRow: '555px',
  featureSubText: '313px',
  featureSmallText: '45px',
} as const;

export const landingMinWidth = {
  partnerImage: '200px', // Grid 시스템에서 최소 크기 보장
} as const;

export const landingHeights = {
  // 랜딩페이지 섹션별 고정 높이
  header: '60px',
  slogan: '180px',
  image: '284px',
  featureText: '145px',
  partnerTitle: '48px',
} as const;

export const landingLineHeights = {
  // 큰 폰트들의 특수한 라인 높이
  feature: '220px',    // 150px 폰트용
  ai: '60px',         // AI 텍스트용
  partner: '48px',    // 파트너십 타이틀용
} as const;

export const landingZIndex = {
  // 랜딩페이지의 레이어 구조
  base: 0,
  overlay: 10,
  modal: 20,
  popover: 30,
  tooltip: 40,
  header: 50,
} as const;
