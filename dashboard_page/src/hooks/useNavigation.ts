import { useState } from 'react';
import { NavigationItem } from '../types';

interface UseNavigationProps {
  initialItems: NavigationItem[];
}

export const useNavigation = ({ initialItems }: UseNavigationProps) => {
  const [navigationItems, setNavigationItems] = useState(initialItems);

  const handleNavigate = (itemId: string) => {
    setNavigationItems(prevItems =>
      prevItems.map(item => ({
        ...item,
        active: item.id === itemId,
      }))
    );
    
    // TODO: Add actual navigation logic here
    console.log('Navigate to:', itemId);
  };

  return {
    navigationItems,
    handleNavigate,
  };
};
