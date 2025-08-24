import { submitRawQuestion, getRepresentativeQuestions } from '../api/questions';
import { isAxiosError } from 'axios';

// 질문 제출하기
const handleQuestionSubmit = async () => {
  const newQuestion = { content: "새로운 질문입니다!", author_id: "user123" };
  try {
    const response = await submitRawQuestion(newQuestion);
    console.log("성공적으로 제출됨:", response.data);
  } catch (error) {
    if (isAxiosError(error)) {
        console.error("제출 실패:", error.response?.data?.detail || error.message);
    } else {
        console.error("알 수 없는 에러 발생:", error);
    }
    
  }
}

// 대표 질문 목록 불러오기
const fetchRepQuestions = async () => {
  try {
    const response = await getRepresentativeQuestions();
    console.log("대표 질문 목록:", response.data);
  } catch (error) {
    console.error("목록 로딩 실패:", error);
  }
}