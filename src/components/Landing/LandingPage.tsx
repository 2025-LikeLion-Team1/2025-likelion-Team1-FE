import React from 'react';
import { colors, layout } from '../../styles';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { FeatureSection } from './FeatureSection';
import { AIDescriptionSection } from './AIDescriptionSection';
import { PartnersSection } from './PartnersSection';

export interface ILandingPageProps {
  className?: string;
}

export const LandingPage = ({ className = "" }: ILandingPageProps): React.JSX.Element => {
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: colors.neutral.gray900,
        height: layout.spacing.totalHeight,
      }}
    >
      {/* Header */}
      <Header />
      
      {/* Hero Section with Logo and Slogan */}
      <HeroSection />
      
      {/* Feature Section - Questions and Answers */}
      <FeatureSection />
      
      {/* AI Description Section */}
      <AIDescriptionSection />
      
      {/* Partners Section */}
      <PartnersSection />
    </div>
  );
};
