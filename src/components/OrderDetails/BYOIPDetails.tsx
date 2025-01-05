import React from 'react';
import { Order } from '../../types/order';
import { ServerConfig } from './ServerConfig';
import { BYOIPCostBreakdown } from './BYOIPCostBreakdown';

type BYOIPDetailsProps = {
  order: Order;
};

export const BYOIPDetails: React.FC<BYOIPDetailsProps> = ({ order }) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="grid grid-cols-4 gap-6">
        {/* BYO-IP信息 */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="text-base font-medium text-gray-900 mb-4">BYO-IP信息</h3>
          <div className="space-y-6">
            {/* IP地址列表 */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">IP地址</h4>
              <div className="space-y-1 bg-gray-50 rounded-md p-3">
                {order.ipAddresses?.map((ip, index) => (
                  <div key={index} className="text-sm text-gray-900 font-mono">
                    {ip.address}
                  </div>
                ))}
              </div>
            </div>

            {/* 分隔线 */}
            <div className="h-px bg-gray-200" />

            {/* Geo更新服务 */}
            <div>
              <div className="mb-2">
                <h4 className="text-sm font-medium text-gray-700">Geo更新服务</h4>
              </div>
              <div className="space-y-3 bg-gray-50 rounded-md p-3">
                {order.ipAddresses?.map((ip, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-900 font-mono">{ip.address}</div>
                      {ip.geoLocation && (
                        <div className="text-xs text-gray-500 mt-0.5">
                          {ip.geoLocation.country}, {ip.geoLocation.city}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full ${ip.geoEnabled ? 'bg-green-500' : 'bg-gray-300'}`} />
                      <span className="text-xs text-gray-500 ml-2">{ip.geoEnabled ? '已开启' : '未开启'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BGP配置信息 */}
        <div className="bg-white rounded-lg p-4">
          <h3 className="text-base font-medium text-gray-900 mb-4">BGP配置信息</h3>
          <div className="space-y-4">
            {/* LOA文件 */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">LOA文件</h4>
              <div className="rounded-md border border-gray-200">
                {order.loaGroups?.map((group, index) => (
                  <div key={index} className={`${index !== 0 ? 'border-t border-gray-200' : ''}`}>
                    <div className="p-3">
                      <div className="mb-2 space-y-1">
                        {group.ipAddresses.map((ip, ipIndex) => (
                          <div key={ipIndex} className="text-sm text-gray-600 font-mono">
                            {ip}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">{group.loaFile}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-px bg-gray-200" />
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">ROA状态</h4>
              <span className="text-sm text-gray-900">{order.roaStatus === 'created' ? '已创建' : '未创建'}</span>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Route Object</h4>
              <span className="text-sm text-gray-900">
                {order.routeObjectStatus === 'need-create' ? '需要创建' : '自行创建'}
              </span>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">BGP广播</h4>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-900">{order.bgpProvider}</span>
                <span className="text-xs text-gray-500">{order.bgpAS}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 服务器配置 */}
        <ServerConfig />

        {/* 费用明细 */}
        <BYOIPCostBreakdown order={order} />
      </div>

      {/* 交付时间和订单备注 */}
      <div className="grid grid-cols-4 gap-6">
        {/* 交付时间 */}
        <div className="bg-white rounded-lg p-4 col-span-2">
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
            {order.notes?.ipNote && (
              <InfoItem label="IP资源备注" value={order.notes.ipNote} />
            )}
            {order.notes?.serverNote && (
              <InfoItem label="服务器备注" value={order.notes.serverNote} />
            )}
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