import React from 'react';
import { Order } from '../../types/order';
import { IPResourceInfo } from './IPResourceInfo';
import { CustomDetails } from './CustomDetails';
import { BYOIPDetails } from './BYOIPDetails';
import { PreorderDetails } from './PreorderDetails';

type OrderDetailsProps = {
  order: Order;
};

export const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  const renderIPInfo = (order: Order) => {
    switch (order.type) {
      case 'CUSTOM':
        return <CustomDetails order={order} />;
      case 'BYO_IP':
        return <BYOIPDetails order={order} />;
      case 'RESERVATION':
        return <PreorderDetails order={order} />;
      default:
        return <IPResourceInfo order={order} />;
    }
  };

  return (
    <div className="w-full bg-gray-50 px-6 py-4">
      <div className="flex flex-col space-y-6">
        {renderIPInfo(order)}
      </div>
    </div>
  );
};