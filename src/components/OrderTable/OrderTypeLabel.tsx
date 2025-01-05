import React from 'react';
import { OrderType } from '../../types/order';

interface OrderTypeLabelProps {
  type: OrderType;
}

export const OrderTypeLabel: React.FC<OrderTypeLabelProps> = ({ type }) => {
  const getTypeStyles = () => {
    switch (type) {
      case 'RESERVATION':
        return 'bg-blue-100 text-blue-800';
      case 'CUSTOM':
        return 'bg-purple-100 text-purple-800';
      case 'BYO_IP':
        return 'bg-green-100 text-green-800';
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case 'RESERVATION':
        return '预订';
      case 'CUSTOM':
        return '定制';
      case 'BYO_IP':
        return 'BYO-IP';
    }
  };

  return (
    <span className={`inline-block px-2 py-1 rounded-full text-sm ${getTypeStyles()}`}>
      {getTypeLabel()}
    </span>
  );
};