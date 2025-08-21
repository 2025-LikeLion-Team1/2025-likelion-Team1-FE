import apiClient from './index';
import { 
  Answer,
  AnswerCreate,
  QuestionAndAnswer,
  PyObjectId 
} from './types'; // types.ts에 정의된 타입들을 가져옵니다.
import { AxiosResponse } from 'axios';

// ==========================================================================
// 1. 답변 생성 API (POST /api/answers/)
//    (관리자용 기능으로, 일반 사용자 UI에서는 호출되지 않을 수 있습니다.)
// ==========================================================================
/**
 * 특정 대표 질문에 대한 공식 답변을 생성합니다. (관리자용)
 * @param answerData - { content, author_id, representative_question_id } 형태의 객체
 * @returns 생성된 Answer 객체를 담은 Promise
 */
export const createAnswer = (answerData: AnswerCreate): Promise<AxiosResponse<Answer>> => {
  return apiClient.post('/answers/', answerData);
};


// ==========================================================================
// 2. 답변된 질문과 답변 목록 조회 API (GET /api/answers/)
// ==========================================================================
/**
 * 답변이 완료된 질문과 답변의 목록을 최신순으로 조회합니다.
 * 메인 페이지의 '최근 올라온 답변' UI 등에 사용됩니다.
 * @param skip - 건너뛸 항목의 수 (페이지네이션)
 * @param limit - 가져올 항목의 수 (페이지네이션)
 * @returns QuestionAndAnswer 객체의 배열을 담은 Promise
 */
export const getAnsweredQuestionList = (skip: number = 0, limit: number = 10): Promise<AxiosResponse<QuestionAndAnswer[]>> => {
  return apiClient.get('/answers/', {
    params: { skip, limit }
  });
};


// ==========================================================================
// 3. 특정 질문에 대한 답변과 질문 함께 조회 API (GET /api/answers/by-question/{question_id})
// ==========================================================================
/**
 * 주어진 대표 질문 ID에 해당하는 질문과 답변을 함께 조회합니다.
 * @param questionId - 조회할 대표 질문의 ID
 * @returns QuestionAndAnswer 객체를 담은 Promise
 */
export const getAnswerForQuestion = (questionId: PyObjectId): Promise<AxiosResponse<QuestionAndAnswer>> => {
  return apiClient.get(`/answers/by-question/${questionId}`);
};