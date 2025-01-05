import React from 'react';

const Table = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full overflow-x-auto">
    <table className="w-full table-fixed divide-y divide-gray-200">{children}</table>
  </div>
);

const Header = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-gray-50">{children}</thead>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
);

const Row = ({ children, className = '' }: { 
  children: React.ReactNode;
  className?: string;
}) => (
  <tr className={`hover:bg-gray-50 transition-colors ${className}`}>{children}</tr>
);

const HeaderCell = ({ children, onClick, className = '' }: { 
  children: React.ReactNode; 
  onClick?: () => void;
  className?: string;
}) => (
  <th
    className={`px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
      onClick ? 'cursor-pointer hover:bg-gray-100' : ''
    } ${className}`}
    onClick={onClick}
  >
    {children}
  </th>
);

const Cell = ({ children, className = '', colSpan }: { 
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
}) => (
  <td className={`px-6 py-6 ${className}`} colSpan={colSpan}>
    {children}
  </td>
);

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.HeaderCell = HeaderCell;
Table.Cell = Cell;

export { Table };