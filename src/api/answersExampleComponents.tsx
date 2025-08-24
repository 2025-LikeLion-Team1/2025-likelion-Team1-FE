import React, { useState, useEffect } from 'react';
import { getAnsweredQuestionList } from '../api/answers'; // 우리가 만든 API 함수
import { QuestionAndAnswer } from '../api/types'; // 우리가 만든 타입

// 컴포넌트의 Props 타입을 정의할 수 있습니다 (지금은 필요 없음)
interface RecentAnswersProps {}

const RecentAnswers: React.FC<RecentAnswersProps> = () => {
  // 1. 상태(State) 정의
  const [answeredList, setAnsweredList] = useState<QuestionAndAnswer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null);    // 에러 메시지 상태

  // 2. 데이터 가져오기 (Effect)
  // 컴포넌트가 처음 마운트될 때 딱 한 번 실행됩니다.
  useEffect(() => {
    const fetchAnsweredList = async () => {
      try {
        setIsLoading(true); // 데이터 요청 시작 -> 로딩 상태 true
        setError(null);     // 이전 에러 메시지 초기화

        // API 함수를 호출하여 최근 답변 목록을 가져옵니다.
        const response = await getAnsweredQuestionList(0, 5); // 예: 최근 5개만
        setAnsweredList(response.data);

      } catch (err) {
        // isAxiosError 타입 가드를 사용하여 에러를 처리합니다.
        // (실제 프로젝트에서는 에러 처리 로직을 별도 유틸 함수로 만들면 더 좋습니다)
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.detail || "데이터를 불러오는 중 에러가 발생했습니다.");
        } else {
          setError("알 수 없는 에러가 발생했습니다.");
        }
        console.error("최근 답변 목록 로딩 실패:", err);
      } finally {
        // 성공하든 실패하든, 마지막에는 로딩 상태를 false로 변경
        setIsLoading(false);
      }
    };

    fetchAnsweredList();
  }, []); // 빈 배열을 전달하여, 마운트 시 한 번만 실행되도록 설정

  // 3. UI 렌더링
  // 로딩 중일 때 보여줄 UI
  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  // 에러가 발생했을 때 보여줄 UI
  if (error) {
    return <div style={{ color: 'red' }}>에러: {error}</div>;
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
        최근 올라온 답변
      </h1>
      
      {/* 답변이 없을 경우 보여줄 UI */}
      {answeredList.length === 0 ? (
        <p>아직 등록된 답변이 없습니다.</p>
      ) : (
        // 답변 목록을 순회하며 UI를 렌더링
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {answeredList.map(({ question, answer }) => (
            <li key={answer.id} style={{ marginBottom: '30px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
              <div className="question-section">
                <h3 style={{ marginTop: 0, color: '#333' }}>
                  <span style={{ color: '#007bff' }}>Q.</span> {question.title}
                </h3>
                <small style={{ color: '#777' }}>
                  {question.total_votes}명이 궁금해함
                </small>
              </div>
              <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '15px 0' }} />
              <div className="answer-section">
                <p style={{ marginTop: 0, color: '#555', lineHeight: '1.6' }}>
                  <span style={{ fontWeight: 'bold', color: '#28a745' }}>A.</span> {answer.content}
                </p>
                <small style={{ color: '#777', display: 'block', textAlign: 'right' }}>
                  답변 작성자: {answer.author_id}
                </small>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// axios import 추가
import axios from 'axios';
export default RecentAnswers;
