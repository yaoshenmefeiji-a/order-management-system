import { Order, OrderStatus, STATUS_STEPS } from '../types/order';

const generateOrderId = (type: string, timestamp: string): string => {
  const typePrefix = type === 'RESERVATION' ? 'RES' : type === 'CUSTOM' ? 'CUS' : 'BYO';
  return `${typePrefix}-${timestamp}`;
};

const generateStatuses = (completedSteps: number): OrderStatus[] => {
  return STATUS_STEPS.map((step, index) => {
    if (index < completedSteps) {
      return {
        name: step,
        status: 'completed',
        completedAt: new Date(Date.now() - (completedSteps - index) * 3600000).toISOString(),
        notes: Math.random() > 0.7 ? 'Process completed successfully' : undefined
      };
    } else if (index === completedSteps) {
      return {
        name: step,
        status: 'in-progress',
        notes: Math.random() > 0.7 ? 'Currently processing' : undefined
      };
    }
    return {
      name: step,
      status: 'pending'
    };
  });
};

const countries = [
  'United States', 'United Kingdom', 'Germany', 'France', 'Japan',
  'Canada', 'Australia', 'Brazil', 'India', 'Singapore'
];

const orderTypes = ['RESERVATION', 'CUSTOM', 'BYO_IP'] as const;

const sampleIPNotes = [
  '需要确保IP地址段在目标地区可用',
  '客户要求IP地址必须是干净的，无黑名单记录',
  '需要提供详细的IP信息报告',
  undefined,
  undefined
];

const sampleServerNotes = [
  '服务器需要预装特定版本的操作系统',
  '需要配置高可用性方案',
  '要求服务器具备防DDoS功能',
  undefined,
  undefined
];

const generateDeliveryTimes = () => {
  const now = new Date();
  const expectedDays = Math.floor(Math.random() * 14) + 7; // 7-21天
  const latestDays = expectedDays + Math.floor(Math.random() * 7) + 3; // 比预期多3-10天
  
  const expected = new Date(now.getTime() + expectedDays * 24 * 3600000);
  const latest = new Date(now.getTime() + latestDays * 24 * 3600000);
  
  return {
    expectedDeliveryTime: expected.toISOString().split('T')[0],
    latestDeliveryTime: latest.toISOString().split('T')[0]
  };
};

const generateCustomInfo = () => ({
  businessName: 'facebook',
  subnetSize: '/24',
  monthlyBudget: '¥300/月',
  contractPeriod: '1个月',
  databaseStandard: 'ipinfo',
  ipType: '原生',
  asProperty: 'ISP'
});

const generateBYOIPInfo = () => {
  // 生成IP地址和地理位置信息
  const ipAddresses = [
    { 
      address: '192.168.3.0/24', 
      geoEnabled: true,
      geoLocation: {
        country: '美国',
        city: '纽约'
      }
    },
    { 
      address: '92.68.3.0/24', 
      geoEnabled: true,
      geoLocation: {
        country: '美国',
        city: '洛杉矶'
      }
    },
    { 
      address: '33.90.196.0/20', 
      geoEnabled: true,
      geoLocation: {
        country: '美国',
        city: '休斯顿'
      }
    }
  ];

  // 随机决定是否将IP分组
  const groupType = Math.floor(Math.random() * 3); // 0: 不分组, 1: 分两组, 2: 全部一组
  
  let loaGroups;
  if (groupType === 0) {
    // 每个IP单独一个LOA文件
    loaGroups = ipAddresses.map((ip, index) => ({
      ipAddresses: [ip.address],
      loaFile: `5_631885402587791846${index + 5}.pdf`
    }));
  } else if (groupType === 1) {
    // 前两个IP共用一个LOA文件，最后一个单独
    loaGroups = [
      {
        ipAddresses: ipAddresses.slice(0, 2).map(ip => ip.address),
        loaFile: '5_6318854025877918469.pdf'
      },
      {
        ipAddresses: [ipAddresses[2].address],
        loaFile: '5_6318854025877918467.pdf'
      }
    ];
  } else {
    // 所有IP共用一个LOA文件
    loaGroups = [{
      ipAddresses: ipAddresses.map(ip => ip.address),
      loaFile: '5_63188540258779184169.pdf'
    }];
  }

  return {
    ipAddresses,
    loaGroups,
    roaStatus: Math.random() > 0.5 ? 'created' : 'not-created',
    routeObjectStatus: Math.random() > 0.5 ? 'need-create' : 'self-create',
    bgpProvider: 'AT&T',
    bgpAS: 'AS7018'
  };
};

export const generateMockOrders = (count: number): Order[] => {
  return Array.from({ length: count }, (_, i) => {
    const type = orderTypes[Math.floor(Math.random() * orderTypes.length)];
    const timestamp = new Date(Date.now() - Math.random() * 30 * 24 * 3600000)
      .toISOString()
      .replace(/[-:]/g, '')
      .split('.')[0];
    
    const baseOrder = {
      id: generateOrderId(type, timestamp),
      type,
      country: countries[Math.floor(Math.random() * countries.length)],
      statuses: generateStatuses(Math.floor(Math.random() * 8)),
      createdAt: timestamp,
      notes: {
        ipNote: sampleIPNotes[Math.floor(Math.random() * sampleIPNotes.length)],
        serverNote: sampleServerNotes[Math.floor(Math.random() * sampleServerNotes.length)]
      },
      ...generateDeliveryTimes()
    };

    if (type === 'CUSTOM') {
      return {
        ...baseOrder,
        customInfo: generateCustomInfo()
      };
    }

    if (type === 'BYO_IP') {
      return {
        ...baseOrder,
        ...generateBYOIPInfo()
      };
    }

    return baseOrder;
  });
};