import { Question } from '../types';

export const sortQuestionsByHot = (questions: Question[]): Question[] => {
  return [...questions].sort((a, b) => b.total_votes - a.total_votes);
};

export const sortQuestionsByDday = (questions: Question[]): Question[] => {
  return [...questions].sort((a, b) => {
    const aDaysLeft = calculateDaysLeft(a.created_at);
    const bDaysLeft = calculateDaysLeft(b.created_at);
    return aDaysLeft - bDaysLeft; // 마감일이 가까운 순서대로 정렬
  });
};

// 질문 생성일로부터 D-DAY 계산 (7일 제한)
export const calculateDaysLeft = (createdAt: string): number => {
  const created = new Date(createdAt);
  const now = new Date();
  
  // 서버 시간이 UTC이므로 한국 시간(UTC+9)으로 변환
  const koreaOffset = 9 * 60; // 9시간을 분으로 변환
  const koreaCreated = new Date(created.getTime() + koreaOffset * 60 * 1000);
  const koreaNow = new Date(now.getTime() + koreaOffset * 60 * 1000);
  
  // 질문 생성일로부터 7일 후가 마감일
  const deadline = new Date(koreaCreated);
  deadline.setDate(deadline.getDate() + 7);
  
  // 현재 시간과 마감일의 차이 계산
  const diffTime = deadline.getTime() - koreaNow.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};

export const formatDaysLeft = (createdAt: string): string => {
  const daysLeft = calculateDaysLeft(createdAt);
  
  if (daysLeft < 0) {
    return `D+${Math.abs(daysLeft)}`;
  } else if (daysLeft === 0) {
    return 'D-DAY';
  } else {
    return `D-${daysLeft}`;
  }
};

export const formatLikeCount = (count: number): string => {
  return `🔥 ${count}`;
};

export const isUrgent = (createdAt: string): boolean => {
  const daysLeft = calculateDaysLeft(createdAt);
  return daysLeft <= 1 || daysLeft < 0; // 1일 이하 남았거나 마감일이 지난 경우 urgent
};

export const formatStatus = (status: 'answered' | 'unanswered'): string => {
  return status === 'answered' ? '답변완료' : '답변대기';
};
