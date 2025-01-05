import React from 'react';
import { Order } from '../../types/order';

type IPResourceInfoProps = {
  order: Order;
};

export const IPResourceInfo: React.FC<IPResourceInfoProps> = ({ order }) => (
  <div className="bg-white rounded-lg p-4 h-full">
    <h3 className="text-base font-medium text-gray-900 mb-4">IP资源信息</h3>
    <div className="grid grid-cols-1 gap-4">
      <InfoItem label="类型" value="原生" />
      <InfoItem label="目标位置" value={order.country} />
      <InfoItem label="子网" value="192.168.1.0/24" />
      <InfoItem label="AS属性" value="ISP" />
    </div>
  </div>
);

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-1">
    <div className="text-sm text-gray-500">{label}</div>
    <div className="text-sm font-medium text-gray-900">{value}</div>
  </div>
);