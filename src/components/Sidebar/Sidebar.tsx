import React from 'react';
import { OrderType } from '../../types/order';
import { Filter } from 'lucide-react';

type SidebarProps = {
  selectedTypes: OrderType[];
  selectedCountries: string[];
  onTypeChange: (types: OrderType[]) => void;
  onCountryChange: (countries: string[]) => void;
  availableCountries: string[];
};

export default function Sidebar({
  selectedTypes,
  selectedCountries,
  onTypeChange,
  onCountryChange,
  availableCountries,
}: SidebarProps) {
  const orderTypes: OrderType[] = ['RESERVATION', 'CUSTOM', 'BYO_IP'];
  const orderTypeLabels: Record<OrderType, string> = {
    'RESERVATION': '预订订单',
    'CUSTOM': '定制订单',
    'BYO_IP': 'BYO-IP订单'
  };

  const handleTypeToggle = (type: OrderType) => {
    if (selectedTypes.includes(type)) {
      onTypeChange(selectedTypes.filter(t => t !== type));
    } else {
      onTypeChange([...selectedTypes, type]);
    }
  };

  const handleCountryToggle = (country: string) => {
    if (selectedCountries.includes(country)) {
      onCountryChange(selectedCountries.filter(c => c !== country));
    } else {
      onCountryChange([...selectedCountries, country]);
    }
  };

  return (
    <div className="w-64 bg-white p-4 border-r border-gray-200 h-screen">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5" />
        <h2 className="text-lg font-semibold">筛选条件</h2>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">订单类型</h3>
        {orderTypes.map(type => (
          <label key={type} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={selectedTypes.includes(type)}
              onChange={() => handleTypeToggle(type)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span>{orderTypeLabels[type]}</span>
          </label>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">国家/地区</h3>
        <div className="max-h-64 overflow-y-auto">
          {availableCountries.map(country => (
            <label key={country} className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                checked={selectedCountries.includes(country)}
                onChange={() => handleCountryToggle(country)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>{country}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}