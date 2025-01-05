import React from 'react';
import { Order } from '../../types/order';

type CostBreakdownProps = {
  order: Order;
};

export const CostBreakdown: React.FC<CostBreakdownProps> = ({ order }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <h3 className="text-base font-medium text-gray-900 mb-4">费用明细</h3>
      <div className="space-y-3">
        {/* IP资源费用 */}
        <CostItem label="IP资源费用" value="1999" unit="月" />
        
        {/* 其他基础费用 */}
        <CostItem label="服务器费用" value="570" unit="季度" />
        <CostItem label="带宽费用" value="1400" unit="季度" />
        
        {/* 折扣信息 */}
        <div className="h-px bg-gray-200 my-3" />
        <DiscountItem label="付费周期折扣" value="-296" description="(季付95折)" textColor="text-red-500" />
        <DiscountItem label="折扣码优惠" value="-914" description="(88折)" textColor="text-red-500" />

        {/* 总费用 */}
        <div className="h-px bg-gray-200 my-3" />
        <div className="flex justify-between">
          <span className="font-medium text-gray-900 mt-1">订单总金额</span>
          <div className="text-right">
            <div className="text-lg font-semibold text-blue-600">¥6699</div>
            <div className="text-xs text-gray-500">(服务器及带宽按季度付费)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CostItem = ({ label, value, unit }: { label: string; value: string; unit: string }) => (
  <div className="flex justify-between items-center text-sm">
    <span className="text-gray-600">{label}</span>
    <span className="font-medium text-gray-900">¥{value}/{unit}</span>
  </div>
);

const DiscountItem = ({ 
  label, 
  value, 
  description,
  textColor = "text-gray-900"
}: { 
  label: string; 
  value: string; 
  description: string;
  textColor?: string;
}) => (
  <div className="flex justify-between items-center text-sm">
    <div className="flex items-center gap-1">
      <span className="text-gray-600">{label}</span>
      <span className="text-gray-500">{description}</span>
    </div>
    <span className={`font-medium ${textColor}`}>¥{value}</span>
  </div>
);