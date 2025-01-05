import React, { useState } from 'react';
import { Table } from '../Table/Table';
import { OrderTimeline } from '../OrderTimeline/OrderTimeline';
import { OrderTypeLabel } from './OrderTypeLabel';
import { Order } from '../../types/order';
import { countryToFlag, countryCodeMap } from '../../utils/countryFlags';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { OrderDetails } from '../OrderDetails/OrderDetails';
import { usePagination } from './hooks/usePagination';
import { useSorting } from './hooks/useSorting';

interface OrderTableProps {
  orders: Order[];
}

export const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const { page, itemsPerPage, setPage, getPaginationProps } = usePagination(orders.length);
  const { sortConfig, sortedOrders, handleSort } = useSorting(orders);
  
  const paginatedOrders = sortedOrders.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className="w-full">
      <div className="relative">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell onClick={() => handleSort('id')} className="w-[300px]">
                订单编号 {sortConfig.key === 'id' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => handleSort('type')} className="w-[120px]">
                订单类型 {sortConfig.key === 'type' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </Table.HeaderCell>
              <Table.HeaderCell onClick={() => handleSort('country')} className="w-[80px] text-center">
                地区 {sortConfig.key === 'country' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
              </Table.HeaderCell>
              <Table.HeaderCell className="min-w-[400px]">处理状态</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {paginatedOrders.map((order) => (
              <React.Fragment key={order.id}>
                <Table.Row className="h-24">
                  <Table.Cell className="w-[300px]">
                    <button 
                      onClick={() => toggleOrderDetails(order.id)}
                      className="flex items-center w-full font-mono hover:text-blue-600 transition-colors group whitespace-nowrap"
                    >
                      <span className="flex-grow">{order.id}</span>
                      {expandedOrder === order.id ? (
                        <ChevronUp className="w-5 h-5 text-blue-500 flex-shrink-0 ml-2" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-2" />
                      )}
                    </button>
                  </Table.Cell>
                  <Table.Cell className="w-[120px]">
                    <OrderTypeLabel type={order.type} />
                  </Table.Cell>
                  <Table.Cell className="w-[80px]">
                    <div className="text-2xl text-center" title={order.country}>
                      {countryToFlag(countryCodeMap[order.country])}
                    </div>
                  </Table.Cell>
                  <Table.Cell className="min-w-[400px]">
                    <OrderTimeline statuses={order.statuses} />
                  </Table.Cell>
                </Table.Row>
                {expandedOrder === order.id && (
                  <Table.Row>
                    <Table.Cell colSpan={4} className="p-0 border-b">
                      <OrderDetails order={order} />
                    </Table.Cell>
                  </Table.Row>
                )}
              </React.Fragment>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div>
          显示 {getPaginationProps().startIndex} 到 {getPaginationProps().endIndex} 条，共 {orders.length} 条订单
        </div>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 rounded bg-gray-100 disabled:opacity-50"
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
          >
            上一页
          </button>
          <button
            className="px-3 py-1 rounded bg-gray-100 disabled:opacity-50"
            disabled={page * itemsPerPage >= orders.length}
            onClick={() => setPage(p => p + 1)}
          >
            下一页
          </button>
        </div>
      </div>
    </div>
  );
};