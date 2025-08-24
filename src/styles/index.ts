// 임시로 기존 방식 사용 (페이지가 보이도록)
export { colors } from './colors';
export { typography, calculateOptimalFontWeight } from './typography';
export { layout } from './layout';

// 🎯 새로운 토큰 시스템 (미래 사용)
export {
  landing,  // 랜딩페이지 전용
  app,      // 앱 페이지 전용
} from './tokens';
