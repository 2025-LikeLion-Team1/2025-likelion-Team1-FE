export interface Question {
  _id: string;
  title: string;
  total_votes: number;
  status: 'answered' | 'unanswered';
  created_at: string;
}

// Legacy interface for compatibility
export interface LegacyQuestion {
  id: string;
  title: string;
  likeCount: number;
  daysLeft: number;
  isUrgent?: boolean;
}

export interface FilterOption {
  id: string;
  label: string;
  icon?: string;
  active?: boolean;
}

export interface AppConfig {
  brandName: string;
  siteUrl: string;
  logoPath: string;
  avatarPath: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  active?: boolean;
}
