// 시간대 차이 테스트용 컴포넌트
import React from 'react';
import { formatTimeAgo } from '../utils/timeUtils';

export const TimeTestComponent: React.FC = () => {
  const testDates = [
    // 현재 시간에서 다양한 시간 차이
    new Date().toISOString(), // 현재
    new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30분 전
    new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2시간 전
    new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString(), // 9시간 전 (UTC 시간)
    new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1일 전
    '2025-08-25T09:16:58.383Z', // 제공된 예시 날짜
    '2025-08-25T00:16:58.383Z', // 9시간 차이 테스트
  ];

  return (
    <div className="p-4 bg-gray-100 rounded-lg m-4">
      <h3 className="font-bold text-lg mb-4">시간대 테스트</h3>
      {testDates.map((date, index) => (
        <div key={index} className="mb-2 p-2 bg-white rounded">
          <div className="text-sm text-gray-600">원본: {date}</div>
          <div className="text-sm text-blue-600">
            로컬 시간: {new Date(date).toLocaleString('ko-KR')}
          </div>
          <div className="font-medium text-green-600">
            결과: {formatTimeAgo(date)}
          </div>
        </div>
      ))}
    </div>
  );
};
