import React from 'react';
import { NavigationItem } from '../types';
import { colors, typography, borderRadius, spacing, layout } from '../tokens';
import { createTextStyle } from '../utils';

interface SidebarProps {
  navigationItems: NavigationItem[];
  onNavigate?: (itemId: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  navigationItems,
  onNavigate,
}) => {
  const sidebarStyles = {
    padding: spacing.sidebar.padding,
    display: 'flex',
    gap: spacing.card.gap,
    alignItems: 'start',
    justifyContent: 'start',
    width: layout.sidebar.width,
    height: '1020px',
    position: 'absolute' as const,
    left: 0,
    top: layout.header.height,
    overflow: 'hidden',
  };

  const navigationStyles = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing['3xl'],
    alignItems: 'start',
    justifyContent: 'start',
    width: '146px',
  };

  const getNavItemStyles = (active: boolean) => ({
    backgroundColor: active ? colors.bg.overlay : 'transparent',
    borderRadius: borderRadius.lg,
    padding: spacing.md + ' ' + spacing.xl,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    cursor: 'pointer',
    border: 'none',
  });

  const navItemTextStyles = {
    color: colors.text.secondary,
    fontFamily: typography.fonts.primary,
    lineHeight: typography.lineHeights.relaxed,
    letterSpacing: typography.letterSpacing.tight,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    ...createTextStyle(typography.sizes.xl, typography.weights.semibold),
  };

  return (
    <div style={sidebarStyles}>
      <div style={navigationStyles}>
        {navigationItems.map((item) => (
          <button
            key={item.id}
            style={getNavItemStyles(item.active || false)}
            onClick={() => onNavigate?.(item.id)}
          >
            <div style={navItemTextStyles}>
              {item.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
