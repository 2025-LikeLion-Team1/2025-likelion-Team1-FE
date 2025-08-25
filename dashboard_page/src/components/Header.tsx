import React from 'react';
import { AppConfig } from '../types';
import { colors, typography, spacing, layout } from '../tokens';
import { createTextStyle } from '../utils';

interface HeaderProps {
  config: AppConfig;
}

export const Header: React.FC<HeaderProps> = ({ config }) => {
  const headerStyles = {
    padding: spacing.header.padding,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute' as const,
    right: 0,
    left: 0,
    top: 0,
    overflow: 'hidden',
  };

  const leftSectionStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.lg,
    width: '900px',
  };

  const logoSectionStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '9px',
  };

  const logoStyles = {
    width: '30px',
    height: '30px',
    aspectRatio: '1',
  };

  const brandNameStyles = {
    color: colors.text.primary,
    fontFamily: typography.fonts.primary,
    lineHeight: typography.lineHeights.tight,
    letterSpacing: typography.letterSpacing.tight,
    ...createTextStyle(typography.sizes.xl, typography.weights.bold),
  };

  const pageNameStyles = {
    color: colors.text.primary,
    fontFamily: typography.fonts.primary,
    lineHeight: typography.lineHeights.relaxed,
    letterSpacing: typography.letterSpacing.tight,
    ...createTextStyle(typography.sizes.xl, typography.weights.medium),
  };

  const rightSectionStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.xl,
  };

  const urlStyles = {
    color: colors.text.muted,
    fontFamily: typography.fonts.primary,
    lineHeight: typography.lineHeights.tight,
    letterSpacing: typography.letterSpacing.tight,
    ...createTextStyle(typography.sizes.xs, typography.weights.bold),
  };

  const avatarContainerStyles = {
    width: '48px',
    height: '48px',
    aspectRatio: '1',
    overflow: 'hidden',
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const avatarStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  };

  return (
    <div style={headerStyles}>
      <div style={leftSectionStyles}>
        <div style={logoSectionStyles}>
          <img
            style={logoStyles}
            src={config.logoPath}
            alt={`${config.brandName} logo`}
          />
          <div style={brandNameStyles}>
            {config.brandName}
          </div>
        </div>
        <div style={pageNameStyles}>
          대시보드
        </div>
      </div>
      
      <div style={rightSectionStyles}>
        <div style={urlStyles}>
          {config.siteUrl}
        </div>
        <div style={avatarContainerStyles}>
          <img
            style={avatarStyles}
            src={config.avatarPath}
            alt="User avatar"
          />
        </div>
      </div>
    </div>
  );
};
