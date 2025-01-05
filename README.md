# 订单管理系统

基于 React + TypeScript + Vite 构建的现代化订单管理系统。

## 项目结构

```
src/
├── components/                # 组件目录
│   ├── ErrorMessage/         # 错误信息展示组件
│   ├── Filters/             # 筛选器组件
│   ├── LoadingSpinner/      # 加载动画组件
│   ├── OrderDetails/        # 订单详情组件
│   │   ├── CostBreakdown.tsx    # 费用明细
│   │   ├── IPResourceInfo.tsx   # IP资源信息
│   │   ├── OrderDetails.tsx     # 订单详情容器
│   │   └── ServerConfig.tsx     # 服务器配置
│   ├── OrderTable/          # 订单表格组件
│   │   ├── OrderTable.tsx       # 主表格组件
│   │   ├── OrderTypeLabel.tsx   # 订单类型标签
│   │   └── hooks/              # 表格相关钩子
│   │       ├── usePagination.ts # 分页逻辑
│   │       └── useSorting.ts    # 排序逻辑
│   ├── OrderTimeline/       # 订单时间线组件
│   ├── Sidebar/            # 侧边栏组件
│   └── Table/              # 通用表格组件
├── hooks/                   # 全局钩子函数
├── types/                   # TypeScript 类型定义
│   └── order.ts            # 订单相关类型
├── utils/                   # 工具函数
│   ├── countryFlags.ts     # 国家代码与旗帜映射
│   └── mockData.ts         # 模拟数据
├── App.tsx                 # 应用主组件
├── main.tsx               # 应用入口
└── index.css              # 全局样式

```

## 主要功能模块

1. **订单列表 (OrderTable)**
   - 订单基本信息展示
   - 支持排序和分页
   - 可展开查看详情

2. **订单详情 (OrderDetails)**
   - IP资源信息
   - 服务器配置
   - 费用明细（含优惠信息）

3. **筛选功能 (Filters)**
   - 按订单类型筛选
   - 按地区筛选

4. **订单状态 (OrderTimeline)**
   - 时间线形式展示订单状态
   - 清晰的状态流转展示

## 技术特点

- 使用 TypeScript 确保类型安全
- 基于 Tailwind CSS 的响应式设计
- 组件化架构，高度可复用
- 使用 React Hooks 管理状态
- Vite 提供快速的开发体验

## 开发指南

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 构建生产版本：
```bash
npm run build
``` 