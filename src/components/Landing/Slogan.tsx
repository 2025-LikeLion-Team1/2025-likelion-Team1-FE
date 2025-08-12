import React from 'react';
import { colors, typography, layout, calculateOptimalFontWeight } from '../../styles';

export interface ISloganProps {
  className?: string;
}

export const Slogan = ({ className = "" }: ISloganProps): React.JSX.Element => {
  const baseTextStyle = {
    fontFamily: typography.fontFamily.primary,
    lineHeight: typography.lineHeight.relaxed,
    letterSpacing: typography.letterSpacing.tight,
  };

  // 동적 fontWeight 계산
  const blueFontSize = parseInt(typography.fontSize.sloganBlue); // 64px
  const whiteFontSize = parseInt(typography.fontSize.sloganWhite); // 42px

  const blueTextStyle = {
    ...baseTextStyle,
    fontSize: typography.fontSize.sloganBlue,
    fontWeight: calculateOptimalFontWeight(blueFontSize, 16, 600), // 동적 계산
    color: colors.primary.blue,
  };

  const whiteTextStyle = {
    ...baseTextStyle,
    fontSize: typography.fontSize.sloganWhite,
    fontWeight: calculateOptimalFontWeight(whiteFontSize, 16, 600), // 동적 계산
    color: colors.neutral.gray100,
  };

  return (
    <div
      className={`text-center w-full flex items-center justify-center ${className}`}
      style={{ height: layout.heights.slogan }}
    >
      <span>
        <span style={blueTextStyle}>
          질문
        </span>
        <span style={whiteTextStyle}>
          으로
        </span>
        <span style={blueTextStyle}>
          {' '}신뢰
        </span>
        <span style={whiteTextStyle}>
          를 만듭니다
        </span>
      </span>
    </div>
  );
};
