import { useState, useMemo } from 'react';
import { Order } from '../../../types/order';

type SortConfig = {
  key: keyof Order;
  direction: 'asc' | 'desc';
};

export const useSorting = (orders: Order[]) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({ 
    key: 'createdAt', 
    direction: 'desc' 
  });

  const sortedOrders = useMemo(() => {
    const sorted = [...orders].sort((a, b) => {
      if (sortConfig.key === 'createdAt') {
        return sortConfig.direction === 'asc'
          ? a.createdAt.localeCompare(b.createdAt)
          : b.createdAt.localeCompare(a.createdAt);
      }
      return 0;
    });
    return sorted;
  }, [orders, sortConfig]);

  const handleSort = (key: keyof Order) => {
    setSortConfig(current => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  return {
    sortConfig,
    sortedOrders,
    handleSort,
  };
};