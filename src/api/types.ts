// 백엔드의 PyObjectId는 프론트엔드에서 항상 string 타입으로 처리됩니다.
export type PyObjectId = string;

// --------------------------------------------------------------------------
// Community Post 모델
// --------------------------------------------------------------------------
export interface Post {
  id: PyObjectId;
  title: string;
  content: string;
  author_id: string;
  likes: number;
}

export interface PostCreate {
  title: string;
  content: string;
  author_id: string;
  likes?: number; // 기본값이 있으므로 선택적으로 만듭니다.
}

export interface PostUpdate {
  title?: string;
  content?: string;
}

// --------------------------------------------------------------------------
// Raw Question (사용자의 날것 질문) 모델
// --------------------------------------------------------------------------
export type RawQuestionStatus =
  | "pending"
  | "rejected"
  | "represented"
  | "answered";

export interface RawQuestion {
  id: PyObjectId;
  content: string;
  author_id: string;
  status: RawQuestionStatus;
  created_at: string; // datetime은 string (ISO 8601 형식)으로 받습니다.
}

export interface RawQuestionCreate {
  content: string;
  author_id: string;
  status?: RawQuestionStatus;
  created_at?: string;
}

// --------------------------------------------------------------------------
// Representative Question (AI가 생성한 대표 질문) 모델
// --------------------------------------------------------------------------
export interface RepresentativeQuestion {
  id: PyObjectId;
  title: string;
  total_votes: number;
  status: "unanswered" | "answered"; // Enum 대신 문자열 리터럴 타입을 사용할 수 있습니다.
  created_at: string;
}

// --------------------------------------------------------------------------
// Answer (대표 질문에 대한 답변) 모델
// --------------------------------------------------------------------------
export interface Answer {
  id: PyObjectId;
  content: string;
  author_id: string;
  representative_question_id: PyObjectId;
  created_at: string;
}

export interface AnswerCreate {
  content: string;
  author_id: string;
  representative_question_id: PyObjectId;
}

// --------------------------------------------------------------------------
// Question with Answer (질문과 답변을 함께 보여주기 위한 응답 모델)
// --------------------------------------------------------------------------
export interface QuestionAndAnswer {
  question: RepresentativeQuestion;
  answer: Answer;
}