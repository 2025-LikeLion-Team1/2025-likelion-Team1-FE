import { Question, FilterOption, NavigationItem } from '../types';

export const mockQuestions: Question[] = [
  {
    id: '1',
    title: '초기에 언급되었던 기업 협력 인턴십 프로그램, 현재 진행 상황이 궁금합니다.',
    likeCount: 28,
    daysLeft: 5,
    isUrgent: true,
  },
  {
    id: '2',
    title: '매년 달라지는 해커톤 심사 기준, 올해는 명확한 가이드라인이 미리 공개되나요?',
    likeCount: 39,
    daysLeft: 7,
  },
  {
    id: '3',
    title: '백엔드 트랙의 기술 스택, 최신 트렌드에 맞춰 업데이트될 계획이 있나요?',
    likeCount: 42,
    daysLeft: 3,
  },
  {
    id: '4',
    title: '해커톤 수상팀, 작년과 동일한 아이디어인데 공정한 심사가 맞나요?',
    likeCount: 1,
    daysLeft: 10,
  },
  {
    id: '5',
    title: 'AI 심사 프롬프트를 공개해주실 수 있나요?',
    likeCount: 15,
    daysLeft: 2,
    isUrgent: true,
  },
];

export const filterOptions: FilterOption[] = [
  {
    id: 'hot',
    label: '🔥HOT',
    active: false,
  },
  {
    id: 'dday',
    label: 'D-DAY순',
    active: true,
  },
];

export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: '홈',
    path: '/',
    active: true,
  },
  {
    id: 'answer',
    label: '답변하기',
    path: '/answer',
    active: false,
  },
];
