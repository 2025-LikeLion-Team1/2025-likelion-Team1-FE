import { getOptimalFontWeight } from '../tokens/typography';

export const createTextStyle = (
  fontSize: string | number,
  baseWeight: number = 500,
  additionalStyles?: React.CSSProperties
): React.CSSProperties => {
  const optimalWeight = getOptimalFontWeight(fontSize, baseWeight);
  
  return {
    fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
    fontWeight: optimalWeight,
    ...additionalStyles,
  };
};

export const getResponsiveFontWeight = (
  fontSize: string,
  weightLevel: 'medium' | 'semibold' | 'bold' = 'medium'
): number => {
  const baseWeights = {
    medium: 500,
    semibold: 600,
    bold: 700,
  };
  
  return getOptimalFontWeight(fontSize, baseWeights[weightLevel]);
};
