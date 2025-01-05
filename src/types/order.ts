export type OrderType = 'RESERVATION' | 'CUSTOM' | 'BYO_IP';

export type OrderStatus = {
  name: string;
  status: 'completed' | 'in-progress' | 'pending';
  completedAt?: string;
  notes?: string;
};

export type IPAddress = {
  address: string;
  geoEnabled: boolean;
  geoLocation?: {
    country: string;
    city: string;
  };
  loaFile?: string;
};

export type LOAGroup = {
  ipAddresses: string[];
  loaFile: string;
};

export type CustomOrderInfo = {
  businessName: string;
  subnetSize: string;
  monthlyBudget: string;
  contractPeriod: string;
  databaseStandard: string;
  ipType: string;
  asProperty: string;
};

export type OrderNotes = {
  ipNote?: string;
  serverNote?: string;
};

export type Order = {
  id: string;
  type: OrderType;
  country: string;
  statuses: OrderStatus[];
  createdAt: string;
  expectedDeliveryTime: string;
  latestDeliveryTime: string;
  notes?: OrderNotes;
  customInfo?: CustomOrderInfo;
  ipAddresses?: IPAddress[];
  loaGroups?: LOAGroup[];
  roaStatus?: 'created' | 'not-created';
  routeObjectStatus?: 'need-create' | 'self-create';
  bgpProvider?: string;
  bgpAS?: string;
};

export const STATUS_STEPS = [
  '确认IP资源',
  '更新地理位置',
  '运营商过白',
  '配置BGP广播',
  '配置网络路由',
  '部署服务器',
  '订单开通'
] as const;

export type StatusStep = typeof STATUS_STEPS[number];