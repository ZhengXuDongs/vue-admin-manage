export default {
  path: '/system',
  name: '系统设置',
  code: 'System',
  isSingle: false,
  image: require('../assets/img/icon/maintenance.png'),
  breadcrumbData: [{ name: '系统设置', path: '/system' }],
  meta: {
    permission: ['admin']
  },
  component: () => import('../views/system'),
  children: [
    {
      path: '/system/user',
      name: '用户管理',
      code: 'SystemUser',
      isSingle: true,
      breadcrumbData: [
        { name: '系统设置', path: '/system' },
        { name: '用户管理', path: '/system/user' }
      ],
      meta: {
        permission: ['admin']
      },
      component: () => import('../views/system/user')
    },
    {
      path: '/system/menu',
      name: '菜单管理',
      code: 'SystemMenu',
      isSingle: true,
      breadcrumbData: [
        { name: '系统设置', path: '/system' },
        { name: '菜单管理', path: '/system/menu' }
      ],
      meta: {
        permission: ['admin']
      },
      component: () => import('../views/system/menu')
    }
  ]
}
