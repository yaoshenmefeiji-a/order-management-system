import { useState, useMemo } from 'react';
import { Order, OrderType } from '../types/order';

export function useOrderFilters(orders: Order[]) {
  const [selectedTypes, setSelectedTypes] = useState<OrderType[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const availableCountries = useMemo(() => 
    Array.from(new Set(orders.map(order => order.country))),
    [orders]
  );

  const filteredOrders = useMemo(() => 
    orders.filter(order => {
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(order.type);
      const countryMatch = selectedCountries.length === 0 || selectedCountries.includes(order.country);
      return typeMatch && countryMatch;
    }),
    [orders, selectedTypes, selectedCountries]
  );

  return {
    selectedTypes,
    setSelectedTypes,
    selectedCountries,
    setSelectedCountries,
    availableCountries,
    filteredOrders
  };
}