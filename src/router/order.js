export default {
  path: '/order',
  name: '订单管理',
  code: 'Order',
  isSingle: false,
  image: require('../assets/img/icon/regulatory.png'),
  breadcrumbData: [{ name: '订单管理', path: '/order' }],
  meta: {
    permission: ['user']
  },
  component: () => import('../views/order'),
  children: [
    {
      path: '/order/cash',
      name: '现金管理',
      code: 'OrderCash',
      isSingle: true,
      breadcrumbData: [
        { name: '订单管理', path: '/order' },
        { name: '现金管理', path: '/order/cash' }
      ],
      meta: {
        permission: ['user']
      },
      component: () => import('../views/order/cash')
    }
  ]
}
