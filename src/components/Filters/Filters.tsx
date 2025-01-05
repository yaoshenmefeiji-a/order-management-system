import React from 'react';
import { Filter } from 'lucide-react';
import { OrderType } from '../../types/order';
import { countryToFlag, countryCodeMap } from '../../utils/countryFlags';

type FiltersProps = {
  selectedTypes: OrderType[];
  selectedCountries: string[];
  onTypeChange: (types: OrderType[]) => void;
  onCountryChange: (countries: string[]) => void;
  availableCountries: string[];
};

const orderTypes: OrderType[] = ['RESERVATION', 'CUSTOM', 'BYO_IP'];
const orderTypeLabels: Record<OrderType, string> = {
  'RESERVATION': '预订订单',
  'CUSTOM': '定制订单',
  'BYO_IP': 'BYO-IP订单'
};

export default function Filters({
  selectedTypes,
  selectedCountries,
  onTypeChange,
  onCountryChange,
  availableCountries,
}: FiltersProps) {
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
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5" />
        <h2 className="text-lg font-semibold">筛选条件</h2>
      </div>
      
      <div className="flex flex-wrap gap-8">
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-sm font-medium text-gray-700 mb-3">订单类型</h3>
          <div className="flex flex-wrap gap-3">
            {orderTypes.map(type => (
              <label key={type} className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeToggle(type)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm">{orderTypeLabels[type]}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h3 className="text-sm font-medium text-gray-700 mb-3">国家/地区</h3>
          <div className="flex flex-wrap gap-3">
            {availableCountries.map(country => (
              <label key={country} className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={selectedCountries.includes(country)}
                  onChange={() => handleCountryToggle(country)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm">
                  {countryToFlag(countryCodeMap[country])} {country}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}