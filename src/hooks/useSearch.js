import { useState, useMemo } from 'react';
import * as HandbookData from '../constants/handbookData';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const results = useMemo(() => {
    if (!searchQuery.trim()) return { faqs: [], policies: [] };

    const query = searchQuery.toLowerCase();

    const filteredFaqs = HandbookData.FrequentlyAskedQuestions.filter(faq => 
      faq.question.toLowerCase().includes(query) || 
      faq.answer.toLowerCase().includes(query)
    );

    const filteredPolicies = HandbookData.UndergradGradingSystem.filter(item => 
      item.rating.toLowerCase().includes(query)
    );

    return { faqs: filteredFaqs, policies: filteredPolicies };
  }, [searchQuery]);

  return { searchQuery, setSearchQuery, results };
};