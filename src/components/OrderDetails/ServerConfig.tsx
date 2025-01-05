import React from 'react';

export const ServerConfig: React.FC = () => (
  <div className="bg-white rounded-lg p-4 h-full">
    <h3 className="text-base font-medium text-gray-900 mb-4">服务器配置</h3>
    <div className="space-y-6">
      <div>
        <div className="text-sm text-gray-500 mb-2">入门配置</div>
        <div className="space-y-2">
          <div className="text-sm">
            <span className="text-gray-500">CPU: </span>
            <span className="text-gray-900">2 Core</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">内存: </span>
            <span className="text-gray-900">2 GB RAM</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">存储: </span>
            <span className="text-gray-900">40 GB SSD</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">系统: </span>
            <span className="text-gray-900">CentOS 7.9</span>
          </div>
        </div>
      </div>

      <div>
        <div className="text-sm text-gray-500 mb-2">带宽配置</div>
        <div className="space-y-2">
          <div className="text-sm">
            <span className="text-gray-500">带宽类型: </span>
            <span className="text-gray-900">独享带宽</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">带宽规格: </span>
            <span className="text-gray-900">500Mbps</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);