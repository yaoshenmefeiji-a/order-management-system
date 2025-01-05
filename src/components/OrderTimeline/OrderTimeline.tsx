import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { OrderStatus } from '../../types/order';
import { getStatusColor } from './timelineUtils';

type OrderTimelineProps = {
  statuses: OrderStatus[];
};

export const OrderTimeline: React.FC<OrderTimelineProps> = ({ statuses }) => {
  return (
    <div className="relative h-16 flex items-center overflow-visible"> {/* 修改overflow为visible */}
      <div className="flex items-center gap-3 absolute left-0 right-0">
        {statuses.map((status, index) => (
          <React.Fragment key={status.name}>
            <div className="flex flex-col items-center group relative shrink-0">
              <div className="relative">
                {/* 状态图标 */}
                <div className="flex items-center justify-center w-6 h-6">
                  {status.status === 'completed' && <CheckCircle className={getStatusColor(status.status).iconColor} />}
                  {status.status === 'in-progress' && <Clock className={getStatusColor(status.status).iconColor} />}
                  {status.status === 'pending' && <Circle className={getStatusColor(status.status).iconColor} />}
                </div>

                {/* 悬浮框 - 显示在下方 */}
                <div className="fixed transform -translate-x-1/2 mt-2 z-[100]
                            invisible group-hover:visible opacity-0 group-hover:opacity-100
                            transition-all duration-200 ease-in-out">
                  <div className="relative">
                    {/* 箭头指向上方 */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 
                                w-0 h-0 border-x-8 border-x-transparent 
                                border-b-8 border-b-gray-900"></div>
                    <div className="bg-gray-900 rounded-lg shadow-xl p-4 w-[320px]">
                      <div className="flex flex-col gap-2.5">
                        <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                          <span className="text-sm font-medium text-gray-100">
                            {status.name}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(status.status).darkBgColor}`}>
                            {getStatusColor(status.status).label}
                          </span>
                        </div>
                        
                        {status.completedAt && (
                          <div className="flex items-start gap-2">
                            <div className="text-xs font-medium text-gray-400 w-16 shrink-0 pt-0.5">完成时间</div>
                            <div className="text-xs text-gray-300">
                              {new Date(status.completedAt).toLocaleString()}
                            </div>
                          </div>
                        )}
                        
                        {status.notes && (
                          <div className="flex items-start gap-2">
                            <div className="text-xs font-medium text-gray-400 w-16 shrink-0 pt-0.5">备注</div>
                            <div className="text-xs text-gray-300 break-words flex-1 max-h-24 overflow-y-auto no-scrollbar">
                              {status.notes}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 状态名称和状态标签 */}
              <div className="flex flex-col items-center gap-0.5 mt-1">
                <div className="text-xs text-gray-600 whitespace-nowrap">
                  {status.name}
                </div>
                <div className="text-[10px] text-gray-500">
                  {getStatusColor(status.status).label}
                </div>
              </div>
            </div>
            {index < statuses.length - 1 && (
              <div className={`flex-1 h-0.5 min-w-[24px] shrink-0 ${getStatusColor(statuses[index + 1].status).lineColor}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};