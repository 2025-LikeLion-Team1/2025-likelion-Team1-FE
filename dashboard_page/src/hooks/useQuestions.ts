import { useState, useEffect, useMemo } from 'react';
import { Question, FilterOption } from '../types';
import { sortQuestionsByHot, sortQuestionsByDday } from '../utils';
import { apiService } from '../services/api';

interface UseQuestionsProps {
  initialFilters: FilterOption[];
  skip?: number;
  limit?: number;
}

export const useQuestions = ({ initialFilters, skip = 0, limit = 10 }: UseQuestionsProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filters, setFilters] = useState(initialFilters);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getRepresentativeQuestions(skip, limit);
        setQuestions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch questions');
        console.error('Error fetching questions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [skip, limit]);

  const sortedQuestions = useMemo(() => {
    const activeFilter = filters.find(f => f.active);
    
    switch (activeFilter?.id) {
      case 'hot':
        return sortQuestionsByHot(questions);
      case 'dday':
        return sortQuestionsByDday(questions);
      default:
        return questions;
    }
  }, [filters, questions]);

  const handleFilterChange = (filterId: string) => {
    setFilters(prevFilters =>
      prevFilters.map(filter => ({
        ...filter,
        active: filter.id === filterId,
      }))
    );
  };

  const refetch = () => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiService.getRepresentativeQuestions(skip, limit);
        setQuestions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch questions');
        console.error('Error fetching questions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  };

  return {
    questions: sortedQuestions,
    filters,
    handleFilterChange,
    loading,
    error,
    refetch,
  };
};
