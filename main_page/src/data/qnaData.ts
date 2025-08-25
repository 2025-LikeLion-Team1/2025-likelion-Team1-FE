// Q&A 데이터 타입 정의
export interface Answer {
  id: string;
  question: string;
  answer: string;
  likes: number;
  timeAgo: string;
}

export interface Question {
  id: string;
  question: string;
  fires: number;
  timeAgo: string;
  isNew?: boolean;
}

// 샘플 답변 데이터 - 다양한 시간으로 업데이트
export const recentAnswers: Answer[] = [
  {
    id: '1',
    question: '일부 VOD 강의의 퀄리티가 아쉽습니다. 업데이트 계획이 궁금합니다.',
    answer: '가장 만족도가 낮았던 \'JPA 심화\'와 \'배포 자동화\' 세션은 9월 중으로 전면 재촬영하여 교체할 것을 약속드립니다. 또한, 앞으로 제작되는 모든 VOD는 전문 스튜디오에서 녹화하여 퀄리티를 보장하겠습니다. 여러분의 학습 경험을 최우선으로 생각하며, 꾸준히 개선해 나가겠습니다.',
    likes: 104,
    timeAgo: '15분 전 답변됨',
  },
  {
    id: '2',
    question: '자율적으로 진행되는 스터디, 학교별 지원 격차가 있는 것 같습니다.',
    answer: '이 문제를 해결하기 위해, 다음 달부터 모든 스터디 그룹에 온라인 화이트보드 툴 \'Miro\'의 유료 플랜을 공통으로 지원하겠습니다. 또한, 우수 스터디 그룹에 제공되던 오프라인 공간 대여비 지원도 예산을 증액하여 더 많은 팀이 혜택을 받을 수 있도록 개선하겠습니다.',
    likes: 104,
    timeAgo: '3시간 전 답변됨',
  },
  {
    id: '3',
    question: '수료 후 포트폴리오에 \'멋쟁이사자처럼\' 로고를 사용해도 되나요?',
    answer: '물론입니다! 여러분은 저희의 자랑스러운 결과물이며, 여러분의 성장을 돕는 것이 저희의 역할입니다. 모든 수료생은 개인 포트폴리오 및 이력서에 멋쟁이사자처럼의 공식 로고와 수료 인증 마크를 자유롭게 사용하실 수 있습니다. 저희가 제작한 \'포트폴리오용 공식 에셋 킷\'을 곧 모든 분께 배포할 예정이니, 마음껏 활용하여 여러분의 멋진 여정을 알려주세요.',
    likes: 28,
    timeAgo: '1일 전 답변됨',
  },
];

// 샘플 질문 데이터 - 다양한 시간으로 업데이트
export const hotQuestions: Question[] = [
  {
    id: '1',
    question: '해커톤 수상팀, 작년과 동일한 아이디어인데 공정한 심사가 맞나요?',
    fires: 1,
    timeAgo: '방금 전',
    isNew: true,
  },
  {
    id: '2',
    question: '백엔드 트랙의 기술 스택, 최신 트렌드에 맞춰 업데이트될 계획이 있나요?',
    fires: 42,
    timeAgo: '25분 전 질문됨',
  },
  {
    id: '3',
    question: '매년 달라지는 해커톤 심사 기준, 올해는 명확한 가이드라인이 미리 공개되나요?',
    fires: 39,
    timeAgo: '4시간 전 질문됨',
  },
  {
    id: '4',
    question: '초기에 언급되었던 기업 협력 인턴십 프로그램, 현재 진행 상황이 궁금합니다.',
    fires: 28,
    timeAgo: '3일 전 질문됨',
  },
];
