type StatusColorConfig = {
  label: string;
  bgColor: string;
  darkBgColor: string;
  iconColor: string;
  lineColor: string;
};

export const getStatusColor = (status: string): StatusColorConfig => {
  switch (status) {
    case 'completed':
      return {
        label: '已完成',
        bgColor: 'bg-green-100 text-green-800',
        darkBgColor: 'bg-green-900/50 text-green-200',
        iconColor: 'w-5 h-5 text-green-500',
        lineColor: 'bg-green-200'
      };
    case 'in-progress':
      return {
        label: '进行中',
        bgColor: 'bg-blue-100 text-blue-800',
        darkBgColor: 'bg-blue-900/50 text-blue-200',
        iconColor: 'w-5 h-5 text-blue-500',
        lineColor: 'bg-blue-200'
      };
    default:
      return {
        label: '待处理',
        bgColor: 'bg-gray-100 text-gray-800',
        darkBgColor: 'bg-gray-700 text-gray-300',
        iconColor: 'w-5 h-5 text-gray-300',
        lineColor: 'bg-gray-200'
      };
  }
};