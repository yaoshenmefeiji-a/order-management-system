import React from 'react';
import { OrderTable } from './components/OrderTable/OrderTable';
import Filters from './components/Filters/Filters';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { useOrders } from './hooks/useOrders';
import { useOrderFilters } from './hooks/useOrderFilters';

function App() {
  const { orders, loading, error } = useOrders();
  const {
    selectedTypes,
    setSelectedTypes,
    selectedCountries,
    setSelectedCountries,
    availableCountries,
    filteredOrders
  } = useOrderFilters(orders);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-[1600px] mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-6">订单管理系统</h1>
          <Filters
            selectedTypes={selectedTypes}
            selectedCountries={selectedCountries}
            onTypeChange={setSelectedTypes}
            onCountryChange={setSelectedCountries}
            availableCountries={availableCountries}
          />
        </div>
        <OrderTable orders={filteredOrders} />
      </div>
    </div>
  );
}

export default App;