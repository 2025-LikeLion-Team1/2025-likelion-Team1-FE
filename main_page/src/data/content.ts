// 텍스트 콘텐츠 데이터
export const content = {
  header: {
    title: 'QnAHub',
    url: 'https://qnahub.xyz/likelion_univ',
  },
  banner: {
    emoji: '🦁',
    title: '멋대 친구들의 공개 질문 환영!',
    subtitle: '멋사 QnAHub에서 궁금한 거 다 물어봐~',
    description: '배너 사진입니다',
  },
  input: {
    placeholder: '질문을 입력하세요...',
    buttonText: '질문하기',
  },
  sections: {
    recentAnswers: '최근 올라온 답변',
    hotQuestions: '뜨고 있는 질문',
    seeMore: '더보기',
  },
  status: {
    newQuestion: '새 질문',
    answered: '답변됨',
    asked: '질문됨',
  },
} as const;

// 이미지 경로 데이터
export const assets = {
  logo: 'div0.svg',
  profile: 'clip-path-group0.svg',
  submit: 'div5.svg',
  arrowRight: 'frame-350.svg',
  arrowRightAlt: 'frame-351.svg',
  banner: 'banner.png',
} as const;
