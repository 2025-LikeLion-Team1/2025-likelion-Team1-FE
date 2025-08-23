// 🏠 MainPage 전용 토큰들
import { calculateOptimalFontWeight } from '../typography';

export const mainSpacing = {
  // 메인페이지 특화 간격들 (원본 Figma 기준)
  sectionGap: '64px',      // gap-16 (섹션 간 간격) 
  columnGap: '64px',       // gap-16 (3분할 컬럼 간격)
  contentGap: '120px',     // 상단 질문창과 컨텐츠 간격
  cardGap: '12px',         // gap-3 (카드 간 간격)
  innerCardGap: '6px',     // gap-1.5 (카드 내부 간격)
  headerLogoGap: '9px',    // 헤더 로고와 텍스트 간격
  headerRightGap: '24px',  // 헤더 우측 요소들 간격 (gap-6)
  
  // 섹션별 특화 간격들
  headerGap: '18px',       // gap-[18px] (섹션 헤더와 컨텐츠 간격)
  questionCardGap: '12px', // gap-3 (질문 카드들 간격)
  communityCardGap: '12px', // gap-3 (커뮤니티 카드들 간격)
  
  // 기본 spacing (base spacing 참조)
  xs: '6px',               // pt-1.5, pb-1.5
  sm: '8px',
  md: '16px',
  lg: '24px',              // pr-6, pl-6 (gap-5 = 20px도 있음)
  xl: '32px',
  '2xl': '36px',           // pb-9 (36px)
  
  // 패딩 값들
  cardPadding: '24px',     // pr-6, pl-6 (카드 내부 패딩)
  sectionPadding: '18px',  // 대시보드 카드 패딩
  questionPadding: '12px 28px', // 질문 입력창 패딩
  buttonPadding: '9px 14px',    // 질문하기 버튼 패딩
  noticePadding: '18px 24px 36px 24px', // 공지사항 패딩
  
  // 헤더 전용 값들
  headerVertical: '6px',   // 헤더 상하 패딩
  headerHorizontal: '24px', // 헤더 좌우 패딩
  
  // 카드 전용 값들
  cardBorderWidth: '2px',  // 카드 테두리 두께 (그라디언트)
  cardInnerGap: '10px',    // 카드 내부 간격
  statusWidth: '100px',    // 상태/시간 영역 최대 너비
  
  // 버튼 전용 값들
  buttonBorderWidth: '2px', // 버튼 그라디언트 테두리 두께
  
  // 공지사항 전용 값들
  noticeItemGap: '4px',    // gap-1 (공지사항 아이템 내부 간격)
  noticeIconGap: '10px',   // gap-2.5 (아이콘과 텍스트 간격)
  noticeItemVertical: '4px', // pt-1, pb-1 (공지사항 아이템 상하 패딩)
  
  // 섹션 헤더 전용 값들
  sectionHeaderTitlePadding: '8px',  // pr-2, pl-2 (제목 영역 패딩)
  sectionHeaderButtonPadding: '3px', // pr-[3px], pl-[3px] (더보기 버튼 패딩)
  sectionHeaderIconGap: '10px',      // gap-2.5 (제목과 아이콘 간격)
  sectionHeaderButtonGap: '0px',     // gap-0 (더보기 텍스트와 아이콘 간격)
  
  // 대시보드 헤더 전용 값들 (추가)
  dashboardHeaderPadding: '8px',     // pr-2, pl-2 (대시보드 헤더 패딩)
  dashboardHeaderGap: '0px',         // gap-0 (대시보드 헤더 간격)
  dashboardHeaderInnerGap: '10px',   // gap-2.5 (대시보드 헤더 내부 간격)
  
  // 질문 섹션 전용 값들
  questionIconGap: '11px', // 1:1 질문하기 아이콘과 텍스트 간격
  tooltipPadding: '4px 8px', // 툴팁 패딩
  
  // 테두리 굵기 값들
  borderThin: '1px',       // 얇은 테두리 (사용자 요청)
  borderMedium: '2px',     // 중간 테두리
  borderThick: '3px',      // 두꺼운 테두리
  
  // 점선 패턴 값들
  dashLength: '6px',       // 점선 대시 길이 (6px 간격)
  dashGap: '6px',          // 점선 간격
  dashRepeat: '12px',      // 대시 반복 단위 (dashLength + dashGap)
  
  // 특수 간격들
  tagGap: '20px',          // gap-5 (태그들 간격)
  metaGap: '5px',          // 메타 정보 간격
} as const;

export const mainSizes = {
  // 컨테이너 크기들
  containerWidth: '1480px',    // 메인 컨테이너 전체 너비
  columnWidth: '544px',        // 각 컬럼 최대 너비
  questionWidth: '590px',      // 질문 입력 섹션 너비
  questionButtonWidth: '120px', // 질문하기 버튼 너비
  
  // 최대 너비들 (추가)
  maxColumnWidth: '544px',     // max-w-[544px] (컬럼 최대 너비)
  dashboardIconSize: '30px',   // w-[30px] h-[30px] (대시보드 아이콘)
  
  // 높이들
  pageHeight: '2530px',        // 전체 페이지 높이
  contentHeight: '1828px',     // 메인 컨텐츠 높이
  leftColumnHeight: '1268px',  // 좌측 컬럼 높이
  dashboardHeight: '480px',    // 대시보드 높이 (3개 행: 146*3 + 간격: 6*2 + 헤더: 30 = 468px + 여유 12px)
  dashboardCardHeight: '146px', // 대시보드 카드 높이
  communityHeight: '790px',    // 커뮤니티 섹션 높이
  
  // 헤더 전용 크기들
  headerHeight: '60px',        // 헤더 높이
  
  // 섹션 헤더 전용 크기들
  sectionHeaderArrowSize: '16px',    // 더보기 화살표 아이콘 크기 (w-4 h-4)
  
  // 카드 전용 크기들
  cardInfoHeight: '20px',      // 5 (카드 하단 정보 영역 높이)
  statusMaxWidth: '100px',     // 상태/시간 영역 최대 너비
  
  // 공지사항 전용 크기들
  noticeItemMaxHeight: '48px', // max-h-12 (공지사항 아이템 최대 높이)
  noticeTitleMaxWidth: '340px', // 공지사항 제목 최대 너비
  noticeDateMaxWidth: '80px',  // 공지사항 날짜 최대 너비
  
  // 질문 섹션 전용 크기들
  questionIconSize: '40px',    // 1:1 질문하기 아이콘 너비
  questionIconHeight: '24px',  // 1:1 질문하기 아이콘 높이
  tooltipWidth: '12px',        // 툴팁 화살표 너비
  tooltipHeight: '10px',       // 툴팁 화살표 높이
  
  // 아이콘 크기들
  iconSmall: '16px',           // 4 (작은 아이콘)
  iconMedium: '24px',          // 6 (중간 아이콘)
  iconLarge: '30px',           // 대형 아이콘
  iconXLarge: '40px',          // 10 (특대 아이콘)
  iconXL: '48px',              // 12 (48px 아이콘 - 헤더 LikeLion 로고)
  
  // 대시보드 전용 크기들 (원본 디자인 기반)
  dashboardCardPadding: '20px',         // 카드 내부 여백 (pt-2.5 pr-[18px] pb-2.5 pl-[18px])
  dashboardCardGap: '10px',             // 카드 내부 요소 간격 (gap-2.5)
  dashboardContainerPadding: '6px',     // 컨테이너 패딩 (p-1.5)
  dashboardContainerGap: '6px',         // 컨테이너 간격 (gap-1.5)
  dashboardRowHeight: '146px',          // 대시보드 행 높이
  dashboardSecondContainerHeight: '298px', // 두 번째 컨테이너 높이
  dashboardCardBorderWidth: '6px',      // 카드 테두리 너비
  dashboardValueGap: '5px',             // 값-단위 간격
  dashboardEmojiWidth: '55px',          // 이모지 컨테이너 너비
  dashboardEmojiHeight: '40px',         // 이모지 컨테이너 높이
  dashboardValuePaddingRight: '12px',   // 값 영역 오른쪽 패딩 (pr-3)
  dashboardValuePaddingLeft: '12px',    // 값 영역 왼쪽 패딩 (pl-3)
  dashboardAIPaddingTop: '6px',         // AI 카드 상하 패딩 (pt-1.5 pb-1.5)
} as const;

export const mainTypography = {
  fontSize: {
    // 메인페이지 특화 폰트 크기들
    sectionTitle: '24px',     // text-2xl (섹션 제목)
    sectionButton: '16px',    // text-base (섹션 더보기 버튼)
    headerTitle: '20px',      // text-xl (헤더 QnAHub 텍스트)
    postTitle: '18px',        // text-lg (포스트 제목)
    questionTitle: '18px',    // text-lg (질문 제목)
    body: '14px',             // text-sm (본문)
    meta: '12px',             // text-xs (메타 정보)
    button: '14px',           // text-sm (버튼 텍스트)
    tooltip: '10px',          // 툴팁/작은 텍스트
    dashboardValue: '36px',   // text-4xl (대시보드 값)
    dashboardUnit: '32px',    // text-[32px] (대시보드 단위)
    emoji: '48px',            // 이모지 크기
    emojiSmall: '18px',       // 작은 이모지
    
    // 대시보드 전용 폰트 크기들 (원본 디자인 기반)
    dashboardTitle: '20px',          // text-xl (카드 제목)
    dashboardSubtitle: '12px',       // text-xs (카드 부제목)
    dashboardEmoji: '48px',          // text-5xl (카드 이모지)
    dashboardAIText: '14px',         // text-sm (AI 텍스트)
  },
  
  lineHeight: {
    sectionTitle: '36px',     // leading-9 (섹션 제목)
    sectionButton: '20px',    // leading-5 (섹션 더보기 버튼)
    headerTitle: '20px',      // leading-5 (헤더 텍스트)
    postTitle: '28px',        // leading-7
    body: '20px',             // leading-5
    meta: '20px',             // leading-5
    button: '20px',           // leading-5
    tooltip: '16px',          // leading-4
    tight: '24px',            // leading-6
    
    // 대시보드 전용 줄 높이들 (원본 디자인 기반)
    dashboardTitle: '28px',      // leading-7 (카드 제목 줄높이)
    dashboardSubtitle: '20px',   // leading-5 (카드 부제목 줄높이)
    dashboardAIText: '20px',     // leading-5 (AI 텍스트 줄높이)
  },
  
  fontWeight: {
    semibold: '600',
    medium: '500',
    bold: '700',
  },
  
  // 동적 fontWeight 계산 헬퍼들 - 굵기 타입별로 통일
  getDynamicWeight: {
    // 굵기 타입별 함수들
    getBold: (fontSize: number) => calculateOptimalFontWeight(fontSize, 16, 700),        // Bold 기반
    getSemiBold: (fontSize: number) => calculateOptimalFontWeight(fontSize, 16, 600),   // SemiBold 기반  
    getMedium: (fontSize: number) => calculateOptimalFontWeight(fontSize, 16, 500),     // Medium 기반
    
    // 하위 호환성을 위한 기존 함수들 (점진적 마이그레이션용)
    sectionTitle: () => calculateOptimalFontWeight(24, 16, 600), // 24px SemiBold → getSemiBold(24)로 변경 예정
    headerTitle: () => calculateOptimalFontWeight(20, 16, 700),  // 20px Bold → getBold(20)로 변경 예정
    headerUrl: () => calculateOptimalFontWeight(12, 16, 700),    // 12px Bold → getBold(12)로 변경 예정
    postTitle: () => calculateOptimalFontWeight(18, 16, 600),    // 18px SemiBold → getSemiBold(18)로 변경 예정
    body: () => calculateOptimalFontWeight(14, 16, 500),         // 14px Medium → getMedium(14)로 변경 예정
    meta: () => calculateOptimalFontWeight(12, 16, 500),         // 12px Medium → getMedium(12)로 변경 예정
    button: () => calculateOptimalFontWeight(14, 16, 600),       // 14px SemiBold → getSemiBold(14)로 변경 예정
    emoji: () => calculateOptimalFontWeight(48, 16, 500),        // 48px Medium → getMedium(48)로 변경 예정
    bannerTitle: () => calculateOptimalFontWeight(40, 16, 600),  // 40px SemiBold → getSemiBold(40)로 변경 예정
    bannerSubtitle: () => calculateOptimalFontWeight(20, 16, 600), // 20px SemiBold → getSemiBold(20)로 변경 예정
    tooltipText: () => calculateOptimalFontWeight(10, 16, 600),  // 10px SemiBold → getSemiBold(10)로 변경 예정
    
    // 대시보드 전용 동적 fontWeight들 (원본 디자인 기반)
    dashboardTitle: () => calculateOptimalFontWeight(20, 16, 600),    // 20px SemiBold (카드 제목)
    dashboardSubtitle: () => calculateOptimalFontWeight(12, 16, 500), // 12px Medium (카드 부제목)
    dashboardValue: () => calculateOptimalFontWeight(36, 16, 600),    // 36px SemiBold (카드 값)
    dashboardUnit: () => calculateOptimalFontWeight(32, 16, 500),     // 32px Medium (카드 단위)
    dashboardEmoji: () => calculateOptimalFontWeight(48, 16, 600),    // 48px SemiBold (카드 이모지)
    dashboardAIText: () => calculateOptimalFontWeight(14, 16, 500),   // 14px Medium (AI 텍스트)
    dashboardAIHighlight: () => calculateOptimalFontWeight(14, 16, 600), // 14px SemiBold (AI 강조 텍스트)
  },
} as const;

export const mainBorderRadius = {
  // 메인페이지 특화 border radius
  card: '10px',               // 카드 모서리
  question: '25px',           // 질문 입력창
  button: '100px',            // 버튼 (완전 둥근)
  tooltip: '3px',             // 툴팁
  banner: '20px',             // 배너
} as const;

export const mainGradients = {
  // 그라디언트 정의들
  questionButton: 'linear-gradient(-90deg, rgba(32, 78, 251, 1.00) 19.23%, rgba(32, 78, 251, 0.87) 34.62%, rgba(25, 16, 101, 1.00) 85.28%, rgba(16, 17, 101, 1.00) 100%)',
  questionBorder: 'linear-gradient(90deg, rgba(87, 122, 255, 1.00) 0%, rgba(19, 46, 149, 1.00) 100%)',
  hotQuestionBorder: 'linear-gradient(94.87deg, rgba(32, 78, 251, 1.00) 0%, rgba(19, 46, 149, 1.00) 100%)',
} as const;

export const mainShadows = {
  // 그림자 정의들
  dashboardCard: 'inset -2px -2px 2px 0px rgba(255, 255, 255, 0.20), inset 2px 2px 4px 0px rgba(0, 0, 0, 1.00)',
  
  // 대시보드 전용 그림자 (원본 디자인 기반)
  dashboardCardInset: 'inset -2px -2px 2px 0px rgba(255, 255, 255, 0.20), inset 2px 2px 4px 0px rgba(0, 0, 0, 1.00)', // 원본 inset 그림자
  dashboardCardSoft: '0 4px 12px rgba(0, 0, 0, 0.15)',     // 부드러운 카드 그림자
  dashboardCardElevated: '0 8px 24px rgba(0, 0, 0, 0.25)', // 더 높은 카드 그림자
} as const;

export const mainBorders = {
  // 기본 테두리 정의들
  dashed: '1px dashed #18181b',
  solid: '2px solid',
  question: '2px solid #204efb',
  
  // 커스텀 6px 대시 점선 (완전 토큰화)
  customDash6px: {
    borderBottom: `${mainSpacing.borderThin} solid transparent`,
    backgroundImage: `url("data:image/svg+xml,%3csvg width='${mainSpacing.dashRepeat}' height='${mainSpacing.borderThin}' xmlns='http://www.w3.org/2000/svg'%3e%3cline x1='0' y1='0.5' x2='${mainSpacing.dashLength}' y2='0.5' stroke='%2318181b' stroke-width='${mainSpacing.borderThin}'/%3e%3c/svg%3e")`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'bottom',
    backgroundSize: `${mainSpacing.dashRepeat} ${mainSpacing.borderThin}`,
  },
  
  // 커스텀 점선 (기존 방식)
  customDashed: `${mainSpacing.borderThin} dashed #18181b`,
  
  // 점선 테두리 - 굵기별 (기존 호환성)
  dashedThin: `${mainSpacing.borderThin} dashed #18181b`,     // 1px
  dashedMedium: `${mainSpacing.borderMedium} dashed #18181b`, // 2px  
  dashedThick: `${mainSpacing.borderThick} dashed #18181b`,   // 3px
  
  // 하단 커스텀 점선 (6px 간격, 1px 굵기 - 공지사항용)
  dashBottomCustom: `${mainSpacing.borderThin} dashed #18181b`,
  
  // 하단 점선 테두리 - 굵기별 (기존 호환성)
  dashBottomThin: `${mainSpacing.borderThin} dashed #18181b`,     // 1px
  dashBottomMedium: `${mainSpacing.borderMedium} dashed #18181b`, // 2px
  dashBottomThick: `${mainSpacing.borderThick} dashed #18181b`,   // 3px
  
  // 기존 호환성 유지
  dashBottom: `${mainSpacing.borderThin} dashed #18181b`, // 1px
} as const;

export const mainColors = {
  // 메인페이지 특화 색상들
  bannerText: '#ffe81d',        // 배너 메인 텍스트 색상
  borderGray: '#747474',        // 배너 테두리 색상
  dashBorder: '#18181b',        // 점선 테두리 색상
} as const;

export const mainPositions = {
  // 위치 관련 값들
  centerTransform: 'translate(-50%)',
  pageTop: 'calc(50% - 831px)',
  bannerTop: '108px',
  bannerLeft: 'calc(50% - 521px)',
  // 질문 섹션 전용 위치들
  tooltipLeft: '-11px',        // 툴팁 화살표 좌측 위치
  tooltipTop: '7px',           // 툴팁 화살표 상단 위치
  
  // 기존 위치 관련 값들
} as const;
