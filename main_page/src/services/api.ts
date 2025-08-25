// API 서비스 - 실제 백엔드 응답 형식에 맞춰 수정
export interface ApiQuestion {
  _id: string;
  title: string;
  total_votes: number;
  status: "answered" | "unanswered";
  created_at: string;
}

export interface ApiAnswerDetail {
  _id: string;
  content: string;
  author_id: string;
  representative_question_id: string;
  total_votes: number;
  created_at: string;
}

export interface ApiAnswerResponse {
  question: ApiQuestion;
  answer: ApiAnswerDetail;
}

// 질문 제출 관련 타입들
export interface SubmitQuestionRequest {
  content: string;
  author_id: string;
}

export interface SubmittedQuestion {
  _id: string;
  content: string;
  author_id: string;
  status: "pending";
  created_at: string;
  force_submitted: boolean;
}

export interface SimilarQuestion {
  _id: string;
  title: string;
  total_votes: number;
  status: "answered" | "unanswered";
  created_at: string;
}

export interface SubmitQuestionResponse {
  status: "new_question_submitted" | "similar_question_found";
  message: string;
  submitted_question: SubmittedQuestion | null;
  similar_question: SimilarQuestion | null;
}

export interface InvalidQuestionResponse {
  detail: string;
}

// 백엔드에서 배열 형태로 직접 반환하므로 ApiResponse 제거
export type ApiResponse<T> = T[];

class ApiService {
  private baseUrl: string;

  constructor() {
    // 환경 변수에서 base_url을 가져오거나 기본값 사용
    this.baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    console.log('API Request:', url); // 디버깅용 로그
    
    try {
      const response = await fetch(url, {
        // 단순한 GET 요청의 경우 헤더를 제거하여 preflight 요청 방지
        ...(options?.method === 'POST' && {
          headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
          },
        }),
        credentials: 'include', // 쿠키 자동 포함
        ...options,
      });

      console.log('API Response status:', response.status); // 디버깅용 로그

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`HTTP ${response.status}: ${response.statusText} - ${errorText}`);
      }

      const data = await response.json();
      console.log('API Response data:', data); // 디버깅용 로그
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      
      // 더 구체적인 에러 메시지 제공
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        throw new Error(`서버에 연결할 수 없습니다. (${this.baseUrl})\n\n가능한 원인:\n1. 서버가 실행되지 않음\n2. CORS 설정 문제\n3. 네트워크 연결 문제`);
      }
      
      throw error;
    }
  }

  // 대표 질문들 가져오기 (실제 엔드포인트)
  async getRepresentativeQuestions(skip: number = 0, limit: number = 10): Promise<ApiQuestion[]> {
    return this.request<ApiQuestion[]>(`/api/questions/representative?skip=${skip}&limit=${limit}`);
  }

  // 최근 답변들 가져오기 (새로운 답변 전용 API)
  async getRecentAnswers(skip: number = 0, limit: number = 10): Promise<ApiAnswerResponse[]> {
    return this.request<ApiAnswerResponse[]>(`/api/answers/?skip=${skip}&limit=${limit}`);
  }

  // 인기 질문들 가져오기 (대표 질문과 동일한 엔드포인트 사용)
  async getHotQuestions(skip: number = 0, limit: number = 10): Promise<ApiQuestion[]> {
    return this.request<ApiQuestion[]>(`/api/questions/representative?skip=${skip}&limit=${limit}`);
  }

  // 새 질문 제출 (새로운 API 스펙)
  async submitQuestion(content: string, force: boolean = false): Promise<SubmitQuestionResponse | InvalidQuestionResponse> {
    const requestBody: SubmitQuestionRequest = {
      content: content,
      author_id: "anonymous" // 로그인 기능 없으므로 anonymous 사용
    };

    const url = `/api/questions/raw?force=${force ? 1 : 0}`;
    
    try {
      return await this.request<SubmitQuestionResponse>(url, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      // 400 에러인 경우 부적절한 질문으로 간주
      if (error instanceof Error && error.message.includes('400')) {
        // 에러 응답에서 detail 추출
        try {
          const errorText = error.message.split(' - ')[1];
          const errorResponse = JSON.parse(errorText || '{}');
          if (errorResponse.detail) {
            return { detail: errorResponse.detail } as InvalidQuestionResponse;
          }
        } catch (parseError) {
          // JSON 파싱 실패시 기본 메시지
        }
        return { detail: "유효하지 않은 질문입니다." } as InvalidQuestionResponse;
      }
      throw error;
    }
  }

  // 질문에 좋아요 추가/제거 (새로운 API 스펙)
  async likeQuestion(questionId: string): Promise<void> {
    console.log('📡 API: likeQuestion called with questionId:', questionId);
    const url = `/api/likes/questions/${questionId}/like`;
    console.log('📡 API: Request URL:', url);
    return this.request<void>(url, {
      method: 'PUT',
    });
  }

  // 답변에 좋아요 추가/제거
  async likeAnswer(answerId: string): Promise<void> {
    console.log('📡 API: likeAnswer called with answerId:', answerId);
    const url = `/api/likes/answers/${answerId}/like`;
    console.log('📡 API: Request URL:', url);
    return this.request<void>(url, {
      method: 'PUT',
    });
  }

  // 질문 좋아요 상태 조회
  async getQuestionLikes(questionId: string): Promise<any> {
    return this.request<any>(`/api/likes/questions/${questionId}/votes`);
  }

  // 답변 좋아요 상태 조회
  async getAnswerLikes(answerId: string): Promise<any> {
    return this.request<any>(`/api/likes/answers/${answerId}/votes`);
  }
}

export const apiService = new ApiService();
