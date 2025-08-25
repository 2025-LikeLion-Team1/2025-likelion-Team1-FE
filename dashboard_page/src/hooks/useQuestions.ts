import { useState, useMemo } from 'react';
import { Question, FilterOption } from '../types';
import { sortQuestionsByHot, sortQuestionsByDday } from '../utils';

interface UseQuestionsProps {
  initialQuestions: Question[];
  initialFilters: FilterOption[];
}

export const useQuestions = ({ initialQuestions, initialFilters }: UseQuestionsProps) => {
  const [filters, setFilters] = useState(initialFilters);

  const sortedQuestions = useMemo(() => {
    const activeFilter = filters.find(f => f.active);
    
    switch (activeFilter?.id) {
      case 'hot':
        return sortQuestionsByHot(initialQuestions);
      case 'dday':
        return sortQuestionsByDday(initialQuestions);
      default:
        return initialQuestions;
    }
  }, [filters, initialQuestions]);

  const handleFilterChange = (filterId: string) => {
    setFilters(prevFilters =>
      prevFilters.map(filter => ({
        ...filter,
        active: filter.id === filterId,
      }))
    );
  };

  return {
    questions: sortedQuestions,
    filters,
    handleFilterChange,
  };
};
