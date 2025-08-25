import React from 'react';
import { colors, typography, borderRadius, shadows } from '../tokens';
import { createTextStyle } from '../utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'filter';
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  active = false,
  onClick,
  className = '',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colors.brand.primary,
          color: colors.text.primary,
        };
      case 'secondary':
        return {
          backgroundColor: colors.bg.secondary,
          color: colors.text.primary,
        };
      case 'filter':
        return {
          backgroundColor: active ? colors.brand.primary : colors.bg.secondary,
          color: colors.text.primary,
        };
      default:
        return {
          backgroundColor: colors.bg.secondary,
          color: colors.text.primary,
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return {
          padding: '0.625rem 0.875rem',
          height: '2rem',
          ...createTextStyle(typography.sizes.sm, typography.weights.semibold),
        };
      case 'md':
        return {
          padding: '0.75rem 1.25rem',
          height: '2.5rem',
          ...createTextStyle(typography.sizes.base, typography.weights.semibold),
        };
      case 'lg':
        return {
          padding: '0.75rem 1.25rem',
          height: '3.25rem',
          ...createTextStyle(typography.sizes.lg, typography.weights.semibold),
        };
      default:
        return {
          padding: '0.75rem 1.25rem',
          height: '2.5rem',
          ...createTextStyle(typography.sizes.base, typography.weights.semibold),
        };
    }
  };

  const baseStyles = {
    borderRadius: borderRadius.lg,
    border: 'none',
    cursor: 'pointer',
    fontFamily: typography.fonts.primary,
    letterSpacing: typography.letterSpacing.tight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: shadows.button,
    ...getVariantStyles(),
    ...getSizeStyles(),
  };

  return (
    <button
      style={baseStyles}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};
