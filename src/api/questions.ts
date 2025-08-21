import apiClient from './index';
import type { 
  RawQuestion, 
  RawQuestionCreate, 
  RepresentativeQuestion 
} from './types'; // types.ts에 정의된 타입들을 가져옵니다.
import type { AxiosResponse } from 'axios';

// ==========================================================================
// 1. Raw 질문 제출 API (POST /api/questions/raw)
// ==========================================================================
/**
 * 사용자의 '날것' 질문을 서버에 제출합니다.
 * AI의 1차 필터링을 통과하면, 저장된 질문 객체를 반환합니다.
 * @param questionData - { content: string, author_id: string } 형태의 객체
 * @returns 생성된 RawQuestion 객체를 담은 Promise
 */
export const submitRawQuestion = (questionData: RawQuestionCreate): Promise<AxiosResponse<RawQuestion>> => {
  // 백엔드 main.py의 prefix('/api')와 라우터의 prefix('/questions'), 
  // 그리고 API의 경로('/raw')가 합쳐져 최종 URL이 결정됩니다.
  return apiClient.post('/questions/raw', questionData);
};


// ==========================================================================
// 2. 대표 질문 목록 조회 API (GET /api/questions/representative)
// ==========================================================================
/**
 * AI에 의해 생성된 '대표 질문' 목록을 조회합니다.
 * '뜨고 있는 질문' UI 등에 사용됩니다.
 * @param skip - 건너뛸 질문의 수 (페이지네이션)
 * @param limit - 가져올 질문의 수 (페이지네이션)
 * @returns RepresentativeQuestion 객체의 배열을 담은 Promise
 */
export const getRepresentativeQuestions = (skip: number = 0, limit: number = 10): Promise<AxiosResponse<RepresentativeQuestion[]>> => {
  return apiClient.get('/questions/representative', {
    params: {
      skip, // key와 value가 같으면 skip: skip 대신 그냥 skip만 써도 됩니다.
      limit,
    }
  });
};