import { useState, useMemo } from 'react';


export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const results = { faqs: [], policies: [] }; // Temporary empty results
  return { searchQuery, setSearchQuery, results };
};