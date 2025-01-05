import React from 'react';
import { Order } from '../../types/order';

type IPCustomInfoProps = {
  order: Order;
};

export const IPCustomInfo: React.FC<IPCustomInfoProps> = ({ order }) => {
  const customInfo = order.customInfo || {
    businessName: '-',
    subnetSize: '-',
    monthlyBudget: '-',
    contractPeriod: '-',
    databaseStandard: '-',
    ipType: '-',
    asProperty: '-'
  };

  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <h3 className="text-base font-medium text-gray-900 mb-4">IP定制信息</h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <InfoItem label="国家/地区" value={order.country} />
        <InfoItem label="业务名称" value={customInfo.businessName} />
        <InfoItem label="IP类型" value={customInfo.ipType} />
        <InfoItem label="子网规模" value={customInfo.subnetSize} />
        <InfoItem label="AS属性" value={customInfo.asProperty} />
        <InfoItem label="月度预算" value={customInfo.monthlyBudget} />
        <InfoItem label="合约期" value={customInfo.contractPeriod} />
        <InfoItem label="数据库交付标准" value={customInfo.databaseStandard} />
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-1">
    <div className="text-sm text-gray-500">{label}</div>
    <div className="text-sm font-medium text-gray-900">{value}</div>
  </div>
); 