import React from 'react';
import { Order } from '../../types/order';
import { IPCustomInfo } from './IPCustomInfo';
import { ServerConfig } from './ServerConfig';
import { CostBreakdown } from './CostBreakdown';

type CustomOrderCollapseProps = {
  order: Order;
};

export const CustomOrderCollapse: React.FC<CustomOrderCollapseProps> = ({ order }) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="grid grid-cols-3 gap-6">
        {/* IP定制信息 */}
        <div className="w-full">
          <IPCustomInfo order={order} />
        </div>

        {/* 服务器配置 */}
        <div className="w-full">
          <ServerConfig />
        </div>

        {/* 费用明细 */}
        <div className="w-full">
          <CostBreakdown order={order} />
        </div>
      </div>

      {/* 交付时间和订单备注 */}
      <div className="grid grid-cols-3 gap-6">
        {/* 交付时间 */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="text-base font-medium text-gray-900 mb-4">交付时间</h3>
          <div className="space-y-4">
            <InfoItem label="预计交付时间" value={order.expectedDeliveryTime} />
            <InfoItem label="最晚交付时间" value={order.latestDeliveryTime} />
          </div>
        </div>

        {/* 订单备注 */}
        <div className="bg-white rounded-lg p-4 col-span-2">
          <h3 className="text-base font-medium text-gray-900 mb-4">订单备注</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-700">IP信息备注</div>
              {order.notes?.ipNote ? (
                <div className="text-sm text-gray-900">{order.notes.ipNote}</div>
              ) : (
                <div className="text-sm text-gray-500">暂无备注</div>
              )}
            </div>
            <div className="h-px bg-gray-200" />
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-700">服务器信息备注</div>
              {order.notes?.serverNote ? (
                <div className="text-sm text-gray-900">{order.notes.serverNote}</div>
              ) : (
                <div className="text-sm text-gray-500">暂无备注</div>
              )}
            </div>
          </div>
        </div>
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