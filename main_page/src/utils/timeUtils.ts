// 시간 포맷팅 테스트용 유틸리티
export const testTimeFormatting = () => {
  const now = new Date();
  
  const testCases = [
    // 30초 전
    new Date(now.getTime() - 30 * 1000),
    // 5분 전
    new Date(now.getTime() - 5 * 60 * 1000),
    // 2시간 전
    new Date(now.getTime() - 2 * 60 * 60 * 1000),
    // 1일 전
    new Date(now.getTime() - 24 * 60 * 60 * 1000),
    // 3일 전
    new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000),
    // 2주 전
    new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000),
    // 2개월 전
    new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000),
    // 1년 전
    new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000),
  ];

  console.log('시간 포맷팅 테스트:');
  testCases.forEach((date, index) => {
    const isoString = date.toISOString();
    console.log(`테스트 ${index + 1}: ${isoString} → 결과 확인 필요`);
  });

  return testCases.map(date => date.toISOString());
};

// 실제 사용할 포맷팅 함수 - 시간대 차이 고려
export const formatTimeAgo = (dateString: string): string => {
  try {
    const now = new Date();
    const created = new Date(dateString);
    
    if (isNaN(created.getTime())) {
      console.warn('Invalid date string:', dateString);
      return '시간 정보 없음';
    }
    
    // 서버가 UTC 시간을 보내고 있다고 가정
    const createdAsUTC = new Date(dateString + (dateString.includes('Z') ? '' : 'Z'));
    const diffMethod1 = now.getTime() - createdAsUTC.getTime();
    
    // 서버 시간을 이미 한국 시간으로 간주
    const diffMethod2 = now.getTime() - created.getTime();
    
    const diff1Hours = Math.abs(diffMethod1 / (60 * 60 * 1000));
    const diff2Hours = Math.abs(diffMethod2 / (60 * 60 * 1000));
    
    // 더 합리적인 시간 차이를 선택
    let diffInMilliseconds;
    if (Math.abs(diffMethod1) < Math.abs(diffMethod2) && diff1Hours < 24) {
      diffInMilliseconds = diffMethod1;
    } else if (diff2Hours < 24) {
      diffInMilliseconds = diffMethod2;
    } else {
      diffInMilliseconds = diffMethod1;
    }
    
    const diffInSeconds = Math.floor(Math.abs(diffInMilliseconds) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);
    
    if (diffInSeconds < 60) {
      return '방금 전';
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`;
    } else if (diffInHours < 24) {
      return `${diffInHours}시간 전`;
    } else if (diffInDays < 7) {
      return `${diffInDays}일 전`;
    } else if (diffInWeeks < 4) {
      return `${diffInWeeks}주 전`;
    } else if (diffInMonths < 12) {
      return `${diffInMonths}개월 전`;
    } else {
      return `${Math.floor(diffInMonths / 12)}년 전`;
    }
  } catch (error) {
    console.error('Error formatting time:', error, 'dateString:', dateString);
    return '시간 정보 오류';
  }
};
