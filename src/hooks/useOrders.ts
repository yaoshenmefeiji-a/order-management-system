import { useState, useEffect } from 'react';
import { Order } from '../types/order';
import { generateMockOrders } from '../utils/mockData';

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const mockOrders = generateMockOrders(20);
        setOrders(mockOrders);
        setLoading(false);
      } catch (err) {
        setError('加载订单失败，请稍后重试。');
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  return { orders, loading, error };
}