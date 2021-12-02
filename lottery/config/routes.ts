export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: '登录',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: '欢迎',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: '二级管理页',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/',
    redirect: '/EmptyPage',
  },
  {
    name: '奖品配置',
    icon: 'crown',
    path: '/lotterypage',
    component: './LotteryPage',
  },
  {
    name: '空白页面',
    icon: 'smile',
    path: '/emptypage',
    component: './EmptyPage',
  },
  {
    component: './404',
  },
];
