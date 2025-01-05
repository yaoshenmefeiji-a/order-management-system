import { useState, useMemo } from 'react';

export const usePagination = (totalItems: number, itemsPerPage: number = 10) => {
  const [page, setPage] = useState(1);

  const getPaginationProps = () => ({
    startIndex: (page - 1) * itemsPerPage + 1,
    endIndex: Math.min(page * itemsPerPage, totalItems),
    totalItems,
  });

  return {
    page,
    itemsPerPage,
    setPage,
    getPaginationProps,
  };
};